const userModel = require("../models/user");


// to post data use this function
exports.createUser = async(req,res) =>{
    try{
        const users = await new userModel(req.body).save();
        res.json(users);
    }
    catch(err){
        console.log(err);
    }
}