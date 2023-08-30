const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        uniquie:true
    },
    password:{
        type:String,
        require:true
    }
}) 

const User= mongoose.model('user',userSchema)


module.exports = User;