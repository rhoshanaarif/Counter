let mongoose = require('mongoose');

let countSchema = new mongoose.Schema({
  hoursremaining: {
    type: Number,
    default: 1000,
  }
});

module.exports = mongoose.model('Count', countSchema);