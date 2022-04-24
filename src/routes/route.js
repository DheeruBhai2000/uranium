const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const check=require("../middleware/auth")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/register", userController.createUser)

router.post("/loginuser", userController.loginUser)

// //The userId is sent by front end
// // router.get("/users/:userId", userController.getUserData)
// router.post("/users/:userId/posts",check.authenticate,check.authoriser, userController.postMessage)
router.get("/getuserdata/:userId",check.authenticate,check.authoriser,userController.getUserData)
router.put("/updatedata/:userId", check.authenticate,check.authoriser,userController.updateUser)
// router.delete('/users/:userId', userController.deleteUser)

module.exports = router;