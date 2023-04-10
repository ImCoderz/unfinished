import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.svg'
const Menu=()=>(
  <>
    <p><a href="./">Home</a></p>
    <p><a href="./">Space</a></p>
    <p><a href="./">Planet</a></p>
    <p><a href="./">Mars projet</a></p>
  </>
)


const Navbar = () => {
  return (
    <div className='space__navbar'>
      <div className="space__navbar-logo">
        <img src={logo} alt="nasa logo" />
      </div>
      <div className="space__navbar-links">
        <Menu/>
      </div>
      <div className='space__navbar-sign'>
          <button className='space__navbar-signin'>Sign In</button>
          <button className='space__navbar-signup'> Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar