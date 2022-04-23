const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email:{type: String, required: true, unique: true },
    nom:{type: String, required: true},
    adress:{type: String, required: true},
    tel:{type: Number, required: true},
    logo:{type: String,},
    password:{type: String, required: true},
})

module.exports = mongoose.model('user', UserSchema);