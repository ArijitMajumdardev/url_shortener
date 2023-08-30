const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
    shortId : {
        type: String,
        required : true,
        uniquie : true,
    },
    redirectURL:{
        type: String,
        required : true,
    },
    visitHistory : [{timestamps : {type:String} }],
    createdBy : {
        type: mongoose.Schema.Types.ObjectId,
        ref:"users"
    }
},
{timestamps : true }
);

const URL = mongoose.model('urls',urlSchema);

module.exports = URL;