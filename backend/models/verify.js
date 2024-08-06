const mongoose = require('mongoose');
const attendanceSchema = new mongoose.Schema({
  studentId: String,
  date: { type: Date, default: Date.now },
});

const Attendance = mongoose.model("Attendance", attendanceSchema);
module.exports = Attendance;
