// db.js

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/registered_students_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // Remove the useFindAndModify option
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

module.exports = mongoose.connection;
