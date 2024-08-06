const express = require("express");
const registerController = require("../controllers/register");
const verifyController = require("../controllers/verify");
const router = express.Router();


router.post("/register",registerController)
router.post("/verify-qrcode",verifyController)



module.exports = router;