// models/student.js

const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  rollNumber: String,
  email: String,
  password: String,
  // Add more fields as needed
});

module.exports = mongoose.model('Student', studentSchema);
