const Chucvus = require("../models/Chucvu");


module.exports = {

    getChucvuList: async (req, res) => {
        let perPage = 5;
        let page = Number(req.query.page) || 1;

        try {
          let donvisDb = await Chucvus.find().sort({ thutu: 1 });
    
          let banghi = await Chucvus.find();
          let tongbanghi = banghi.length;
    
          let total = Math.ceil(donvisDb.length / perPage);
          let donvis = await Chucvus.find()
            .sort({ thutu: 1 })
            .skip((page - 1) * perPage)
            .limit(perPage)
          res.status(200).json({ status: "success", donvis, page, total, tongbanghi });
        } catch (error) {
          console.log("lỗi: ", error.message);
          res
            .status(401)
            .json({
              status: "failed",
              message: "Có lỗi xảy ra khi lấy dữ liệu. Vui lòng liên hệ Admin",
            });
        }
      },

  addChucvu: async (req, res) => {
    let { tenchucvu,  thutu } = req.body;

    let page = req.body.queryParams.page;
    let perPage = 5;

    try {
      let newItem = new Chucvus({
        tenchucvu,    
        thutu: Number(thutu),
      });
      await newItem.save();

      let donvisDb = await Chucvus.find().sort({ thutu: 1 });
      let tongbanghi = donvisDb.length;
      let total = Math.ceil(donvisDb.length / perPage);
      let donvis = await Chucvus.find()
        .sort({ thutu: 1 })
        .skip((page - 1) * perPage)
        .limit(perPage);
      res
        .status(200)
        .json({
          status: "success",
          donvis,
          tongbanghi,
          total,
          message: "Thêm mới bậc hàm thành công",
        });
    } catch (error) {
      console.log("lỗi: ", error.message);
      res
        .status(401)
        .json({
          status: "failed",
          message: "Có lỗi xảy ra khi thêm mới cấp bậc hàm",
        });
    }
  },
  deleteChucvu: async (req, res) => {
    let id = req.params.id;
    let perPage = 5;
    let page = 1;
    try {
      await Chucvus.findByIdAndDelete(id);
      let donvisDb = await Chucvus.find().sort({ thutu: 1 });

      let banghi = await Chucvus.find();
      let tongbanghi = banghi.length;

      let total = Math.ceil(donvisDb.length / perPage);
      let donvis = await Chucvus.find()
        .sort({ thutu: 1 })
        .skip((page - 1) * perPage)
        .limit(perPage)

      res
        .status(200)
        .json({
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
        .json({ status: "failed", message: "Có lỗi xảy ra với thao tác xóa. Vui lòng liên hệ Admin" });
    }
  },
  editChucvu: async (req, res) => {
    let id = req.params.id;
    const { tenchucvu,  thutu} = req.body;
    let page = req.body.queryParams.page;
    let perPage = 5;
    try {
      await Chucvus.findByIdAndUpdate(id, {
        tenchucvu,  thutu
      });
      let donvis = await Chucvus.find()
        .sort({ thutu: 1 })
        .skip((page - 1) * perPage)
        .limit(perPage)

      res
        .status(200)
        .json({
          status: "success",
          donvis,
          message: "Cập nhật thành công",
        });
    } catch (error) {
      console.log("lỗi: ", error.message);
      res
        .status(401)
        .json({
          status: "failed",
          message: "Có lỗi xảy ra khi chỉnh sửa",
        });
    }
  },
};
