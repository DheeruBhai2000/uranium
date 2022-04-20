const express = require('express');
const router = express.Router();
const devbatchcontoller=require('../controllers/devbatchcontroller')

// const UserController= require("../controllers/userController")
// const BookController= require("../controllers/bookController")
// const newallcortroller=require("../controllers/newallcontroller")

//==============   apr 18 apis  =============================
router.post("/createdevelopers",devbatchcontoller.createdev);
router.post("/createbatch",devbatchcontoller.createbatch);
router.get("/geteligible",devbatchcontoller.scholar)
router.get("/developers",devbatchcontoller.percentage)

let mid= function(req,res,next){
    let log=false
    if (log==false){ next()}
    else{
        res.send("not logged again please login in")
    }

}
let mid1=async function(req,res){
    console.log(req.ip,req.path,Date())
    console.log(req.originalUrl)
    res.sendStatus(200)
}
router.get("/random",mid,devbatchcontoller.random)

router.get("/getaggregation",mid1,devbatchcontoller.aggregation)
router.get("/getaggregation2",mid1,devbatchcontoller.aggregation)
router.get("/getaggregation3",mid1,devbatchcontoller.aggregation)


//========================     END      ======================

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

// router.post("/createBook", BookController.createBook  )

// router.get("/getBooksData", BookController.getBooksData)

// router.post("/updateBooks", BookController.updateBooks)
// router.post("/deleteBooks", BookController.deleteBooks)



//MOMENT JS
// const moment = require('moment');
// router.get("/dateManipulations", function (req, res) {
    
    // const today = moment();
    // let x= today.add(10, "days")

    // let validOrNot= moment("29-02-1991", "DD-MM-YYYY").isValid()
    // console.log(validOrNot)
    
    // const dateA = moment('01-01-1900', 'DD-MM-YYYY');
    // const dateB = moment('01-01-2000', 'DD-MM-YYYY');

    // let x= dateB.diff(dateA, "days")
    // console.log(x)

    // res.send({ msg: "all good"})
// })

module.exports = router;