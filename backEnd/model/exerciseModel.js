const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseModel = new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    description: {type: String },
    duration: {type: Number },
    date: {type: String }
},{
timestamps: true,
});

module.exports = mongoose.model('Exercise', exerciseModel);