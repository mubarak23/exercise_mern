const mongooes = require('mongoose');
const Schema = mongooes.Schema;

const userModel = new Schema({
        username:{
            type: String,
            required: true,
            unique: true,
            trim: true,
            minlength: 3
        },
},{
    timestamps: true,
});

module.exports = mongooes.model('User', userModel);