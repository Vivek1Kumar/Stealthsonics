const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const postc = require('../../models/Postc');

router.post('/postcdata', (req, res)=>{
    const Postc = new postc({
        // faceplateprice: req.body.faceplateprice,
        // shellsprice: req.body.shellsprice,
        // artworkprice: req.body.artworkprice,
       
        fullname: req.body.fullname,
        email: req.body.email,
        company: req.body.company,
        zipcode: req.body.zipcode,       
        addressline1: req.body.addressline1,
        addressline2: req.body.addressline2,
        cityname: req.body.cityname,
        stateprovince: req.body.stateprovince,
        phonenumber: req.body.phonenumber
    });
    
    Postc.save().then(postcs => res.json(postcs));
    
})

module.exports = router;