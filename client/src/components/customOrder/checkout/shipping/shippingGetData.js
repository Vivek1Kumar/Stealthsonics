import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { shippingItem} from '../../../../actions/authAction';  
import { withRouter } from 'react-router-dom';
//import TextFieldGroup from '../../../common/TextFieldGroup';
import Shipping from './Shipping';

 class ShippingGetData extends Component {
constructor(props){
  super(props);
  this.state ={
    constacts: []
  }
}
// componentDidMount(){
//   this.props.shippingItem;
// }
// fetchData(){
//   fetch('http://localhost:5000/api/user/item/checkout',{
//     method: "GET",
//         headers: {
//             "Content-Type": "x-www-form-urlencoded"
//         }
//   })
//   .then(ress=> console.log(ress.json()))
// }
     
  render(){
   

    return (
      <div>
          <tr><th>Full Name</th>
          <tbody>hello</tbody>
          </tr>          
      </div>
    );
  }
} 
// Shipping.propTypes = {
//   shippingItem: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
//   errors: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
//   auth: state.auth,
//   errors: state.errors
// })

export default connect(null)(withRouter(ShippingGetData, shippingItem));
