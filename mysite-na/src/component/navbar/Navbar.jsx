import React from 'react'
import logo from '../../assets/logo.svg';
import './navbar.css';
const Menu = () => (
    <>
      <p><a href="#home">Home</a> </p>
      <p><a href="#wgpt3">What is GPT3?</a> </p>
      <p><a href="#possibility">Open AI</a> </p>
      <p><a href="#features">Case Studies</a> </p>
      <p><a href="#blog">Library</a> </p>
    </>
  )
function Navbar() {
  return (
    <div className='gpt3__navbar'>
        <div className="gpt3__navbar-links">
            <div className="gpt3__navbar-links_logo">
                <img src={logo} alt='logo'/>
            </div>
            <div className="gpt3__navbar-links_containers">
                <Menu/>
            </div>
        </div>

    </div>
  )
}

export default Navbar