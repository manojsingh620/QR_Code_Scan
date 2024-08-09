const Student = require("../models/register");

async  function idunvalidate(req,res){
   try{

    const {id} = req.body
    console.log("idresult is =",id)

    const deletedDocument = await Student.findOneAndDelete({ qrcodeUrldata: id });
    console.log("Deleted document is =", deletedDocument);
    // const payload = {
    //      qrcodeUrldata : `${id}+12345678`
    // }

    // const updateid = await Student.findOneAndUpdate({ qrcodeUrldata: id }, payload, { new: true });
    // console.log("updatevalue and id is =",updateid)

    res.json({
        data : deletedDocument,
        message : "User updated successfuly",
        error : false,
        success : true
       })

   }catch(err){
    res.json({
        message: err?.message || err,
        success: false,
        error: true,
      });
   }
}
module.exports = idunvalidate