const express = require('express');
const router = express.Router();
const bookmodel=require('../book/bookmodel')
const usernew=require('../uesrnew/usernew')
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController");
const { create } = require('../models/userModel.js');

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )
router.post("/createbook", async function(req,res){
    let data=req.body;
    let saveddata= await bookmodel.create(data)
    console.log(data);
    res.send({msg:saveddata})
} );
router.post("/createUserfb",async function(req,res){
    let data2=req.body;
    let save=await usernew.create(data2);
    res.send({msg:save})
}  );


router.get("/getUsersData", UserController.getUsersData)
router.get("/getBookData", async function(req,res){
    let data1= await bookmodel.find();
    res.send({msg:data1})
})

module.exports = router;