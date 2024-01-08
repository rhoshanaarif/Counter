const mongoose = require('mongoose');

const connectDB = () => {
  mongoose.connect('mongodb+srv://123:321@hourscounter.fyhkt6c.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((error) => {
      console.error('Error connecting to MongoDB:', error);
    });
};


module.exports = connectDB;