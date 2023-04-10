import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {RiMenuLine,RiCloseLine} from 'react-icons/ri'
const Navbar = () => {
  const [menu,setMenu]=useState(false);
  return (
    <div className='md:flex md:items-center md:justify-around overflow-hidden bg-gray-500  '>
        <div className='md:pl-0 pl-5 mt-1'>
          <a href="/"><Image src='/Naama..svg' width={100} height={50}></Image></a>
        </div>
        <div className={`${menu?'flex opacity-100':'hidden'} md:flex md:opacity-100 opacity-0`}>
          <ul className='md:flex md:items-center w-full '>
            <li className='p-5 hover:bg-slate-300 flex-1 cursor-pointer font-light font-Poppins text-neutral-800 w-full '><Link href="/">Home</Link></li>
            <li className='p-5 hover:bg-slate-300 flex-1 cursor-pointer font-light font-Poppins text-neutral-800 w-full '><Link href="/">Works</Link></li>
            <li className='p-5 hover:bg-slate-300 flex-1 cursor-pointer font-light font-Poppins text-neutral-800 w-full '><Link href="/">About</Link></li>
            <li className='p-5 hover:bg-slate-300 flex-1 cursor-pointer font-light font-Poppins text-neutral-800 w-full '><Link href="/">Projects</Link></li>
            <li className='p-5 hover:bg-slate-300 flex-1 cursor-pointer font-light font-Poppins text-neutral-800 w-full '><Link href="/">Services</Link></li>
          </ul>
        </div>
        <div className={`absolute right-28 top-3 md:static hidden sm:flex `}>
              <button className='p-2 px-3 bg-black text-white mr-3 font-bold rounded hover:text-orange-500'>Sign In</button>
              <button className='p-2 px-3 bg-orange-500 font-bold rounded hover:text-white'>Sign Up</button>
        </div> 
        <div className='md:hidden absolute right-4 top-4 flex font-bold'>
          <p className='mr-2 cursor-pointer' onClick={()=>{setMenu(!menu)}} >Menu</p>
          {(
           menu ?<RiCloseLine className='cursor-pointer' size={27} onClick={()=>{setMenu(false)}}/> 
                :<RiMenuLine  className='cursor-pointer' size={27} onClick={()=>{setMenu(true)}}/>
          )}
        </div>
    </div>
  )
}

export default Navbar