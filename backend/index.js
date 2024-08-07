require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = require("./routes");
const connectToDb = require("./config/db");

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

const PORT = 8080 || process.env.PORT;

connectToDb().then(() => {
  app.listen(PORT, () => {
    console.log("server is running on port 8080");
    console.log("connect to DB");
  });
});

// Register Student
// app.post('/register', async (req, res) => {
//   const { name, studentId, password } = req.body;
//   const hashedPassword = await bcrypt.hash(password, 10);
//   const qrCode = await QRCode.toDataURL(studentId);
//   const student = new Student({ name, studentId, password: hashedPassword, qrCode });
//   await student.save();
//   res.json({ message: 'Student registered successfully', qrCode });
// });

// Authenticate and Verify QR Code
// app.post('/verify', async (req, res) => {
//   const { studentId } = req.body;
//   const student = await Student.findOne({ studentId });
//   if (!student) return res.status(404).json({ message: 'Student not found' });

//   const attendance = new Attendance({ studentId });
//   await attendance.save();
//   res.json({ message: 'Entry recorded successfully' });
// });
