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


    // const id = await Student.findById(uniqueId)
    // console.log("the is this ===",id)
    // const baseurl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="
    // const qrurl =`${baseurl}http://localhost:3000/${id}/verify`;


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
