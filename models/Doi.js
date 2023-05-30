const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const doiSchema = new Schema({
    tendoi: {
        type: String
    },
    kyhieu: String,
    donvi:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Donvi"
    },
    donviString: String,
    thutu: Number
});

const Dois = mongoose.model('Doi', doiSchema);

module.exports = Dois;