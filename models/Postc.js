const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PostSchema = new Schema({
  
    // faceplateprice: {
    //     type: String,
    //     required: true  
    //   }, 
    //   shellsprice: { 
    //     type: String,
    //     required: true 
    //   },
    //   artworkprice: { 
    //     type: String,
    //     required: true 
    //   },
    //   date: {
    //     type: Date,
    //     default: Date.now
    //   }

  fullname: {
      type: String,
      required: true
  },
  email: {
      type: String,
      required: true
  },
  company: {
      type: String,
      required: true
  },
  zipcode: {
      type: String,
      required: true
  },
  country: {
      type: String,
      required: true
  },
  addressline1: {
      type: String,
      required: true
  },
  addressline2: {
    type: String,
    required: true
  },
  cityname: {
      type: String,
      required: true
  },
  stateprovince: {
      type: String,
      required: true
  },
  phonenumbaer: {
      type: String,
      required: true
  },
  date: {
      type: Date,
      default: Date.now
  }
});

module.exports = Postc = mongoose.model('Postc', PostSchema);