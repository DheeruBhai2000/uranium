const express = require('express');
const router = express.Router();
// const CowinController= require("../controllers/cowinController")
const cowincontroller=require("../controllers/mycowincontroller")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
// ================ my created apis ===============
router.get("/getstates",cowincontroller.getStates);
router.post("/getotp",cowincontroller.getOtp);
router.get("/getdistrict",cowincontroller.getDistricts)
router.get("/wether",cowincontroller.wather);
router.get("/meme",cowincontroller.meme)


// ===============================================================
// router.get("/cowin/states", CowinController.getStates)
// router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
// router.get("/cowin/getByPin", CowinController.getByPin)
// router.post("/cowin/getOtp", CowinController.getOtp)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date

module.exports = router;