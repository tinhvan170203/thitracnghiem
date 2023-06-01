const Cauhois = require("../models/CauHoi");
const Cuocthis = require("../models/Cuocthi");
const Danhsachthisinhs = require("../models/DanhSachThiSinh");
const LichsuThis = require("../models/LichsuThi");
const Monthis = require("../models/Monthi");

module.exports = {
  //controller monthi
  getMonthiList: async (req, res) => {
    let perPage = 5;
    let page = Number(req.query.page) || 1;
    let { tenmonthi, mota } = req.query;

    try {
      let donvisDb = await Monthis.find({
        mota: { $regex: mota, $options: "i" },
        tenmonthi: { $regex: tenmonthi, $options: "i" },
      }).sort({ thutu: 1 });

      let tongbanghi = donvisDb.length;
      let total = Math.ceil(donvisDb.length / perPage);

      let donvis = await Monthis.find({
        mota: { $regex: mota, $options: "i" },
        tenmonthi: { $regex: tenmonthi, $options: "i" },
      })
        .sort({ thutu: 1 })
        .skip((page - 1) * perPage)
        .limit(perPage);
      res
        .status(200)
        .json({ status: "success", donvis, page, total, tongbanghi });
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message: "Có lỗi xảy ra khi lấy dữ liệu. Vui lòng liên hệ Admin",
      });
    }
  },

  addMonthi: async (req, res) => {
    let { tenmonthi, mota, thutu } = req.body;
    let motaParam = req.body.queryParams.mota;
    let tenmonthiParam = req.body.queryParams.tenmonthi;
    let page = req.body.queryParams.page;
    let perPage = 5;

    try {
      let newItem = new Monthis({
        tenmonthi,
        mota,
        thutu: Number(thutu),
      });
      await newItem.save();

      let donvisDb = await Monthis.find({
        mota: { $regex: motaParam, $options: "i" },
        tenmonthi: { $regex: tenmonthiParam, $options: "i" },
      }).sort({ thutu: 1 });

      //   let banghi = await Monthis.find({
      //     mota: { $regex: mota, $options: "i" },
      //     tenmonthi: { $regex: tenmonthi, $options: "i" }
      //   });

      let tongbanghi = donvisDb.length;
      let total = Math.ceil(donvisDb.length / perPage);

      let donvis = await Monthis.find({
        mota: { $regex: motaParam, $options: "i" },
        tenmonthi: { $regex: tenmonthiParam, $options: "i" },
      })
        .sort({ thutu: 1 })
        .skip((page - 1) * perPage)
        .limit(perPage);

      res
        .status(200)
        .json({
          status: "success",
          donvis,
          page,
          total,
          tongbanghi,
          message: "thêm mới thành công",
        });
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message: "Có lỗi xảy ra khi thêm mới bản ghi",
      });
    }
  },

  deleteMonthi: async (req, res) => {
    let id = req.params.id;
    let perPage = 5;
    let page = 1;
    let { tenmonthi, mota } = req.query;

    try {
      //check xem có câu hỏi nào của môn thi k
      let checkedCauhoi = await Cauhois.findOne({
        monthi: id
      });

      // console.log(checkedCauhoi !== null)
      if(checkedCauhoi !== null){
        const error = new Error('Lỗi do có câu hỏi thuộc môn thi');
        error.status = 401;
        throw error;
      };

      //check xem có cuoc thi  nào của môn thi k
      let checkedCuocthi = await Cuocthis.findOne({
        monthi: id
      });

      // console.log(checkedCauhoi !== null)
      if(checkedCuocthi !== null){
        const error = new Error('Lỗi do có cuoc thi thuộc môn thi');
        error.status = 401;
        throw error;
      };

      await Monthis.findByIdAndDelete(id);

      let donvisDb = await Monthis.find({
        mota: { $regex: mota, $options: "i" },
        tenmonthi: { $regex: tenmonthi, $options: "i" },
      }).sort({ thutu: 1 });

      let tongbanghi = donvisDb.length;

      let total = Math.ceil(donvisDb.length / perPage);
      let donvis = await Monthis.find({
        mota: { $regex: mota, $options: "i" },
        tenmonthi: { $regex: tenmonthi, $options: "i" },
      })
        .sort({ thutu: 1 })
        .skip((page - 1) * perPage)
        .limit(perPage);

      res.status(200).json({
        status: "success",
        donvis,
        total,
        tongbanghi,
        message: "Xóa thành công",
      });
    } catch (error) {
      console.log("lỗi: ", error.message);
      res
        .status(401)
        .json({
          status: "failed",
          message: "Thao tác xóa thất bại do có câu hỏi, cuộc thi đang thuộc môn thi người dùng vừa xóa trong hệ thống.",
        });
    }
  },
  editMonthi: async (req, res) => {
    let id = req.params.id;
    const { tenmonthi, mota, thutu } = req.body;
    let page = req.body.queryParams.page;
    let perPage = 5;
    let motaParam = req.body.queryParams.mota;
    let tenmonthiParam = req.body.queryParams.tenmonthi;
    try {
      await Monthis.findByIdAndUpdate(id, {
        tenmonthi,
        mota,
        thutu: Number(thutu),
      });
      let donvis = await Monthis.find({
        mota: { $regex: motaParam, $options: "i" },
        tenmonthi: { $regex: tenmonthiParam, $options: "i" },
      })
        .sort({ thutu: 1 })
        .skip((page - 1) * perPage)
        .limit(perPage);

      res.status(200).json({
        status: "success",
        donvis,
        message: "Cập nhật thành công",
      });
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message: "Có lỗi xảy ra khi chỉnh sửa",
      });
    }
  },
  getMonthiDetail: async (req, res) => {
    let id = req.params.id;

    let quantrinhommonthi = req.user.quantrinhomdonvi;
    try {
      let item = await Monthis.findById(id);
      res.status(200).json({ item, quantrinhommonthi });
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message: "Có lỗi xảy ra khi lấy thông tin chi tiết môn thi",
      });
    }
  },
  getMonthiOfUser: async (req, res) => {
    try {
      let quantrinhommonthi = req.user.quantrinhomdonvi;
      res.status(200).json(quantrinhommonthi)
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message: "Có lỗi xảy ra khi lấy thông tin chi tiết môn thi",
      });
    }
  },

  // cuộc thi
  addCuocthi: async (req, res) => {
    let monthi = req.params.id; //id môn thi
    let {
      tencuocthi,
      soluongcauhoi,
      thoigianthi,
      ngaytochucthi,
      password
    } = req.body;

    let tencuocthiParam = req.body.queryParams.tencuocthi
    try {
      let newItem = new Cuocthis({
        tencuocthi,
        soluongcauhoi,
        thoigianthi,
        ngaytochucthi,
        password,
        monthi,
        monthiString: monthi
      });
      await newItem.save();

      let items = await Cuocthis.find({
        tencuocthi: { $regex: tencuocthiParam, $options: "i" },
        monthi
      }).sort({createdAt: -1})

      res.status(200).json({
        status: "success",
        message: "Thêm mới thành công",
        items
      });
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message: "Có lỗi xảy ra khi thêm mới",
      });
    }
  },
  getCuocthis: async (req, res) => {
    let { tencuocthi } = req.query;
    let id = req.params.id; // id môn thi
    // console.log(tencuocthi)
    try {
      let items = await Cuocthis.find({
        tencuocthi: { $regex: tencuocthi, $options: "i" }, 
        monthi: id
      }).sort({createdAt: -1})

      res.status(200).json(items)
    } catch (error) {
      console.log("lỗi: ", error.message);
      res
        .status(401)
        .json({
          status: "failed",
          message: "Có lỗi xảy ra khi phía máy chủ. Liên hệ Admin",
        });
    }
  },

  // update status cuộc thi
  updateStatusCuocthi: async (req, res) => {
    let id1 = req.params.id1; //id1 cuộc thi
    let id = req.params.id; //id môn thi

    let tencuocthiParam = req.body.tencuocthi
    try {
      await Cuocthis.findOneAndUpdate({status: true, _id: {$ne: id1}},{
        status: false
      });
      let item = await Cuocthis.findById(id1);
      item.status = !item.status;
      await item.save()
      // await Cuocthis.findOneAndUpdate({_id: id1}, {
      //   status: true
      // });

      let items = await Cuocthis.find({
        tencuocthi: { $regex: tencuocthiParam, $options: "i" }, 
        monthi: id
      }).sort({createdAt: -1})

      res.status(200).json(items);

    } catch (error) {
      console.log("lỗi: ", error.message);
      res
        .status(401)
        .json({
          status: "failed",
          message: "Có lỗi xảy ra khi phía máy chủ. Liên hệ Admin",
        });
    }
  },

  updateOptionCuocthi: async (req, res) => {
       let {tencuocthi, soluongcauhoi, thoigianthi, ngaytochucthi, password} = req.body;
       let tencuocthiParam = req.body.queryParams.tencuocthi;
       let id1 = req.params.id1; //id1 cuộc thi
       let id = req.params.id; //id môn thi
       try {
        await Cuocthis.findByIdAndUpdate(id1,{
          tencuocthi,
          soluongcauhoi, thoigianthi, ngaytochucthi,
          password
        });

        let items = await Cuocthis.find({
          tencuocthi: { $regex: tencuocthiParam, $options: "i" }, 
          monthi: id
        }).sort({createdAt: -1})
  
        res.status(200).json({items,message: "Update cấu hình cuộc thi thành công!"});
  
       } catch (error) {
        console.log("lỗi: ", error.message);
        res
          .status(401)
          .json({
            status: "failed",
            message: "Có lỗi xảy ra khi phía máy chủ. Liên hệ Admin",
          });
       }
  },

  //delete cuộc thi sẽ xóa hết thí sinh trong cuộc thi và lịch sử bài thi cửa thí sinh thi đó
  deleteCuocthi: async (req, res) => {
    let id = req.params.id; //id môn thi

    let id1 = req.params.id1; //id cuộc thi cần xóa
    let { tencuocthi } = req.query;
    try {
      //tìm ra tất cả thí sinh trong cuộc thi đó
      let thisinhs = await Danhsachthisinhs.find({cuocthi: id1});
      //xóa từng lịch sử bài thi của từng thí sinh
      for(i of thisinhs){
        await LichsuThis.deleteMany({thisinh: i._id})
      }
      // xóa thi sinh khỏi hệ thống
      await Danhsachthisinhs.deleteMany({cuocthi: id1});
      //xóa cuộc thi 
      await Cuocthis.findByIdAndDelete(id1);

      let items = await Cuocthis.find({
        tencuocthi: { $regex: tencuocthi, $options: "i" }, 
        monthi: id
      }).sort({createdAt: -1})
      res.status(200).json({message: "Xóa cuộc thi thành công", items})
    } catch (error) {
      console.log("lỗi: ", error.message);
      res
        .status(401)
        .json({
          status: "failed",
          message: "Có lỗi xảy ra khi phía máy chủ. Liên hệ Admin",
        });
    }
  },

  getKetquathi: async (req, res) => {
    let id = req.params.id; //id cuoocj thi cần lấy kết quả
    try {
      //lấy ra danh sách tất cả thí sinh của cuộc thi đó
      let cuocthi = await Cuocthis.findById(id)
      let list_thisinh = await Danhsachthisinhs.find({cuocthi: id}).populate("donvi");

      let data = [];
      //lặp qua từng thí sinh của cuộc thi để lấy ra số bài thi thí sinh đó thi
      //sắp xếp theo thời gian thi và lấy ra bài thi đạt kết quả cao nhất và tổng số lần thi
      for(thisinh of list_thisinh){
        let list_baithi = await LichsuThis.find({thisinh: thisinh._id}).populate("questions.question");
        let list_baithiCompare = [];
        for(baithi of list_baithi){
          // lấy ra bài thi có kết quả tốt nhất trong tất cả các bài thi
          let socaudung = 0;
          baithi.questions.forEach(question=>{
            if(question.question.answer === question.choice){
              socaudung += 1
            }
          });

          list_baithiCompare.push({
            _id: baithi._id,
            questions: baithi.questions,
            thoigianbatdau:baithi.thoigianbatdau,
            thoigiannopbai:baithi.thoigiannopbai,
            socaudung})
        };
        //lấy ra bài thi có 
        let baithi_of_maxcaudung = list_baithiCompare.reduce((prev, current) => (prev.socaudung > current.socaudung) ? prev : current);
        data.push({thisinh: thisinh,baithi: baithi_of_maxcaudung, solanthi: list_baithi.length})
      };
      //sắp xếp các thí sinh theo thứ tự câu trả lời đúng từ cao xuống thấp
      data  = data.sort((a, b)=> b.baithi.socaudung - a.baithi.socaudung);
      res.status(200).json({data, cuocthi})
    } catch (error) {
      console.log("lỗi: ", error.message);
      res
        .status(401)
        .json({
          status: "failed",
          message: "Có lỗi xảy ra khi phía máy chủ. Liên hệ Admin",
        });
    }
  }
  
};
