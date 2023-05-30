const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const canboSchema = new Schema({
  hoten: {
    type: String,
  },
  ngaysinh: String,
  thedang: String,
  gioitinh: String,
  trinhdohocvan: String,
  baohiemyte: String,
  ngayvaodang: String,
  lyluanchinhtri: String,
  quequan: String,
  CCCD: String,
  sohieuCAND: String,
  isNghihuu: {
    type: Boolean,
    default: false
  },
  isMaxBacham: {
    type: Boolean,
    default: false
  },
  isMaxHesoluong: {
    type: Boolean,
    default: false
  },
  bacham: [
    {
      bacham: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Bacham",
      },
      tungay: String,
      bachamString: String,
      ghichu: String,
      date: { type: Date, default: Date.now },
    },
  ],
  hesoluong: [
    {
      hesoluong: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hesoluong",
      },
      tungay: String,
      ghichu: String,
      hesoluongString: String,
      date: { type: Date, default: Date.now },
    },
  ],
  chucvu: [
    {
      chucvu: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Chucvu",
      },
      tungay: String,
      ghichu: String,
      chucvuString: String,
      date: { type: Date, default: Date.now },
    },
  ],
  donvi: [
    {
      donvi: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Donvi",
      },
      tungay: String,
      ghichu: String,
      donviString: String,
      date: { type: Date, default: Date.now }, 
    },
  ],
  doi: [
    {
      doi: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doi",
      },
      tungay: String,
      ghichu: String,
      doiString: String,
      date: { type: Date, default: Date.now }, 
    },
  ],
});

const Canbos = mongoose.model("Canbos", canboSchema);

module.exports = Canbos;
