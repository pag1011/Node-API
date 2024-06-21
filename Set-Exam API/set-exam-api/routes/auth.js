// routes/auth.js
const express = require('express');
const router = express.Router();
const User = require('./models/user'); // Adjust path as necessary

async function findUserByUsername(username) {
  try {
    const user = await User.findOne({ username });
    return user; // Return the found user object or null if not found
  } catch (error) {
    console.error('Error finding user by username:', error);
    throw error; // Handle or propagate the error
  }
}

// Example usage
const usernameToSearch = 'example_username'; // Replace with the actual username
findUserByUsername(usernameToSearch)
  .then(user => {
    if (!user) {
      console.log('User not found');
      // Respond with appropriate message or error
    } else {
      console.log('Found user:', user);
      // Handle user data here
    }
  })
  .catch(error => {
    console.error('Error:', error);
    // Handle error
  });
