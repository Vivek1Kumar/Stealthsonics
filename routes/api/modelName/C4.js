
// const express = require('express');
// const router = express.Router();
// const mongoose = require('mongoose');
// const passport = require('passport');

// // Post specification
// const C4 = require('../../../models/C4');

// router.post('/c4', (req, res)=>{
//     const Postc = new C4({
//         faceplateprice: req.body.faceplateprice,
//         shellsprice: req.body.shellsprice,
//         artworkprice: req.body.artworkprice,
//     });
//     Postc.save().then(postcs => res.json(postcs));    
// })

// module.exports = router;

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Post specification
const C4 = require('../../../models/C4');

router.post('/c4', (req, res)=>{
    const Postc2 = new C4({
        faceplateprice: req.body.faceplateprice,
        shellsprice: req.body.shellsprice,
        artworkprice: req.body.artworkprice,
    });
    Postc2.save().then(postcs => res.json(postcs));    
})

module.exports = router;