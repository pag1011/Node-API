// routes/login.js - Express router for login API
const express = require('express');
const router = express.Router();
const Faculty = require('../models/Faculty');

// POST /login
router.post('/', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if faculty with given username exists
    const faculty = await Faculty.findOne({ username });

    if (!faculty) {
      return res.status(404).json({ message: 'Faculty not found' });
    }

    // Validate password
    if (password !== faculty.password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // If credentials are correct
    res.status(200).json({ message: 'Login successful', faculty });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
