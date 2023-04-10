import React from 'react'
import {genres} from '../assets/constants'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import SongCard from '../components/SongCard'
const Discover_copy = () => {
    const [music, setMusic]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:3001/api/get').then((response)=>{
            setMusic(response.data)
            //console.log(response);
            //console.log(response.data);
        })
        console.log(music);
        console.log(music);
    },[])
    const genreTitle='Pop'
  return (
    <div className='flex flex-col'>
        <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10 ">
            <h2 className='font-bold text-3xl text-white text-left '>Discover</h2>
            <select 
                onChange={()=>{}} 
                value=''  
                className='bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5 '
            >
                {genres.map((genre)=><option value={genre.value} key={genre.value}>{genre.title}</option> )}
            </select>
        </div>
        <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
            {music?.map((musics,i)=>(
                <SongCard
                    song={musics}
                    i={i}
                />
            ))

            }
        </div>
    </div>
  ) 
}

export default Discover_copy