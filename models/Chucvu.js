const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const chucvuSchema = new Schema({
    tenchucvu: {
        type: String,
        unique: true
    },
    thutu: Number
});

const Chucvus = mongoose.model('Chucvu', chucvuSchema);

module.exports = Chucvus;