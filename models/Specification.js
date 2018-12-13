const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PostSpecificationSchema = new Schema({
    user: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    },
    ctype: {
      type: String
    },
    leftfaceplate: {
      type: String
    }, 
    rightfaceplate : { 
      type: String
    },
    leftshell: { 
      type: String
    },
    rightshell: { 
      type: String
    },
    driver: { 
      type: String
    },
    typeofdriver: { 
      type: String
    },
    confirguration: { 
      type: String
    }, 
    crossover: {
      type: String
    },
    isolation: { 
      type: String
    },
    bore: { 
      type: String
    },
    frequencyresponse: { 
      type: String
    },
    sensitivity: { 
      type: String
    },
    impedance: { 
      type: String
    },
    thd: { 
      type: String
    },
    warrantyperiod: { 
      type: String
    },
    refitpolicy : { 
      type: String
    },
    price : { 
      type: String
    },
  date: {
    type: Date,
    default: Date.now
  }
});


module.exports = Post = mongoose.model('post', PostSpecificationSchema);