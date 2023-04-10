import React from 'react'
import { useDispatch } from 'react-redux';
import { authActions } from '../features/authSlice';
const Login = () => {
    const dispatch=useDispatch();
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(authActions.logIn())
    }
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
        <div className='  bg-gradient-to-b from-indigo-600 to-purple-900 w-[400px] h-[400px] flex flex-col justify-center items-center transition-shadow'>
            <div className='h-[20%]'>
                <h1 className='text-white text-3xl font-bold content-start '>Login</h1>
            </div>
            <div className=' mb-7'>
                <h3 className='text-gray-300 text-lg font-medium py-4'>Username :</h3>
                <input type="text" className='p-2 outline-none '/>
                <h3 className='text-gray-300 text-lg font-medium py-4'>password :</h3>
                <input type="password" className='p-2 outline-none '/>
            </div>
            <button className=' px-7 p-2 bg-violet-700 rounded text-white font-semibold hover:bg-purple-500' onClick={handleSubmit}>Submit</button>
        </div>
    </div>
  )
}

export default Login