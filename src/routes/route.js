const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js"
const bookcontorller=require('../controller/bookcontorller');
// ================apr13==================
const BookCotroller2=require('../controller/BookContorller2')


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
// ==============apr12===================
router.post("/createBook",bookcontorller.createBook);
router.get("/bookList",bookcontorller.bookList)
router.post("/getBooksInYear",bookcontorller.getBooksInYear)
router.post("/getParticularBooks",bookcontorller.getParticularBooks)
router.get("/getXINRBooks",bookcontorller.getXINRBooks)
router.get("/getRandomBooks",bookcontorller.getRandomBooks)
// ============apr13========================
router.post('/createNewBook',BookCotroller2.createNewBook);
router.post('/createauther',BookCotroller2.createauther);
router.get('/booklistof',BookCotroller2.booklistof)
router.get('/update',BookCotroller2.update);
router.get('/findprice',BookCotroller2.findprice);



module.exports = router;