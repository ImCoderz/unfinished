import React from 'react';
import './feature.css';

const Feature = ({title,para}) => {
  return (
    <div className='space__feature'>
        <div className='space__feature-title'>
          <div className='space__feature-blank'></div>
          <h1>{title}</h1>
        </div>
        <div className='space__feature-para'>
          <p>{para}</p>
        </div>
    </div>
  )
}

export default Feature