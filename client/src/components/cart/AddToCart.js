import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authAction';  
import { withRouter } from 'react-router-dom';
import TextFieldGroup from '../common/TextFieldGroup';
import {Link} from "react-router-dom";
import Login from '../auth/Login';
import Register from '../auth/Register';

class AddToCart extends Component {

   render(){   
   
    return (
        <div className="">
            <div className="col-md-06">
                <Register 
                    // value={this.state.name}
                    // value={this.state.email}
                    // value={this.state.password}
                    // value={this.state.password2}
                />
            </div>
            <div className="col-md-06">
            <Login 
                // value={this.state.email}
                // value={this.state.password}
                />
            </div> 
        </div>
    )} 
}  

export default AddToCart;
