const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const path = require('path');

const user = require('./routes/api/user');

const passport = require('passport');

const modelc2 = require('./routes/api/modelName/C2');
const modelc4 = require('./routes/api/modelName/C4');
const modelc9 = require('./routes/api/modelName/C9');
const postc = require('./routes/api/postc');
const specifications = require('./routes/api/specification');
//const stripepayment = require('./routes/api/stripePayment/stripe');
const shipping = require('./routes/api/shipping/shipping');
const shippingcheckout = require('./routes/api/shipping/shippingcheckout')

const paypal = require('./routes/api/paypalPayment/paypal')

var app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
// DataBase configure
const db = require('./config/keys').mongoURI;

//Connect server to MongoDB
mongoose
	.connect(db)
	.then(() => console.log("MongoDB connected"))
	.catch(err => console.log(err));

//passport middleware
app.use(passport.initialize());

//passport config
require('./config/passport')(passport);

//use Routes

app.use('/api/users/check', paypal);
app.use('/api/users/checkout', shippingcheckout)
// app.use('api/user/payment', stripepayment)
app.use('/api/users', user);
app.use('/api/user/specifications', specifications);

app.use('/api/user/item', shipping);
//app.use('/api/user/itemspecifs', specifications);

// app.use('/api/posts', posts);
app.use('/api/user/admin/modelc2', modelc2);
app.use('/api/user/admin/modelc4', modelc4);
app.use('/api/user/admin/modelc9', modelc9);
app.use('/api/user/postc', postc);

if(process.env.NODE_ENV === 'production'){
	app.use(express.static('client/build'));

	app.get('*', (req, res)=> {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	})
}

const port = process.env.PORT || 5000;
app.listen(port, function () {
	console.log("server running port", port);
});


