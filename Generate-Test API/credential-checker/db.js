const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost:27017/credentialDB'; // Adjust this URI based on your MongoDB setup
mongoose.connect(dbURI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    ssl: false // Disable SSL for local development
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error', (err) => {
    console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

module.exports = mongoose;
