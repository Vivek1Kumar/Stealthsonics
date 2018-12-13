
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const C4Schema = new Schema({
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
module.exports = C4 = mongoose.model('modelC4', C4Schema);