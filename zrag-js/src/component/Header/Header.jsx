import React from 'react';
import './header.css';
import himage from '../../assets/himage.png'
import Group from '../../assets/Group.png'
const Header = () => {
  return (
    <div className='header'>
      <div className='header__content'>
        <h1>Let’s Build Something amazing with GPT-3 OpenAI</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <div className='header__input'>
          <input type="email" placeholder='Your Email Address' ></input>
          <button>Get Started</button>
        </div>
        <div className="header__stat">
          <img src={Group} alt="image" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="header__image">
        <img src={himage} alt="header_image" />
      </div>
    </div>
  )
}

export default Header