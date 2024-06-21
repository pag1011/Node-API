// server.js

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db = require('./db'); // MongoDB connection
const Student = require('./models/student');

const app = express();
const port = 4500;

app.use(bodyParser.json());

// POST endpoint to add new student
app.post('/registered-students', async (req, res) => {
  try {
    const { name, rollNumber, email, password } = req.body;
    
    // Check if a student with the same rollNumber already exists
    const existingStudent = await Student.findOne({ rollNumber });
    if (existingStudent) {
      return res.status(400).json({ error: 'Student with this roll number already exists.' });
    }

    // Create a new student
    const newStudent = new Student({
      name,
      rollNumber,
      email,
      password,
    });

    // Save the student to the database
    await newStudent.save();

    res.status(201).json(newStudent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE endpoint to update existing student by rollNumber
app.put('/registered-students/:rollNumber', async (req, res) => {
  try {
    const rollNumber = req.params.rollNumber;
    const { name, email, password } = req.body;

    // Find the student by rollNumber and update
    const updatedStudent = await Student.findOneAndUpdate(
      { rollNumber },
      { name, email, password },
      { new: true } // to return the updated document
    );

    if (!updatedStudent) {
      return res.status(404).json({ error: 'Student not found.' });
    }

    res.json(updatedStudent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
