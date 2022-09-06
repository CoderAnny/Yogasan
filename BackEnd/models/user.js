const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    
    fname:String,
    emailId:String,
    phone:String,
    message:String,

})

module.exports = mongoose.model("forminfos",userSchema);
