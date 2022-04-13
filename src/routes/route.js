const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js"
const createBook=require('../controller/bookcontorller');
const bookList =require('../controller/bookcontorller')
const getBooksInYear=require('../controller/bookcontorller')
const getParticularBooks=require('../controller/bookcontorller')
const getXINRBooks=require('../controller/bookcontorller')
const getRandomBooks=require('../controller/bookcontorller')
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook",createBook.createBook);
router.get("/bookList",bookList.bookList)
router.post("/getBooksInYear",getBooksInYear.getBooksInYear)
router.post("/getParticularBooks",getParticularBooks.getParticularBooks)
router.get("/getXINRBooks",getXINRBooks.getXINRBooks)
router.get("/getRandomBooks",getRandomBooks.getRandomBooks)

module.exports = router;