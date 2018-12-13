const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Post specification
 const ShippingItem = require('../../../models/Shipping');
const validateShippingItems = require('../../../validation/shipping');
//const ShippingItem = require('../../../models/Postc');

router.post('/checkout', (req, res) => {
    // const { errors, isValid } = validateShippingItems(req.body);

    //  // check Validation
    //  if (!isValid) {
    //    // If any errors occer, send 400 with errors object
    //    return res.status(400).json(errors);
    //  }     

    const ShippingItems = new ShippingItem({

        fullname: req.body.fullname,
        email: req.body.email,
        company: req.body.company,
        country: req.body.country,
        zipcode: req.body.zipcode,       
        addressline1: req.body.addressline1,
        addressline2: req.body.addressline2,
        cityname: req.body.cityname,
        stateprovince: req.body.stateprovince,
        phonenumber: req.body.phonenumber
    });
    ShippingItems.save().then(shippingItems => res.json(shippingItems));
})


// router.get('/checkout', (req, res) => {

//     ShippingItem.find().then(shippingItem => {shippingItem.json("success")})
//    // req.json();
// })


router.get('/checkout', (req, res) => {
    ShippingItem.find().then(user => res.json(user))
 })


module.exports = router;