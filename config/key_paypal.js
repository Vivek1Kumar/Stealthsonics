
const paypal = require('paypal-rest-sdk');

module.exports = paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': 'AfPa2JGqfMYIwoEvB2hFHqNCRiwT8-1SUbQGXT9PxH4Cf5gm4c6ms0GZnpBtckmv3dgsN_-OVPZt0U2i',
    'client_secret': 'EA49HIg-l9pyL0n-GSNTnpmxTF94ynfqrt3-xROKJ5DaOdL880Vpoii8I4_EMHGF_JdBvQAWuxYnMTNk'
  });