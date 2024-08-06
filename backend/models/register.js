const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  qrcodeUrldata : String,
},{
  timestamps : true,
});

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
