// index.js (or your main application file)
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const User = require('./models/User'); // Adjust path as necessary

dotenv.config(); // Load environment variables
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('MongoDB connection error:', error);
});

// Route to handle POST request for checking credentials
app.post('/set-exam/check-credentials', async (req, res) => {
  // Implement your logic to check credentials here
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username, password });
    if (!user) {
      res.status(404).json({ message: 'User not found or invalid credentials' });
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    console.error('Error checking credentials:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
