import React from 'react'
import logo from '../assets/Naama..png'
const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-[10vh]'>
        <div className='cursor-pointer pl-10'>
            <img src={logo} alt="logo" width={100} />
        </div>
        <div className=''>
            <ul className='flex flex-row gap-10'>
                <li className='text-gray-400 font-semibold text-lg p-2 hover:text-orange-300 cursor-pointer'>Home</li>
                <li className='text-gray-400 font-semibold text-lg p-2 hover:text-orange-300 cursor-pointer'>About Us</li>
                <li className='text-gray-400 font-semibold text-lg p-2 hover:text-orange-300 cursor-pointer'>Products</li>
                <li className='text-gray-400 font-semibold text-lg p-2 hover:text-orange-300 cursor-pointer'>Conctact Us</li>
            </ul>
        </div>
        <div className='pr-10'>
            <button className='text-2xl font-bold  text-purple-800 bg-purple-400 rounded p-2'>LogOut</button>
        </div>
    </div>
  )
}

export default Navbar