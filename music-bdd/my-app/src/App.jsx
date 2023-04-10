import React from 'react';
import './App.css';
import Login from './components/Login';
import {useSelector} from 'react-redux'
import Charts from './components/Charts';
function App() {
  const isLogging = useSelector(state=>state.auth.isLogging);
  console.log(isLogging);
  return (
    <div className='w-full min-h-screen bg-gradient-to-r from-violet-900 to-cyan-400'>
      {!isLogging ?<Login/>:<Charts/>}
    </div>
  );
}

export default App;
