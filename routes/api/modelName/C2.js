const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Post specification
const C2 = require('../../../models/C2');

router.get('/c2', (req, res) =>{
    C2.find().then(C2res=> {res.json(C2res)})
})

router.post('/c2', (req, res)=>{
    const Postc2 = new C2({
        modeltype: {
            c2:req.body.c2,
            c4:req.body.c4,
            c9:req.body.c9,
        }, 
        baseprice: req.body.baseprice,
        standardfacep: req.body.standardfacep,
        customfacep: req.body.customfacep,
        premiumfacep: req.body.premiumfacep,
        standardshell: req.body.standardshell,
        customshell: req.body.customshell,
        artwork: req.body.artwork,
               
    });
    Postc2.save().then(postcs => res.json(postcs));
    
})



module.exports = router;