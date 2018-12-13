const express = require('express');
const router = express.Router();

const Shippingcheckout = '../../../models/Shippingcheckout';


router.post('/shipingcheckout', (req, res) => {
    
    const shippingData = new Shippingcheckout({
        fullname: req.body.fullname
    });
    shippingData.save().then(shippingDatacheck => req.json(shippingDatacheck))

})
module.exports = router;