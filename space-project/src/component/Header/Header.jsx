import React from 'react'
import './header.css'
import { Feature } from '../../containers'
//import space2 from '../../assets/space2.jpg'
const Header = () => {
  return (
    <div className='space__header'>
        <div className="space__header-title">
          <h1>Let's Discover The Space </h1>
          <p>Space is the area beyond the upper limits of Earth’s atmosphere. It is where all of the asteroids, comets, planets, stars, solar systems and galaxies in our universe are found.</p>
        </div>
        <div className="space__header-image">
          <div className='nasa__feature'>
            <em><b>In Space There Is:</b></em>
            <Feature title='Planet' para='These oddball balls of light followed their own paths across the night sky, so the ancient Greeks called them “planetes,” meaning wanderers.'/>
            <Feature title='Black hole' para='A black hole is a place in space where gravity pulls so much that even light can not get out. The gravity is so strong because matter has been squeezed into a tiny space.'/>
            <Feature title='Stars' para='What is a star? A star is a big ball of gas. It is not star-shaped. Stars give off heat and light. How is a star made? Stars are born in nebulas. Nebulas are clouds found in space.'/>
          </div>
        </div>
    </div>
  )
}

export default Header