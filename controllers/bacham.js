const BacHams = require("../models/Bacham");
const Hesoluongs = require("../models/Hesoluong");


module.exports = {

    getBachamList: async (req, res) => {
        let perPage = 5;
        let page = Number(req.query.page) || 1;

        try {
          let donvisDb = await BacHams.find().sort({ thutu: 1 });
    
          let banghi = await BacHams.find();
          let tongbanghi = banghi.length;
    
          let total = Math.ceil(donvisDb.length / perPage);
          let donvis = await BacHams.find()
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

  addBacham: async (req, res) => {
    let { capham, nienhanlenham, thutu } = req.body;

    let page = req.body.queryParams.page;
    let perPage = 5;

    try {
      let newItem = new BacHams({
        capham,
        nienhanlenham,
        thutu: Number(thutu),
      });
      await newItem.save();

      let donvisDb = await BacHams.find().sort({ thutu: 1 });
      let tongbanghi = donvisDb.length;
      let total = Math.ceil(donvisDb.length / perPage);
      let donvis = await BacHams.find()
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
  deleteBacham: async (req, res) => {
    let id = req.params.id;
    let perPage = 5;
    let page = 1;
    try {
      await BacHams.findByIdAndDelete(id);
      let donvisDb = await BacHams.find().sort({ thutu: 1 });

      let banghi = await BacHams.find();
      let tongbanghi = banghi.length;

      let total = Math.ceil(donvisDb.length / perPage);
      let donvis = await BacHams.find()
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
  editBacham: async (req, res) => {
    let id = req.params.id;
    const { capham, nienhanlenham, thutu} = req.body;
    let page = req.body.queryParams.page;
    let perPage = 5;
    try {
      await BacHams.findByIdAndUpdate(id, {
        capham, nienhanlenham, thutu
      });
      let donvis = await BacHams.find()
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

    getHesoluongList: async (req, res) => {
        let perPage = 5;
        let page = Number(req.query.page) || 1;

        try {
          let donvisDb = await Hesoluongs.find().sort({ thutu: 1 });
    
          let banghi = await Hesoluongs.find();
          let tongbanghi = banghi.length;
    
          let total = Math.ceil(donvisDb.length / perPage);
          let donvis = await Hesoluongs.find()
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

  addHesoluong: async (req, res) => {
    let { hesoluong, nienhanlenluong, thutu } = req.body;

    let page = req.body.queryParams.page;
    let perPage = 5;

    try {
      let newItem = new Hesoluongs({
        hesoluong,
        nienhanlenluong,
        thutu: Number(thutu),
      });
      await newItem.save();

      let donvisDb = await Hesoluongs.find().sort({ thutu: 1 });
      let tongbanghi = donvisDb.length;
      let total = Math.ceil(donvisDb.length / perPage);
      let donvis = await Hesoluongs.find()
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
          message: "Thêm mới hệ số lương thành công",
        });
    } catch (error) {
      console.log("lỗi: ", error.message);
      res
        .status(401)
        .json({
          status: "failed",
          message: "Có lỗi xảy ra khi thêm mới",
        });
    }
  },
  deleteHesoluong: async (req, res) => {
    let id = req.params.id;
    let perPage = 5;
    let page = 1;
    try {
      await Hesoluongs.findByIdAndDelete(id);
      let donvisDb = await Hesoluongs.find().sort({ thutu: 1 });

      let banghi = await Hesoluongs.find();
      let tongbanghi = banghi.length;

      let total = Math.ceil(donvisDb.length / perPage);
      let donvis = await Hesoluongs.find()
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
  editHesoluong: async (req, res) => {
    let id = req.params.id;
    const { hesoluong, nienhanlenluong, thutu} = req.body;
    let page = req.body.queryParams.page;
    let perPage = 5;
    try {
      await Hesoluongs.findByIdAndUpdate(id, {
        hesoluong, nienhanlenluong, thutu
      });
      let donvis = await Hesoluongs.find()
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
