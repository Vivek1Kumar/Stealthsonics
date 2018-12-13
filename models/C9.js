const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const C9Schema = new Schema({
  faceplateprice: {
    type: String,
    required: true  
  }, 
  shellsprice: { 
    type: String,
    required: true 
  },
  artworkprice: { 
    type: String,
    required: true 
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = C9 = mongoose.model('modelC9', C9Schema);