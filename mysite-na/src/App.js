import React from 'react';
import './App.css';
import { Navbar} from './component';
import {Header, Possibility, Features, Blog, Footer, WhatGPT3} from './containers';

function App() {
  return (
    <div className='App'>
        <div className='gradient__bg'>
          <Navbar/>
          <Header/>
        </div>
        <div>
          <Features/>
          <Possibility/>
          <Blog/>
          <Footer/>
          <WhatGPT3/>
        </div>
    </div>
  )
}

export default App