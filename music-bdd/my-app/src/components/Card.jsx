import React from 'react'
import picture from '../assets/picture.jpeg'
const Card = () => {
  return (
    <div className=' cursor-pointer rounded-lg m-6 p-8  text-center flex flex-col w-[300px] h-[300px] bg-gradient-to-b from-slate-500 to-zinc-700 items-center justify-center'>
        <img src={picture} alt="pic" width={240}/>
        <h1 className='text-2xl font-bold text-white'>Asus Rog Strix</h1>
        <p className='text-gray-400 text-md font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dicta minus commodi</p>
    </div>
  )
}

export default Card