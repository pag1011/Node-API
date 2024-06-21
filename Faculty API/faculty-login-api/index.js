// index.js - Main entry point of the application
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./db'); // Connect to MongoDB

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Routes
const loginRouter = require('./routes/login');
app.use('/login', loginRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
