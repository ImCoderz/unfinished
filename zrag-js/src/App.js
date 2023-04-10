import React from 'react';
import './App.css';
import {Navbar ,Header, Blog,Whatisgpt3} from './component';


const App = () => {
  return (
    <div className='App'>
        <div className='section'>
            <Navbar/>
            <Header/>
            <Blog/>
        </div>
        <div className='section2'>
            <Whatisgpt3/>
        </div>
    </div>
  )
}
export default App

