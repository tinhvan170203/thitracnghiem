const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const lichsuthiSchema = new Schema({
  thoigianbatdau: {
    type: Number,
  },
  thoigianketthuc: Number,
  thoigiannopbai: Number,
  questions: [{
    question: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cauhois",
    },
    choice: String
  }],
  thisinh: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Danhsachthisinhs",
  },
}, {timestamps: true});

const LichsuThis = mongoose.model(
  "LichsuThis",
  lichsuthiSchema
);

module.exports = LichsuThis;
