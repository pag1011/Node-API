// models/Faculty.js - Mongoose model for Faculty schema
const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

module.exports = mongoose.model('Faculty', facultySchema);
