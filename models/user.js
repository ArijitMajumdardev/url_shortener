const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required :true
    },
    email:{
        type:String,
        required :true,
        uniquie:true
    },
    role:{
        type:String,
        required :true,
        default:"NORMAL"
    },
    password:{
        type:String,
        required :true
    }
}) 

const User= mongoose.model('user',userSchema)


module.exports = User;