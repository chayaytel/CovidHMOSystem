const express = require("express");
const { MemberModel, validateMember } = require("../models/memberModel");
const router = express.Router();

router.get("/", async(req,res) => {
  try{
    let data = await MemberModel.find({}).limit(20);
    res.json(data);
  }
  catch(err){
    console.log(err);
    res.status(502).json({err})
  }
})

router.post("/", async(req,res) => {
  let validBody = validateMember(req.body);
  if(validBody.error) {
    return res.status(400).json(validBody.error.details);
  }
  try {
    let member = new MemberModel(req.body);
    await member.save();
    res.json(member)
  }
  catch(err) {
    console.log(err);
    res.status(502).json( {err})
  }
})

module.exports = router;