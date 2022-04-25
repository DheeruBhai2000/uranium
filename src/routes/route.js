const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")
//const BookController= require("../controllers/bookController")
const commonMW=require("../middlewares/commonMiddlewares")
const calculater=require("../controllers/calculater")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// ========================apr 20 apis =================



const allcontroller=require("../controllers/allcontroller")


router.post("/createuser",commonMW.commonMW,allcontroller.creteuser)
router.post("/createproduct",allcontroller.createproduct)
router.post("/createorder",commonMW.commonMW,allcontroller.createorder)
router.get("/calculat",calculater.calculat)


router.get("/cowin/states",allcontroller.cowin);
router.get("/cowindistricts/:stateId",allcontroller.cowindistict)
router.get("/getslots",allcontroller.slot)

    // router.post("/createorder",mid,allcontroller.createorder)
    // router.post("/createorder",allcontroller.createorder)
// ================================================
// router.post("/createUser", UserController.createUser  )
// router.get("/getUsersData", UserController.getUsersData)


// const mid1= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid1")
//     // logic
//     let loggedIn = false

//     if (loggedIn== true) { 
//         console.log( "OK LOGGED IS IS TRUE NOW")
//         next ()
//     }
//     else {
//         res.send ("Please login or register")
//     }
// }

// // e.g. restricted and open-to-all API's can be handled like below now:
// router.get('/homePage', mid1, UserController.feeds)
// router.get('/profileDetails', mid1, UserController.profileDetails)
// router.get('/friendList', mid1, UserController.friendList)
// router.get('/changePassword', mid1, UserController.changePassword)

// router.get('/termsAndConditions',  UserController.termsAndConditions)
// router.get('/register',  UserController.register)

// router.get("/basicRoute", UserController.basicCode)
// router.post('/create-a-user', UserController.createAUser)

// router.get("/basicRoute2", commonMW.mid1, UserController.basicCode2)
// router.get("/basicRoute3", commonMW.mid2, UserController.basicCode3)
// router.get("/basicRoute4", commonMW.mid1, commonMW.mid4, UserController.basicCode4)

module.exports = router;