// import React, { Component, PropTypes } from 'react'
// import ReactDOM from 'react-dom'
// import { connect } from 'react-redux'
// import {scriptLoader, paypal} from 'react-async-script-loader'

// //import { paymentAuthorized, paymentCancelled } from '../../actions'

// class PayPalButton extends Component {
//   constructor(props) {
//     super(props)
//     window.React = React
//     window.ReactDOM = ReactDOM
//     this.state = {
//       showButton: false,
//     }
//   }

//   componentWillReceiveProps ({ isScriptLoaded, isScriptLoadSucceed }) {
//     if (!this.state.show) {
//       if (isScriptLoaded && !this.props.isScriptLoaded) { // load finished
//         if (isScriptLoadSucceed) {
//           this.setState({ showButton: true })
//           console.log('alehop!!', window.paypal.Button.react)
//         }
//         else this.props.onError()
//       }
//     }
//   }

//   componentDidMount () {
//     const { isScriptLoaded, isScriptLoadSucceed } = this.props
//     if (isScriptLoaded && isScriptLoadSucceed) {
//       this.setState({ showButton: true })
//     }
//   }

//   componentWillUnmount() {
//     delete window.React
//     delete window.ReactDOM
//   }

//   render() {
//     const client = {
//       sandbox:    'xxxxxx',
//       production: 'xxxxxx',
//     }

//     const payment = () => {
//       return paypal.rest.payment.create('sandbox', client,
//         {
//           transactions: [
//             { amount: { total: '1.00', currency: 'USD' } },
//           ],
//         },
//       )
//     }

//     const onAuthorize = (data, actions) => {
//       return actions.payment.execute().then(() => {
//         console.log('The payment was completed!', this)
//         this.setState({ showButton: false })
//         const payment = Object.assign({}, this.props.payment)
//         payment.paid = true
//         payment.cancelled =  false
//         payment.payerID =  data.payerID
//         payment.paymentID =  data.paymentID
//         payment.paymentToken =  data.paymentToken
//         payment.returnUrl =  data.returnUrl
//         this.props.dispatch(paymentAuthorized(payment))
//       })
//     }

//     const onCancel = (data) => {
//       console.log('The payment was cancelled!', data)
//       this.props.dispatch(paymentCancelled())
//     }

//     return (
//       <PayPalButton condition={this.state.showButton}>
//         <paypal.Button.react
//           env={'sandbox'}
//           client={client}
//           payment={payment}
//           commit={true}
//           onAuthorize={onAuthorize}
//           onCancel={onCancel}
//         />
//       </PayPalButton>
//     )
//   }
// }

// const selector = (appState) => ({
//   payment: appState.payment,
// })

// const PayPalButtonRedux = connect(selector)(PayPalButton)

// export default scriptLoader('https://www.paypalobjects.com/api/checkout.js')(PayPalButtonRedux)

// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { userPayments } from '../../actions/authAction';  
// import { withRouter } from 'react-router-dom';
// import TextFieldGroup from '../common/TextFieldGroup';
// import PayImage  from '../../assets/image/btn_buynowCC_LG.gif';
// import {scriptLoader, paypal} from 'react-async-script-loader';

// import ReactDOM from 'react-dom';
// // import scriptLoader from 'react-async-script-loader';
// // import PropTypes from 'prop-types';

// class Payments extends Component {
//   constructor(props) {
//     super(props);
//     window.React = React;
//     window.ReactDOM = ReactDOM;
//     this.state = {
//       showButton: false,
//       env: 'sandbox', // Or 'sandbox'
//       client: {
//          sandbox:    'vivekyadav264-facilitator@gmail.com', // sandbox client ID
//          production: 'AQTxY9TnJ0Dc6kty0QYDBXlMn-k_Fxy9ppriWc-Ks1m3oLqGNgPN7KMwUW8bj2yahCol_embJa3jr87Q' // production client ID
//         //'client_id': 'AfPa2JGqfMYIwoEvB2hFHqNCRiwT8-1SUbQGXT9PxH4Cf5gm4c6ms0GZnpBtckmv3dgsN_-OVPZt0U2i',
//         //'client_secret': 'EA49HIg-l9pyL0n-GSNTnpmxTF94ynfqrt3-xROKJ5DaOdL880Vpoii8I4_EMHGF_JdBvQAWuxYnMTNk'
//       },
//       commit: true, // Show a 'Pay Now' button
//     };
//   }
//   componentDidMount() {
//     const { isScriptLoaded, isScriptLoadSucceed } = this.props;
//     if (isScriptLoaded && isScriptLoadSucceed) {
//       this.setState({ showButton: true });
//     }
//   }
//   componentWillReceiveProps({ isScriptLoaded, isScriptLoadSucceed }) {
//     if (!this.state.show) {
//       if (isScriptLoaded && !this.props.isScriptLoaded) {
//         if (isScriptLoadSucceed) {
//           this.setState({ showButton: true });
//         } else {
//           console.log('Cannot load Paypal script!');
//           this.props.onError();
//         }
//       }
//     }
//   }
 
