const express = require("express");
const { CovidModel, validateCovid } = require("../models/covidModel");
const router = express.Router();

router.get("/", async(req,res) => {
  try{
    let data = await CovidModel.find({}).limit(20);
    res.json(data);
  }
  catch(err){
    console.log(err);
    res.status(502).json({err})
  }
})

router.post("/", async(req,res) => {
  let validBody = validateCovid(req.body);
  if(validBody.error) {
    return res.status(400).json(validBody.error.details);
  }
  try {
    let covid = new CovidModel(req.body);
    await covid.save();
    res.json(covid)
  }
  catch(err) {
    console.log(err);
    res.status(502).json( {err})
  }
})

module.exports = router;