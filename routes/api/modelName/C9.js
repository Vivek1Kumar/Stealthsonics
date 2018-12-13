const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const C9 = require('../../../models/C9');


router.post('/c9', (req, res) => {
 
     const C9AdminPost = new C9({
        faceplatePrice: req.body.faceplatePrice,
        shellsPrice: req.body.shellsPrice,
        artworkPrice: req.body.artworkPrice,
     });
     C9AdminPost.save().then(c9AdminPost => res.json(c9AdminPost));
 })

 module.exports = router;