const mongoose = require('mongoose');
const { Schema } = mongoose;
const UserSchema = new Schema({
    name : {
            type: String,
            required: true
    },
    Age : {
        type: Number,
        required: true
        },
    Address : {
            type: String,
            required: true
        },

}, {timestamps:true})
const Usermodel = mongoose.model('Usermodel', UserSchema)

module.exports={
    Usermodel
}