
const express = require('express');
const router = express.Router();
const paypal = require('paypal-rest-sdk');

router.get('/', function(req, res, next){
    // res.render('paypal', {
    //     title: 'paypal'
    // })
    res.json("success")
    console.log(1)
})


paypal.configure({
    // 'mode': 'sandbox', //sandbox or live
    // 'client_id': 'AVtBwwfiQ-swgkByTP4cDPX5el4iXapxQW6WbGeCKuLREOP_eXxBRF1H3o8I37ybyBRIbBr0CwcILGmr',
    // 'client_secret': 'EJIQ3pStzZkrFfzwsrkyiJ9Rj8dgR4i3jO2DqP75FsobTxW4nokLJOx3_J6Ha4nBlKXIuF74csX7wcwG'
    'mode': 'sandbox', //sandbox or live
    'client_id': 'AfPa2JGqfMYIwoEvB2hFHqNCRiwT8-1SUbQGXT9PxH4Cf5gm4c6ms0GZnpBtckmv3dgsN_-OVPZt0U2i',
    'client_secret': 'EA49HIg-l9pyL0n-GSNTnpmxTF94ynfqrt3-xROKJ5DaOdL880Vpoii8I4_EMHGF_JdBvQAWuxYnMTNk'
  });



router.post('/', function(req, res, next){
    console.log('this is something calling')

    var item = req.body.item
    const create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http://localhost:5000/success",
            "cancel_url": "http://localhost:5000/cancel"
        },
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": "item",
                    "sku": "item",
                    "price": "25.00",
                    "currency": "USD",
                    "quantity": 1
                }]
            },
            "amount": {
                "currency": "USD",
                "total": "25.00"
            },
            "description": "  This is the payment description."
        }]
    };

    paypal.payment.create(create_payment_json, function (error, payment) {
        if (error) {
            throw error;
        } else {
            for(let i = 0; i < payment.links.length; i++){
                if(payment.links[i].rel === 'approval_url'){
                    res.redirect(payment.links[i].href)
                }
            }
            // res.send("test")
        }
    });
})

router.get('/success', function(req, res){
    var payerId = req.query.PayerID;
    var paymentId = req.query.paymentId;

    var execute_payment_json = {
        "payer_id" : payerId,
        "transactions" :[{
            "amount" : {
                "currency" : 'USD',
                "total" : "25.00"
            }
        }]
    }

    paypal.payment.execute(paymentId, execute_payment_json, function(error, payment){
        if(error){
            console.log(error.response)
            res.status(403).json({status:false, response : errors, devMessage : 'there is some issue payment method in paypal'} )
        }
        else{
            console.log(JSON.stringify(payment))
            res.status(201).json({status :true, response : JSON.stringify(payment), devMessage : 'get payment response'})
        }
    })
    
})

router.get('/cancel', function(req, res, next){
    res.send('payment cancelled')
})



module.exports = router;

// const express = require('express');
// const router = express.Router();

// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// const passport = require('passport');
// const paypalKey = require('../../../config/key_paypal')

// router.get('/paysuccess', (req, res)=>{
//     req.render("hello");
// })

// // router.post('/user/payment/charge', (req, res)=>{
// //     const token = req.body.stripeToken;
// //     const chargeAmount = req.body.chargeAmount;
// //     const charge = stripe.charges.create({
// //         amount: chargeAmount,
// //         currency: 'gbp',
// //         source: token
// //     }, (err, charge)=>{
// //         if(err & err.type === 'StripeCardError'){
// //             console.log("Your card is declinend");
// //         }
// //     })

// //     console.log("payment successful");
// //     res.redirect('/paysuccess')

// // }); 
// router.post('/pay', (req, res) => {
//     const create_payment_json = {
//       "intent": "sale",
//       "payer": {
//           "payment_method": "paypal"
//       },
//       "redirect_urls": {
//           "return_url": "http://localhost:5000/success",
//           "cancel_url": "http://localhost:5000/cancel"
//       },
//       "transactions": [{
//           "item_list": {
//               "items": [{
//                   "name": "C2 Model",
//                   "sku": "001",
//                   "price": "25.00",
//                   "currency": "USD",
//                   "quantity": 1
//               }]
//           },
//           "amount": {
//               "currency": "USD",
//               "total": "25.00"
//           },
//           "description": "Hat for the best team ever"
//       }]
//   };
  
//   paypal.payment.create(create_payment_json, function (error, payment) {
//     if (error) {
//         throw error;
//     } else {
//         // for(let i = 0;i < payment.links.length;i++){
//         //   if(payment.links[i].rel === 'approval_url'){
//         //     res.redirect(payment.links[i].href);
//         //   }
//         //}
//         console.log("create apyment getway")
//         console.log(payment);
        
//     }
//   });
  
//   });
  
//   router.get('/success', (req, res) => {
//     const payerId = req.query.PayerID;
//     const paymentId = req.query.paymentId;
  
//     const execute_payment_json = {
//       "payer_id": payerId,
//       "transactions": [{
//           "amount": {
//               "currency": "USD",
//               "total": "25.00"
//           }
//       }]
//     };
  
//     paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
//       if (error) {
//           console.log(error.response);
//           throw error;
//       } else {
//           console.log(JSON.stringify(payment));
//           res.send('Success');
//       }
//   });
//   });
  
//   router.get('/cancel', (req, res) => res.send('Cancelled'));

  
// module.exports = router;