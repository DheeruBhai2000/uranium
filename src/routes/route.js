const express = require('express');
const router = express.Router();
// const userController= require("../controllers/newusercon")
const userController=require("../controllers/userController")
const newUsercontroller=require("../controllers/newusercontroller")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// =======================apr 21 apis =================
router.post("/register",newUsercontroller.register)
router.post("/login",newUsercontroller.login)
router.get("/users/:userId",newUsercontroller.getdata)
router.put("/users/:userId",newUsercontroller.update)
router.delete("/users/:userId",newUsercontroller.deleteser)
// ====================================================
// router.post("/users", userController.createUser  )

// router.post("/login", userController.loginUser)


// // //The userId is sent by front end
// router.get("/users/:userId", userController.getUserData)

// router.put("/users/:userId", userController.updatedUser)

module.exports = router;