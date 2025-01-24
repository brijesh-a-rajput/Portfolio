import React from 'react'
import developer from '../photos/Developer.jpg'
import Typed from 'react-typed';
import SocialLinks from './SocialLinks';

export default function Home() {
  return (
    <div className='bg-[rgb(0,0,33)] w-full h-[100vh] pt-4 p-10 md:flex '>

<div className='left text-white justify-center absolute inset-x-0 mt-64 ml-10 md:static pt-10 md:w-[50%] md:mt-[200px] md:ml-20 '>
        <div className='flex items-center font-serif text-2xl md:text-3xl'>
      Hi, My name is<h1 className='text-purple-400 pl-2 font-bold font-serif text-2xl md:text-3xl'>Brijesh</h1></div>
      <div className='md:flex'>
      <div className='font-serif text-2xl md:text-3xl'>and I am a passionate 
      <div><Typed className='text-purple-400 font-bold font-serif'
                strings={[
                    'Full stack Web Developer.',
                    'Web Designer.',
                    'Ux-Ui Designer.']}
                    typeSpeed={140}
                    backSpeed={50}
                    loop />
                    </div>
                    </div>
                    </div>
      </div>

      <div className='right absolute inset-x-0 top-0 md:w-[50%] mt-24 ml-14 md:static md:mt-14 md:ml-20'>
        <img className='h-60 md:h-auto' src={developer} alt="Developer Image" />
      </div>
      <SocialLinks/>
    </div>
    
  )
}
