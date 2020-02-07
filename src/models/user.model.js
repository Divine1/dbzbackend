const mongoose = require("mongoose");
const Schema = mongoose.Schema
var userSchema = new Schema({
    emailid:  String,
    username: String,
    password:   String
});


exports.UserModel = mongoose.model("user",userSchema)