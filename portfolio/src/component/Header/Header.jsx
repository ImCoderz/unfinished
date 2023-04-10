import React from 'react'
import './header.css'
import{BsArrowUpRight} from 'react-icons/bs'
const Header = () => {
  return (
    <div className='header-bg'>
        <div className="header-grid">
          <div className="header-text">
            <h1>Hi! I'm<span>UI/UX</span> Abderrahmane <br/> Naama</h1>
            <p>studying at an engineering school <b>INPT</b></p>
            <p>I'm a <b>full stack</b> developper.</p>
            <div className="header-text__button">
              <button className='orangebutton'><em> Hire me</em></button>
              <button className='nobgbutton'><em> Project</em> <BsArrowUpRight/></button>
            </div>
          </div>
          <div className="header-statistique">
            <div className="header-left">
              <h1>project <br /> statistique</h1>
              <button>Know More</button>
            </div>
            <div className="header-right">
              <div className='flex'>
                <p>project</p>
                <span>5</span>
              </div>
              <div className='flex'>
                <p>design web</p>
                <span>2</span>
              </div>
              <div className='flex'>
                <p>design app</p>
                <span>2</span>
              </div>
            </div>
          </div>
          <div className="header-image">
            
          </div>
        </div>
    </div>
  )
}

export default Header