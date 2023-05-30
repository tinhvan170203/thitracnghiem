const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const hesoluongSchema = new Schema({
    hesoluong: {
        type: String,
        unique: true
    },
    nienhanlenluong: Number,
    thutu: Number
});

const Hesoluongs = mongoose.model('Hesoluong', hesoluongSchema);

module.exports = Hesoluongs;