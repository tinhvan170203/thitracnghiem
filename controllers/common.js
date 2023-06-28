
const Donvis = require("../models/Donvi");
const Monthis = require("../models/Monthi");
const Cuocthis = require("../models/Cuocthi");
const Danhsachthisinhs = require("../models/DanhSachThiSinh");
const Cauhois = require("../models/CauHoi");
const LichsuThis = require("../models/LichsuThi");

module.exports = {
  getDonviList: async (req, res) => {
    try {
      let donvis = await Donvis.find().sort({ thutu: 1 });
      res.status(200).json({ status: "success", donvis });
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message: "Có lỗi xảy ra khi lấy danh sách đơn vị. Vui lòng liên hệ quản trị viên",
      });
    }
  },
 
  //thitracnghiem
  getAllMonthi: async (req,res) => {
    try {
      let data = await Monthis.find().sort({thutu: 1})
      res.status(200).json(data)
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message: error.message,
      });
    }
  },
  getInfoCuocthi: async (req, res) => {
    let id = req.params.id;
    try {
      let item = await Cuocthis.findById(id).populate('monthi');
      res.status(200).json(item)
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message: error.message,
      });
    }
  },
  //check xem có cuộc thi nào đang active k
  checkActiveTest: async (req, res) => {
    try {
      let checkedTest = await Cuocthis.findOne({status: true});

      if(checkedTest === null){
        const error = new Error('Lỗi do không có cuộc thi nào đang diễn ra trong hệ thống.');
        error.status = 401;
        throw error;
      };

      res.status(200).json(checkedTest)
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(500).json({
        status: "failed",
        message: error.message,
      });
    }
  },

  loginTest: async (req, res) => {
    let {sbd, hoten, id_cuocthi} = req.body;
    // console.log(req.body)
    try {
      let item = await Danhsachthisinhs.findOne({sbd,hoten, cuocthi: id_cuocthi}).populate('cuocthi').populate('donvi');
      if(item === null){
        const error = new Error('Sai thông tin của thí sinh dự thi. Vui lòng xem lại thông tin cá nhân hoặc liên hệ quản trị viên.');
        error.status = 401;
        throw error;
      };
      //check xem thí sinh có đang làm bài thi nào chưa hoàn thành k
      let checkedWorkingTest = await LichsuThis.findOne({thisinh: item._id, thoigiannopbai: 0}).populate("questions.question");
      
      if(checkedWorkingTest !== null){ // TH đang làm bài kiểm tra thì thông báo thí sinh đang làm

        let questionsSendClient = checkedWorkingTest.questions.map(question => {
          return question.question
        });

        let cuocthi = {
          _id: checkedWorkingTest._id, //id lịch sử thi
          thoigianbatdau: checkedWorkingTest.thoigianbatdau,
          thoigianketthuc: checkedWorkingTest.thoigianketthuc,
          thoigiannopbai: checkedWorkingTest.thoigiannopbai,
        }
        res.status(200).json({item, questionsSendClient, cuocthi})

      }else{ // TH này thì tạo 1 bài thi mới cho thí sinh 
       
      let randomQuestions = await Cauhois.aggregate([
          { $match: { monthi: item.cuocthi.monthi} },
          { $sample: { size: item.cuocthi.soluongcauhoi} }
      ]);
  
      // biến đổi loại bỏ answer -> send to client and save localStorage
      let questionsSendClient = randomQuestions.map(question => {
        let {answer, ...tempQuestion} = question;
        return {...tempQuestion}
      });

      let questionsSave = randomQuestions.map(question => {
        return {question: question._id}
      });
  
      let time = new Date();
      let timeStart = time.getTime(); // đổi ra milisecond giây
      let timeEnd = timeStart + item.cuocthi.thoigianthi * 60 * 1000;

      let newLichsuthi = new LichsuThis({
        thoigianbatdau: timeStart,
        thoigianketthuc: timeEnd,
        thisinh: item._id,
        thoigiannopbai: 0,
        questions: questionsSave
      });

      await newLichsuthi.save(); 
      
      let cuocthi = {
        _id: newLichsuthi._id, //id lịch sử thi
        thoigianbatdau: newLichsuthi.thoigianbatdau,
        thoigianketthuc: newLichsuthi.thoigianketthuc,
        thoigiannopbai: newLichsuthi.thoigiannopbai,
      }
      res.status(200).json({item, questionsSendClient, cuocthi})
      }

    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(500).json({
        status: "failed",
        message: error.message,
      });
    }
  },

  checkedTest: async (req, res) => {
    let id = req.params.id; //id bài thi cần test

    try {
      let checked = await LichsuThis.findById(id);
      if(checked === null){
        const error = new Error('Bài thi trên thiết bị đã bị xóa bởi quản trị viên. Vui lòng nhập sbd để vào thi lần tiếp theo.');
        error.status = 401;
        throw error;
      };

      let checkedNopbai = checked.thoigiannopbai !== 0;
      if(checkedNopbai){
        const error = new Error('Bài thi trên thiết bị đã hoàn thành. Vui lòng nhập sbd để vào thi lần tiếp theo.');
        error.status = 401;
        throw error;
      };

      let timeNow = new Date();
      timeNow = timeNow.getTime()
      res.status(200).json({timeNow})
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(500).json({
        status: "failed",
        message: error.message,
      });
    }
  }, 
  submitTest: async (req, res) => {
    let questions = req.body;
    // console.log(questions)

    let id = req.params.id; // id bai thi
    let time = new Date();
    let timeEndTest = time.getTime(); // đổi ra milisecond giây
    try {
      let item = await LichsuThis.findById(id).populate("questions.question").populate({
        path: 'thisinh',
        populate: { path: 'cuocthi' }
      });
      // console.log(item)
      let choicedTrue = 0;

      let updatedQuestions = item.questions.map(question=>{
        // get question trùng với dữ liệu câu hỏi gửi lên
        let compareQuestion = questions.find(i=> i._id.toString() === question.question._id.toString());

        // tính ra số câu tra lời đúng
        if(question.question.answer === compareQuestion.choice){
          choicedTrue += 1
        }
        //return  save db
        return {question: question.question._id, choice: compareQuestion.choice !== undefined ? compareQuestion.choice : ""}
      });
      // console.log(updatedQuestions)
      
      await LichsuThis.findOneAndUpdate({_id: id},{
        thoigiannopbai: timeEndTest,
        questions: updatedQuestions
      });

      let allQuestion = questions.length;
      let diem = item.thisinh.cuocthi.password;

      res.status(200).json({message: "Hoàn thành bài thi", choicedTrue, allQuestion, diem})
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(500).json({
        status: "failed",
        message: error.message,
      });
    }
  }
};
