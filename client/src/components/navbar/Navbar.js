import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import "./Navbar.css"

class Navbar extends Component {
    render() {
        const style={
          width:"70px",
          height:"70px",
          marginLeft:"40px",
        }
      return (
          <header>

  <nav class="navbar navbar-default navbar-fixed-top">
  <div class="container-fluid">
    <div class="navbar-header">

    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span> 
      </button>
 
      <a class="navbar-brand" href="#">
      <img class="logo"  src={require("../../assets/image/logo.png")} alt="logo"></img>
      </a>
    </div>
    <div class="collapse navbar-collapse mobile-nav" id="myNavbar">
    <ul class="nav navbar-nav">
      <li ><a class="color-black" href="/">Home</a></li>
      <li><a  class="dropdown-toggle color-black" id="dropdownMenu2" data-toggle="dropdown">Team-Stealth</a>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <li><a href="/about">About-Us</a></li>
    <li><a href="/artist">Artists</a></li>
  </ul></li>
      <li><a  class="color-black" href="/custom">Products</a>
      
      </li>
      <li><a class="color-black" href="/customOrder">Custom-Order</a><span class="flag">New</span></li>
      <li><a class="color-black" href="/thesciencce">The-Science</a></li>
      <li><a class="color-black" href="/news">News</a></li>
      <li><a class="color-black" href="/mediakit">Media-Kit</a></li>
      <li><a class="color-black" href="/contact">Contact</a></li>
      <li><a  class="color-black" href="/register">SignUp</a></li>
    </ul>
    </div>
  </div>
</nav>








          </header>
      );
    }
}

export default Navbar