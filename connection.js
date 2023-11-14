const mongoose = require("mongoose");

async function connectToMongoDB(url){

    mongoose.connect(url)
    .then(()=>{
        console.log("mondgo connected")
    })

}

module.exports = connectToMongoDB;