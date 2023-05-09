const mongoose = require("mongoose");
const Joi = require("joi");

let schema = new mongoose.Schema({
id:String,
vaccineDetails:[{date:Date, manufacturer:String}],
positiveDate:Date,
recoverDate:Date,
})
exports.CovidModel = mongoose.model("covids",schema)

exports.validateCovid = (_reqBody) => {
let joiSchema = Joi.object({
id:Joi.string().pattern(/^[0-9]{6,9}$/).required(),
vaccineDetails:Joi.array().items(Joi.object({date:Joi.date().required(), manufacturer:Joi.string().required()}).required()).min(1).max(4).required(),
positiveDate:Joi.date().max('now').required(),
recoverDate:Joi.date().max('now').greater(Joi.ref('positiveDate')).required(),
})
return joiSchema.validate(_reqBody)
}