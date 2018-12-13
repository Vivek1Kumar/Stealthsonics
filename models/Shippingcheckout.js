const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ShippingCheckout = new Schema({
  fullname: {
    type: String,
    required: true  
  }, 

  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = shippingcheckout = mongoose.model('shippingcheckout', ShippingCheckout);