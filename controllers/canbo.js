const Dois = require("../models/Doi");
const Canbo = require("../models/Canbo");
const Donvis = require("../models/Donvi");
const Canbos = require("../models/Canbo");

module.exports = {
  addCanbo: async (req, res) => {
    let {
      hoten,
      doi,
      donvi,
      ngaysinh,
      ngaylenluong,
      ngaylenham,
      chucvu,
      lyluanchinhtri,
      trinhdohocvan,
      bacham,
      quequan,
      thedang,
      sohieuCAND,
      gioitinh,
      baohiemyte,
      ngayvaodang,
      CCCD,
      hesoluong,
      ngayvedoi,
      ngayvedonvi,
      ngaygiuchucvu,
    } = req.body;

    ngaylenluong = new Date(req.body.ngaylenluong).toISOString();
    ngayvaodang = new Date(req.body.ngayvaodang).toISOString();
    ngaysinh = new Date(req.body.ngaysinh).toISOString();
    ngaylenham = new Date(req.body.ngaylenham).toISOString();

    try {
      let newItem = new Canbo({
        hoten,
        ngaysinh,
        quequan,
        gioitinh,
        CCCD,
        ngayvaodang,
        sohieuCAND,
        baohiemyte,
        trinhdohocvan,
        lyluanchinhtri,
        thedang,
        bacham: [
          {
            bacham: bacham,
            bachamString: bacham,
            tungay: ngaylenham,
          },
        ],
        hesoluong: [
          {
            hesoluong: hesoluong,
            hesoluongString: hesoluong,
            tungay: ngaylenluong,
          },
        ],
        hesoluong: [
          {
            hesoluong: hesoluong,
            hesoluongString: hesoluong,
            tungay: ngaylenluong,
          },
        ],
        donvi: [
          {
            donvi: donvi,
            donviString: donvi,
            tungay: ngayvedonvi,
          },
        ],
        doi: [
          {
            doi: doi,
            doiString: doi,
            tungay: ngayvedoi,
          },
        ],
        chucvu: [
          {
            chucvu: chucvu,
            chucvuString: chucvu,
            tungay: ngaygiuchucvu,
          },
        ],
      });
      await newItem.save();
      res.status(200).json({
        status: "success",
        message: "Thêm mới thành công",
      });
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message: "Có lỗi xảy ra khi thêm mới",
      });
    }
  },
  // danh sach can bo thuoc cac don vi duoc quan ly hien tai
  getCanboOfDonviQuanLy: async (req, res) => {
    let { donvi, hoten, doi, chucvu, bacham, CCCD, sohieuCAND } = req.query;

    try {
      let quantrinhomdonvi = req.user.quantrinhomdonvi.map((i) =>
        i._id.toString()
      );
      // console.log(quantrinhomdonvi.includes(donvi))
      // let items = await Canbos.find({
      //   hoten: {$regex: hoten, $options: "$i" },
      //   sohieuCAND: {$regex: sohieuCAND, $options: "$i" },
      //   CCCD: {$regex: CCCD, $options: "$i" },
      //    $and: [
      //       {"donvi.donviString": {$in: quantrinhomdonvi }},
      //       {"donvi.donviString": {$regex: donvi, $options: "$i" }}
      //     ]
      // });
      let items = await Canbos.aggregate([
        {
          $project: {
            donvi: {
              $arrayElemAt: [
                "$donvi",
                {
                  $indexOfArray: [
                    "$donvi.date",
                    { $and: [{ $max: "$donvi.date" }] },
                  ],
                },
              ],
            },
            doi: {
              $arrayElemAt: [
                "$doi",
                {
                  $indexOfArray: [
                    "$doi.date",
                    { $and: [{ $max: "$doi.date" }] },
                  ],
                },
              ],
            },
            bacham: {
              $arrayElemAt: [
                "$bacham",
                {
                  $indexOfArray: [
                    "$bacham.date",
                    { $and: [{ $max: "$bacham.date" }] },
                  ],
                },
              ],
            },
            hesoluong: {
              $arrayElemAt: [
                "$hesoluong",
                {
                  $indexOfArray: [
                    "$hesoluong.date",
                    { $and: [{ $max: "$hesoluong.date" }] },
                  ],
                },
              ],
            },
            chucvu: {
              $arrayElemAt: [
                "$chucvu",
                {
                  $indexOfArray: [
                    "$chucvu.date",
                    { $and: [{ $max: "$chucvu.date" }] },
                  ],
                },
              ],
            },
            hoten: 1,
            CCCD: 1,
            sohieuCAND: 1,
            quequan: 1,
            baohiemyte: 1,
            thedang: 1,
            trinhdohocvan: 1,
            gioitinh: 1,
            ngayvaodang: 1,
            ngaysinh: 1,
            lyluanchinhtri: 1,
          },
        },
        {
          $match: {
            $and: [
              { "donvi.donviString": { $regex: donvi, $options: "i" } },
              { "donvi.donviString": { $in: quantrinhomdonvi } },
              { "doi.doiString": { $regex: doi, $options: "i" } },
              { "bacham.bachamString": { $regex: bacham, $options: "i" } },
              { "chucvu.chucvuString": { $regex: chucvu, $options: "i" } },
              { hoten: { $regex: hoten, $options: "i" } },
              { CCCD: { $regex: CCCD, $options: "i" } },
              { sohieuCAND: { $regex: sohieuCAND, $options: "i" } },
            ],
          },
        },
        {
          $lookup: {
            from: "bachams",
            localField: "bacham.bacham",
            foreignField: "_id",
            as: "bachamPopulate",
          },
        },
        {
          $lookup: {
            from: "chucvus",
            localField: "chucvu.chucvu",
            foreignField: "_id",
            as: "chucvuPopulate",
          },
        },
        {
          $lookup: {
            from: "hesoluongs",
            localField: "hesoluong.hesoluong",
            foreignField: "_id",
            as: "hesoluongPopulate",
          },
        },
        {
          $lookup: {
            from: "dois",
            localField: "doi.doi",
            foreignField: "_id",
            as: "doiPopulate",
          },
        },
        {
          $lookup: {
            from: "donvis",
            localField: "donvi.donvi",
            foreignField: "_id",
            as: "donviPopulate",
          },
        },
      ]).sort({ hoten: 1 });

      res.status(200).json(items);
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message:
          "Có lỗi xảy ra khi lấy danh sách cán bộ. Vui lòng liên hệ quản trị hệ thống.",
      });
    }
  },
  updatedCanbo: async (req, res) => {
    let id = req.params.id;
    let {
      hoten,
      quequan,
      gioitinh,
      ngaysinh,
      CCCD,
      baohiemyte,
      ngayvaodang,
      thedang,
      lyluanchinhtri,
      trinhdohocvan,
      sohieuCAND,
    } = req.body;
    try {
      await Canbos.findByIdAndUpdate(id, {
        hoten,
        quequan,
        gioitinh,
        ngaysinh,
        CCCD,
        baohiemyte,
        ngayvaodang,
        thedang,
        lyluanchinhtri,
        trinhdohocvan,
        sohieuCAND,
      });
      res.status(200).json({ message: "update thông tin cán bộ thành công" });
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message:
          "Có lỗi xảy ra khi điều chỉnh thông tin cán bộ. Vui lòng liên hệ quản trị hệ thống.",
      });
    }
  },
  deleteCanbo: async (req, res) => {
    let id = req.params.id;
    try {
      await Canbos.findByIdAndDelete(id);
      res.status(200).json({ message: "Xóa cán bộ thành công" });
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message:
          "Có lỗi xảy ra khi xóa cán bộ. Vui lòng liên hệ quản trị hệ thống.",
      });
    }
  },
  moveCanbo: async (req, res) => {
    let id = req.params.id;
    let { donvi, doi, ngayvedonvi, ngayvedoi } = req.body;
    try {
      await Canbos.updateOne(
        { _id: id },
        {
          $push: {
            donvi: {
              donvi,
              donviString: donvi,
              tungay: ngayvedonvi,
            },
            doi: {
              doi,
              doiString: doi,
              tungay: ngayvedoi,
            },
          },
        }
      );
      res.status(200).json({ message: "Chuyển công tác cán bộ thành công" });
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message:
          "Có lỗi xảy ra khi chuyển công tác cán bộ. Vui lòng liên hệ quản trị hệ thống.",
      });
    }
  },
  changeBacHam: async (req, res) => {
    let id = req.params.id;
    let { bacham, ngaylenham, ghichu } = req.body;
    ngaylenham = new Date(req.body.ngaylenham).toISOString();
    try {
      await Canbos.updateOne(
        { _id: id },
        {
          $push: {
            bacham: {
              bacham,
              bachamString: bacham,
              tungay: ngaylenham,
              ghichu,
            },
          },
        }
      );
      res.status(200).json({ message: "Thay đổi cấp bậc hàm thành công" });
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message:
          "Có lỗi xảy ra khi điều chỉnh bậc hàm cán bộ. Vui lòng liên hệ quản trị hệ thống.",
      });
    }
  },
  changeChucvu: async (req, res) => {
    let id = req.params.id;
    let { chucvu, ngaygiuchucvu, ghichu } = req.body;
    try {
      await Canbos.updateOne(
        { _id: id },
        {
          $push: {
            chucvu: {
              chucvu,
              chucvuString: chucvu,
              tungay: ngaygiuchucvu,
              ghichu,
            },
          },
        }
      );
      res.status(200).json({ message: "Cập nhật chức vụ thành công" });
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message:
          "Có lỗi xảy ra khi điều chỉnh chức vụ cán bộ. Vui lòng liên hệ quản trị hệ thống.",
      });
    }
  },
  changeHesoluong: async (req, res) => {
    let id = req.params.id;
    let { hesoluong, ngaylenluong, ghichu } = req.body;
    try {
      await Canbos.updateOne(
        { _id: id },
        {
          $push: {
            hesoluong: {
              hesoluong,
              hesoluongString: hesoluong,
              tungay: ngaylenluong,
              ghichu,
            },
          },
        }
      );
      res.status(200).json({ message: "Cập nhật hệ số lương thành công" });
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message:
          "Có lỗi xảy ra khi điều chỉnh hệ số lương cán bộ. Vui lòng liên hệ quản trị hệ thống.",
      });
    }
  },
  fetchedThongtinCanboAdvanced: async (req, res) => {
    let id = req.params.id;
    try {
      let item = await Canbos.findById(id)
        .populate("chucvu.chucvu")
        .populate("donvi.donvi")
        .populate("doi.doi")
        .populate("hesoluong.hesoluong")
        .populate("bacham.bacham");
      item.chucvu = item.chucvu.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      item.bacham = item.bacham.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      item.donvi = item.donvi.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      item.doi = item.doi.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      res.status(200).json(item);
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message:
          "Có lỗi xảy ra khi lấy thông tin cán bộ nâng cao. Vui lòng liên hệ quản trị hệ thống.",
      });
    }
  },
  changeChucvuAdvanced: async (req, res) => {
    let { id, id1 } = req.params;
    let { chucvu, ngaygiuchucvu, ghichu } = req.body;
    try {
      let item = await Canbos.findOneAndUpdate(
        { _id: id, "chucvu._id": id1 },
        {
          $set: {
            "chucvu.$.chucvu": chucvu,
            "chucvu.$.chucvuString": chucvu,
            "chucvu.$.ghichu": ghichu,
            "chucvu.$.tungay": ngaygiuchucvu,
          },
        },
        { new: true }
      )
        .populate("chucvu.chucvu")
        .populate("donvi.donvi")
        .populate("hesoluong.hesoluong")
        .populate("doi.doi")
        .populate("bacham.bacham");

      item.chucvu = item.chucvu.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      item.bacham = item.bacham.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      item.hesoluong = item.hesoluong.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      item.donvi = item.donvi.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      item.doi = item.doi.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      res
        .status(200)
        .json({ data: item, message: "Cập nhật chức vụ nâng cao thành công!" });
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message:
          "Có lỗi xảy ra khi thay đổi quá trình giữ các chức vụ công tác. Vui lòng liên hệ quản trị hệ thống.",
      });
    }
  },
    deleteChucvuAdvanced: async (req, res) => {
      let { id, id1 } = req.params;
      try {
        let item = await Canbos.findOneAndUpdate({ _id: id},
         { $pull: { chucvu: { _id: id1 } } 
        }, { new: true })
        .populate("chucvu.chucvu")
        .populate("donvi.donvi")
        .populate("hesoluong.hesoluong")
        .populate("doi.doi")
        .populate("bacham.bacham");

        item.chucvu = item.chucvu.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        item.bacham = item.bacham.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        item.hesoluong = item.hesoluong.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        item.donvi = item.donvi.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        item.doi = item.doi.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        res
          .status(200)
          .json({ data: item, message: "Xóa chức vụ nâng cao thành công!" });
      } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message:
          "Có lỗi xảy ra khi xóa quá trình giữ các chức vụ công tác. Vui lòng liên hệ quản trị hệ thống.",
      });
      }
  },
  changeBachamAdvanced: async (req, res) => {
    let { id, id1 } = req.params;
    let { bacham, ngaylenham, ghichu } = req.body;
    try {
      let item = await Canbos.findOneAndUpdate(
        { _id: id, "bacham._id": id1 },
        {
          $set: {
            "bacham.$.bacham": bacham,
            "bacham.$.bachamString": bacham,
            "bacham.$.ghichu": ghichu,
            "bacham.$.tungay": ngaylenham,
          },
        },
        { new: true }
      )
        .populate("chucvu.chucvu")
        .populate("donvi.donvi")
        .populate("hesoluong.hesoluong")
        .populate("doi.doi")
        .populate("bacham.bacham");

      item.chucvu = item.chucvu.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      item.bacham = item.bacham.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      item.hesoluong = item.hesoluong.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      item.donvi = item.donvi.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      item.doi = item.doi.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      res
        .status(200)
        .json({ data: item, message: "Cập nhật bậc hàm nâng cao thành công!" });
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message:
          "Có lỗi xảy ra khi thay đổi quá trình giữ các bậc hàm công tác. Vui lòng liên hệ quản trị hệ thống.",
      });
    }
  },
    deleteBachamAdvanced: async (req, res) => {
      let { id, id1 } = req.params;
      try {
        let item = await Canbos.findOneAndUpdate({ _id: id},
         { $pull: { bacham: { _id: id1 } } 
        }, { new: true })
        .populate("chucvu.chucvu")
        .populate("donvi.donvi")
        .populate("doi.doi")
        .populate("hesoluong.hesoluong")
        .populate("bacham.bacham");

        item.chucvu = item.chucvu.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        item.bacham = item.bacham.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        item.hesoluong = item.hesoluong.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        item.donvi = item.donvi.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        item.doi = item.doi.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        res
          .status(200)
          .json({ data: item, message: "Xóa bậc hàm nâng cao thành công!" });
      } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message:
          "Có lỗi xảy ra khi xóa bậc hàm nâng cao. Vui lòng liên hệ quản trị hệ thống.",
      });
      }
  },
  changeHesoluongAdvanced: async (req, res) => {
    let { id, id1 } = req.params;
    let { hesoluong, ngaylenluong, ghichu } = req.body;
    try {
      let item = await Canbos.findOneAndUpdate(
        { _id: id, "hesoluong._id": id1 },
        {
          $set: {
            "hesoluong.$.hesoluong": hesoluong,
            "hesoluong.$.hesoluongString": hesoluong,
            "hesoluong.$.ghichu": ghichu,
            "hesoluong.$.tungay": ngaylenluong,
          },
        },
        { new: true }
      )
        .populate("chucvu.chucvu")
        .populate("donvi.donvi")
        .populate("doi.doi")
        .populate("hesoluong.hesoluong")
        .populate("bacham.bacham");

      item.chucvu = item.chucvu.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      item.bacham = item.bacham.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      item.hesoluong = item.hesoluong.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      item.donvi = item.donvi.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      item.doi = item.doi.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      res
        .status(200)
        .json({ data: item, message: "Cập nhật hệ số lương nâng cao thành công!" });
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message:
          "Có lỗi xảy ra khi thay đổi hệ số lương. Vui lòng liên hệ quản trị hệ thống.",
      });
    }
  },
    deleteHesoluongAdvanced: async (req, res) => {
      let { id, id1 } = req.params;
      try {
        let item = await Canbos.findOneAndUpdate({ _id: id},
         { $pull: { hesoluong: { _id: id1 } } 
        }, { new: true })
        .populate("chucvu.chucvu")
        .populate("donvi.donvi")
        .populate("doi.doi")
        .populate("hesoluong.hesoluong")
        .populate("bacham.bacham");

        item.chucvu = item.chucvu.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        item.bacham = item.bacham.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        item.hesoluong = item.hesoluong.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        item.donvi = item.donvi.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        item.doi = item.doi.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        res
          .status(200)
          .json({ data: item, message: "Xóa hệ số lương nâng cao thành công!" });
      } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message:
          "Có lỗi xảy ra khi xóa hệ số lương nâng cao. Vui lòng liên hệ quản trị hệ thống.",
      });
      }
  },
  changeDonviAdvanced: async (req, res) => {
    let { id, id1 } = req.params;
    let { donvi, ngayvedonvi, ghichu } = req.body;
    try {
      let item = await Canbos.findOneAndUpdate(
        { _id: id, "donvi._id": id1 },
        {
          $set: {
            "donvi.$.donvi": donvi,
            "donvi.$.donviString": donvi,
            "donvi.$.ghichu": ghichu,
            "donvi.$.tungay": ngayvedonvi,
          },
        },
        { new: true }
      )
        .populate("chucvu.chucvu")
        .populate("donvi.donvi")
        .populate("hesoluong.hesoluong")
        .populate("doi.doi")
        .populate("bacham.bacham");

      item.chucvu = item.chucvu.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      item.bacham = item.bacham.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      item.hesoluong = item.hesoluong.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      item.donvi = item.donvi.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      item.doi = item.doi.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      res
        .status(200)
        .json({ data: item, message: "Cập nhật đơn vị công tác nâng cao thành công!" });
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message:
          "Có lỗi xảy ra khi thay đổi đơn vị công tác. Vui lòng liên hệ quản trị hệ thống.",
      });
    }
  },
    deleteDonviAdvanced: async (req, res) => {
      let { id, id1 } = req.params;
      try {
        let item = await Canbos.findOneAndUpdate({ _id: id},
         { $pull: { donvi: { _id: id1 } } 
        }, { new: true })
        .populate("chucvu.chucvu")
        .populate("donvi.donvi")
        .populate("doi.doi")
        .populate("hesoluong.hesoluong")
        .populate("bacham.bacham");

        item.chucvu = item.chucvu.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        item.bacham = item.bacham.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        item.hesoluong = item.hesoluong.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        item.donvi = item.donvi.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        item.doi = item.doi.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        res
          .status(200)
          .json({ data: item, message: "Xóa đơn vị công tác nâng cao thành công!" });
      } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message:
          "Có lỗi xảy ra khi xóa đơn vị công tác nâng cao. Vui lòng liên hệ quản trị hệ thống.",
      });
      }
  },
  changeDoiAdvanced: async (req, res) => {
    let { id, id1 } = req.params;
    let { doi, ngayvedoi, ghichu } = req.body;
    try {
      let item = await Canbos.findOneAndUpdate(
        { _id: id, "doi._id": id1 },
        {
          $set: {
            "doi.$.doi": doi,
            "doi.$.doiString": doi,
            "doi.$.ghichu": ghichu,
            "doi.$.tungay": ngayvedoi,
          },
        },
        { new: true }
      )
        .populate("chucvu.chucvu")
        .populate("donvi.donvi")
        .populate("doi.doi")
        .populate("hesoluong.hesoluong")
        .populate("bacham.bacham");

      item.chucvu = item.chucvu.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      item.bacham = item.bacham.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      item.hesoluong = item.hesoluong.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      item.donvi = item.donvi.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      item.doi = item.doi.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      res
        .status(200)
        .json({ data: item, message: "Cập nhật đội nghiệp vụ nâng cao thành công!" });
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message:
          "Có lỗi xảy ra khi thay đổi đội nghiệp vụ. Vui lòng liên hệ quản trị hệ thống.",
      });
    }
  },
    deleteDoiAdvanced: async (req, res) => {
      let { id, id1 } = req.params;
      try {
        let item = await Canbos.findOneAndUpdate({ _id: id},
         { $pull: { doi: { _id: id1 } } 
        }, { new: true })
        .populate("chucvu.chucvu")
        .populate("donvi.donvi")
        .populate("doi.doi")
        .populate("hesoluong.hesoluong")
        .populate("bacham.bacham");

        item.chucvu = item.chucvu.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        item.bacham = item.bacham.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        item.hesoluong = item.hesoluong.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        item.donvi = item.donvi.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        item.doi = item.doi.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        res
          .status(200)
          .json({ data: item, message: "Xóa đội nghiệp vụ nâng cao thành công!" });
      } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message:
          "Có lỗi xảy ra khi xóa đội nghiệp vụ nâng cao. Vui lòng liên hệ quản trị hệ thống.",
      });
      }
  },
};
