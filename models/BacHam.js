const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bachamSchema = new Schema({
    capham: {
        type: String,
        unique: true
    },
    nienhanlenham: Number,
    thutu: Number
});

const BacHams = mongoose.model('Bacham', bachamSchema);

module.exports = BacHams;