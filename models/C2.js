
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const C2Schema = new Schema({
  modeltype: [
    {
      c2: {
        type: String,
        // required: true
      },
      c4: {
        type: String
      },
      c9: {
        type: String
      }
    }],
    baseprice: {
      type: String,
      required: true  
    }, 
    standardfacep: { 
      type: String,
      required: true 
    },
    customfacep: { 
      type: String,
      required: true 
    },
    premiumfacep: { 
      type: String,
      required: true 
    },
    standardshell: { 
      type: String,
      required: true 
    },
    customshell: { 
      type: String,
      required: true 
    },
    artwork: { 
      type: String,
      required: true 
    },

  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = C2 = mongoose.model('modelC2', C2Schema);