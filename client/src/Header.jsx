import React from 'react'
import { useState } from 'react'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import { Link } from 'react-router-dom'
export default function Header() {

  const [toggle,setToggle]=useState(false);
  return (
    <div className='bg-[rgb(18,18,62)] text-white flex items-center justify-between'>
      <div className='text-2xl text-white  font-serif p-4 pl-10'>
        Brijesh's Portfolio
      </div>
      {
        toggle?
      
      <AiOutlineClose onClick={()=>setToggle(!toggle)}  className='text-white text-xl md:hidden block mr-[10px] cursor-pointer'/>:
      <AiOutlineMenu  onClick={()=>setToggle(!toggle)} className='text-white text-xl md:hidden block mr-[10px] cursor-pointer'/>
}
      <ul className='hidden md:flex h-12 items-center gap-16 justify-end font-bold font-serif'>
        <li className='hover:underline hover:underline-offset-4 hover:decoration-green-400
        hover:decoration-2 hover:duration-300 hover:scale-110'><Link to="/">Home</Link></li>
        <li className='hover:underline hover:underline-offset-4 hover:decoration-green-400
        hover:decoration-2 hover:duration-700 hover:scale-110'><Link to="/about">About me</Link></li>
        <li className='hover:underline hover:underline-offset-4 hover:decoration-green-400
        hover:decoration-2 hover:duration-700 hover:scale-110'><Link to="/skills">Skills</Link></li>
        <li className='hover:underline hover:underline-offset-4 hover:decoration-green-400
        hover:decoration-2 hover:duration-700 hover:scale-110'><Link to="/projects">Projects</Link></li>
        <li  className='hover:underline hover:underline-offset-4 hover:decoration-green-400
        hover:decoration-2 hover:duration-700 hover:scale-110 pr-16'><Link to="/contact">Contact</Link></li>
      </ul>



      <ul className={` duration-300  md:hidden fixed bg-black top-[64px] text-white font-bold font-serif w-full h-screen ${toggle ? 'left-[0]' : 'left-[-100%]'}`} >
        <li onClick={()=>setToggle(!toggle)} className='border-b border-gray-600 hover:underline hover:underline-offset-4 hover:decoration-green-400
        hover:decoration-2 hover:duration-300 hover:text-[17px] p-4'><Link to="/">Home</Link></li>
        <li onClick={()=>setToggle(!toggle)} className='border-b border-gray-600 hover:underline hover:underline-offset-4 hover:decoration-green-400
        hover:decoration-2 hover:duration-700 hover:text-[17px] p-4'><Link to="/about">About me</Link></li>
        <li onClick={()=>setToggle(!toggle)} className='border-b border-gray-600 hover:underline hover:underline-offset-4 hover:decoration-green-400
        hover:decoration-2 hover:duration-700 hover:text-[17px] p-4'><Link to="/skills">Skills</Link></li>
        <li onClick={()=>setToggle(!toggle)} className='border-b border-gray-600 hover:underline hover:underline-offset-4 hover:decoration-green-400
        hover:decoration-2 hover:duration-700 hover:text-[17px] p-4'><Link to="/projects">Projects</Link></li>
        <li  onClick={()=>setToggle(!toggle)}   className='border-b border-gray-600 hover:underline hover:underline-offset-4 hover:decoration-green-400
        hover:decoration-2 hover:duration-700 hover:text-[17px] pr-16 p-4'><Link to="/contact">Contact</Link></li>
      </ul>
      </div>
  )
}
