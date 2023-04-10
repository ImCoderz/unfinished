import React from 'react';
import './navbar.css';
import logo from '../../assets/GPT-3.png';

const Menu=()=>(
  <>
    <p><a href="./">Home</a></p>
    <p><a href="./">WhatGPT-3</a></p>
    <p><a href="./">Open AI</a></p>
    <p><a href="./">Case Studies</a></p>
    <p><a href="./">Library</a></p>
  </>
)
const Navbar = () => {
  return (
    <div className='container__navbar'>
        <div className='container__navbar-logo'>
            <img src={logo} alt="navbar logo" />
        </div>
        <div className="container__navbar-links">
          <Menu/>
        </div>
        <div className="container__navbar-button">
          <button className='container__navbar-button_signin'>Sign in</button>
          <button className='container__navbar-button_signup'>Sign Up</button>
        </div>
    </div>
  )
}
export default Navbar