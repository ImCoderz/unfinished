import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/MotoCar.svg'
import {RiCloseLine ,RiMenu3Line}from 'react-icons/ri'
const Menu=()=>(
  <>
    <ul>
        <li ><a href="./" >Welcome</a> </li>
        <li><a href="./" >Cars</a> </li>
        <li><a href="./">About</a> </li>
        <li><a href="./" >Tesla</a> </li>          
        <li><a href="./" >Moto</a> </li>
        <li><a href="./" >Disclaimer</a> </li>
    </ul>
  </>
)
const Navbar = () => {
  const [toggleMenu,setToggleMenu]=useState(true);
  return (
    
    <nav className='motocar__navbar-bg flex poppins'>
      <div className="motocar__navbar-image">
        <a href="./"><img src={logo} alt="./" /></a>
      </div>
      <div className="motocar__navbar-menu">
        {toggleMenu 
          ?<RiCloseLine color='#fff' size={27} onClick={()=>setToggleMenu(false)}/>
          :<RiMenu3Line color='#fff' size={27} onClick={()=>setToggleMenu(true)}/>
        }
      </div>
      <div className='motocar__navbar-links'>
        {toggleMenu &&(
          <Menu/>
        )}
      </div>
      {toggleMenu&&(
        <div className='motocar__navbar-buttons'>
            <button className='first-button'>Sign In</button>
            <button className='second-button'>Sign Up</button>
        </div>
      )}
    </nav>
  )
}
export default Navbar