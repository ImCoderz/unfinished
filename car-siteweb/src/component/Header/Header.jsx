import React from 'react'
import './header.css'
import header_pic from '../../assets/header_pic.svg'
const Header = () => {
  return (
    <div className='header-bg'>
      <div className="header-text">
        <h1>Buy Your Dream car</h1>
        <p>Buy a car with a raisonable price and say bye to waiting transport.</p>
        <button>CONTACT US</button>
      </div>
      <div className="header-image">
        <img src={header_pic} alt="./" />
      </div>
    </div>
  )
}

export default Header