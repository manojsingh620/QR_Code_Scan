const express = require("express");
const registerController = require("../controllers/register");
const verifyController = require("../controllers/verify");
const idunvalidate = require("../controllers/idunvalidate");
const router = express.Router();


router.post("/register",registerController)
router.post("/verify-qrcode",verifyController)
router.post("/qrcode-update",idunvalidate)



module.exports = router;