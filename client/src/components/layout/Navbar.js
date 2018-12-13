import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authAction';
import { clearCurrentProfile } from '../../actions/profileActions';
import NavbarPublic from "../navbar/Navbar";

import './navbar.css'

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }
	render() {
    const { isAuthenticated, user } = this.props.auth;
    const authLinks = (
      <ul className="navbar-nav layout-user ml-auto">
        <li className="nav-item">
          <a href="" onClick={this.onLogoutClick.bind(this)} className="nav-link">
            <Link to='/'><span>Logout</span></Link>
          </a>
        </li> 
      </ul>  
    );
    const authUserLinks = (
      <ul className="navbar-nav layout-user user-name ml-auto">
        <li className="nav-item">
          <a href="" className="nav-link">
            <img 
              src={ user.name, require('../../img/user.png')} 
              alt='logOut'
              style={{width:'25px', marginRight: '3px', marginBottom:'5px' }}
            /> <span>{user.name}</span>
          </a>
        </li> 
      </ul>
    );
    const guestLinks = (
      // <ul className="navbar-nav ml-auto">   
      //    <li className="nav-item">
      //     <Link className="nav-link" to="/customorder">
      //       Custom-Order
      //     </Link>
      //   </li>
      //   <li className="nav-item">
      //     <Link className="nav-link" to="/register">
      //       Sign Up
      //     </Link>
      //   </li>
      //   <li className="nav-item">
      //     <Link className="nav-link" to="/login">
      //       Login
      //     </Link>
      //   </li>
      // </ul>
      <NavbarPublic/>
    );

		return(
		<nav className="navbar mb-4 layout-bg">
        {/* <div className="container">
          <Link className="navbar-brand" to="/landing">
            Admin Pannel
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            {/* <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/profiles">
                  {' '}
                  Developers  
                </Link>
              </li>
            </ul> */}
            
            {isAuthenticated ? authLinks : guestLinks}
            {isAuthenticated ? authUserLinks : null}
         {/* /</nav> </div>
        </div> */}
      </nav>
		)
	}
}
Navbar.propsType = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
  auth: state.auth,

})

export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(Navbar);