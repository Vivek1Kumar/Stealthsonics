
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ShippingItemSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
    fullname: {
        type: String,
        //required: true
    },
    email: {
        type: String,
        //required: true
    },
    company: {
        type: String,
        //required: true
    },
    zipcode: {
        type: String,
        //required: true
    },
    country: {
        type: String,
        //required: true
    },
    addressline1: {
        type: String,
        //required: true
    },
    addressline2    : {
        type: String,
        //required: true
    },
    cityname: {
        type: String,
        //required: true
    },
    stateprovince: {
        type: String,
        //required: true
    },
    phonenumber: {
        type: String,
        //required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});
module.exports = ShippingItems = mongoose.model('shippingItemschema', ShippingItemSchema);