//   render() {
//     const payment = () => paypal.rest.payment.create(this.props.env, this.props.client, {
//       transactions: [
//                     { amount: { total: this.props.total, currency: this.props.currency } },
//       ],
//     });
 
//     const onAuthorize = (data, actions) => actions.payment.execute().then(() => {
//       const payment = Object.assign({}, this.props.payment);
//       payment.paid = true;
//       payment.cancelled = false;
//       payment.payerID = data.payerID;
//       payment.paymentID = data.paymentID;
//       payment.paymentToken = data.paymentToken;
//       payment.returnUrl = data.returnUrl;
//       this.props.onSuccess(payment);
//     });
 
//     let ppbtn = '';
//     if (this.state.showButton) {
//       ppbtn = (<paypal.Button.react
//         env={this.state.env}
//         client={this.state.client}
//         payment={payment}
//         commit
//         onAuthorize={onAuthorize}
//         onCancel={this.props.onCancel}
//       />);
//     }
//     return <div>{ppbtn}</div>;
//   }
// }
 
// Payments.propTypes = {
//   currency: PropTypes.string.isRequired,
//   total: PropTypes.number.isRequired,
//   client: PropTypes.object.isRequired,
// };
 
// Payments.defaultProps = {
//   env: 'sandbox',
//   onSuccess: (payment) => {
//     console.log('The payment was succeeded!', payment);
//   },
//   onCancel: (data) => {
//     console.log('The payment was cancelled!', data);
//   },
//   onError: (err) => {
//     console.log('Error loading Paypal script!', err);
//   },
// };
//   constructor() {  
//     super();
//     this.state= {
//       name: '',
//     //   email: '',
//     //   password: '',
//     //   password2: '',  
//     //   errors: {}
//     };
//     this.onChange = this.onChange.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);
//   }
//   componentWillReceiveProps(nextProps){
//     if(nextProps.errors){
//       this.setState({errors: nextProps.errors})
//     }
//   }
//   onSubmit(e){
//     e.preventDefault();
//     const userPay = {
//       name: this.state.name,      
//     }; 
//     console.log(userPay); 
//     this.props.userPayments(userPay, this.props.history);
   
//     }
//   onChange(e){
//     this.setState({ [e.target.name]: e.target.value});
//   }
//   render(){
//     const { errors } = this.state;

//     return (
//       <div>
//       <div className="container-fluid">
//           <div className="banner-section">
//               <div className="banner-title">
//                   <h1>Now, You can pay</h1>
//               </div>
//           </div>

//       </div>
//       <form>
//       <TextFieldGroup
//             placeholder="Name"
//             name="name"
//             type="name"
//             value={this.state.name}
//             onChange={this.onChange}
//             // error={errors.name}
//             />
//             <input type="submit" className="btn btn-info" />
//       </form>
      
//       </div>
//     );
//   }
// } 
// Payments.propTypes = {
//   userPayments: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
//   errors: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
//   auth: state.auth,
//   errors: state.errors
// })

//export default scriptLoader('https://www.paypalobjects.com/api/checkout.js')(Payments);
// export default connect(mapStateToProps, {userPayments})(withRouter(Payments));

// import React, { Component } from 'react';


import StripeCheckout from 'react-stripe-checkout';
import { userInfo } from 'os';
import { logoutUser } from '../../actions/authAction';
import { clearCurrentProfile } from '../../actions/profileActions';
import PayImage  from '../../assets/image/btn_buynowCC_LG.gif';
import React, { Component } from 'react';

class Payments extends Component {
    render() {
       
        return(
            // <div>
            
            //     <form>
                    
            //         <div className="btn"><img src={PayImage} alt="paypal payment method" /></div>
            //     </form>
            // </div>
            <StripeCheckout
                name="Vivek"
                description="You can pay now"
                amount={500}
                token={token => console.log(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
           <a herf="/success"> <div className="btn  btn-info mt-4">Buy by Card</div> </a> 
            </StripeCheckout>
        )
    }
}
export default Payments;