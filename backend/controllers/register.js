// const QRCode = require('qrcode');
const Student = require("../models/register");

async function registerController(req, res) {
  try {
    const { uniqueId } = req.body;
    console.log("qrcodeUrldata==",uniqueId)

    const student = new Student({
      qrcodeUrldata : uniqueId
    });
    const userData = await student.save();


    res.json({
      message : "Saved successfully",
      data : userData
    });
  } catch (err) {
    res.json({
      message: err?.message || err,
      success: false,
      error: true,
    });
  }
}
module.exports = registerController;
