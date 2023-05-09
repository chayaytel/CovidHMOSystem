const mongoose = require("mongoose");
const Joi = require("joi");

let schema = new mongoose.Schema({
fullName:String,
id:String,
address:String,
birthDate:Date,
phone:String,
mobilePhone:String,
})
exports.MemberModel = mongoose.model("members",schema)

exports.validateMember = (_reqBody) => {
let joiSchema = Joi.object({
fullName:Joi.string().pattern(/^[a-zA-Z ]*$/).min(2).max(100).required(),
id:Joi.string().pattern(/^[0-9]{9}$/).required(),
address:Joi.string().pattern(/^[a-zA-Z ]*$/).min(2).max(100).required(),
birthDate:Joi.date().max('now').required(),
phone:Joi.string().pattern(/^[0-9]{9,10}$/).required(),
mobilePhone:Joi.string().pattern(/^[0-9]{9,10}$/).required(),
})
return joiSchema.validate(_reqBody)
}