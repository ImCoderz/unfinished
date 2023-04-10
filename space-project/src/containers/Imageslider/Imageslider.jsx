import React from 'react'
import { useState } from 'react'
import './imageslider.css'
import earth from '../../assets/earth.jpg';
import uranus from '../../assets/uranus.png';
import saturn from '../../assets/saturn.webp';
import mars from '../../assets/mars.jpg';
import {FaAngleLeft , FaAngleRight} from 'react-icons/fa';
const slides=[
  {src:earth,title:'Earth'},
  {src:uranus,title:'uranus'},
  {src:saturn,title:'saturn'},
  {src:mars,title:'mars'}
];

const Imageslider = () => {
  const [currentindex,setcurrentindex]=useState(0);
  const previous =()=>{
    const firstslide=currentindex==0;
    const newindex=firstslide?slides.length -1:currentindex -1;
    setcurrentindex(newindex);
  }
  const next =()=>{
    const lastslide=currentindex==slides.length-1;
    const newindex=lastslide?0:currentindex +1;
    setcurrentindex(newindex);
  }
  return (
    <div className='imageslider__bg'>
      <div className='fale'><FaAngleLeft onClick={previous}/></div>
      <div className='nasa__imageslider'> 
        <h1>{slides[currentindex].title}</h1>
        <img src={slides[currentindex].src} alt="planet" />
      </div>
      <div className='fari'><FaAngleRight onClick={next}/></div>
    </div>
  )
}

export default Imageslider