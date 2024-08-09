const Student = require("../models/register");

async function verifyController(req, res) {
  try {
    const { currid } = req.body;
    console.log("id user QR is = ", currid);

    const uniquematchId = await Student.distinct("qrcodeUrldata");
    console.log("students =", uniquematchId);

    if (!uniquematchId || uniquematchId.length === 0) {
      console.log("No matching document found");
    } else {
      console.log("uniquematchId", uniquematchId);
    }

    res.json({
      message: "matched successfully",
      data: uniquematchId,
    });
  } catch (err) {
    res.json({
      message: err?.message || err,
      success: false,
      error: true,
    });
  }
}
module.exports = verifyController;
