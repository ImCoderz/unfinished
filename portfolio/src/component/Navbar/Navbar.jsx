import React from 'react'
import './navbar.css'
import logo from '../../assets/Naama..svg'
import {IoIosArrowDown} from 'react-icons/io'
const Navbar = () => {
  return (
    <div className='navbar-bg'>
        <div className="navbar-image">
            <img src={logo} alt="./" />
        </div>
        <div className="navbar-links">
            <ul>
                <li><a href="./">Home</a></li>
                <li><a href="./">Works <IoIosArrowDown className='downarrow' color='orange' size={17}/></a></li>
                <li><a href="./">About</a></li>
                <li><a href="./">Projects</a></li>
                <li><a href="./">Services</a></li>
            </ul>
        </div>
        <div className="navbar-button">
            <button>Let's Chat</button>
        </div>
    </div>
  )
}

export default Navbar