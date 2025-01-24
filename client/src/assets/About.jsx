import React from 'react'
import Brijesh from '../photos/Brijesh.jpeg'
export default function About() {
  return (
    <div className='bg-[rgb(0,0,33)] w-full h-[800px] sm:h-screen'>
      <p className="text-white font-bold font-serif flex justify-center pt-4 text-2xl md:text-3xl underline underline-offset-4 decoration-purple-400 hover:scale-125 hover:duration-300">
        About Me
      </p>
      
      <div className='sm:flex sm:justify-center sm:items-center'>

        <div className='left sm:w-[50%] h-[190px] absolute inset-x-0 bottom-0 text-white pl-10 sm:static'>
            <div className='text-white text-xl sm:text-2xl font-serif'>Hello there! I'm Brijesh, a passionate and dedicated IT student with a keen interest in web development, specializing in the MERN stack. I am thrilled to welcome you to my portfolio and share my journey, experiences, and projects with you.</div>
            <p className='text-white text-xl pt-4 sm:text-2xl font-serif'>My journey in web development started with the basics of HTML and CSS, which laid a strong foundation for my skills. However, it was when I discovered the MERN stack - MongoDB, Express.js, React, and Node.js - that I truly felt I had found my niche.</p>
        </div>

        <div className='right  sm:w-[50%] absolute inset-x-0 top-0 mt-[150px] flex justify-center sm:static sm:mt-[50px] '>
            <img src={Brijesh} className='h-80 w-60 sm:h-[450px] sm:w-auto' alt="" />
        </div>
      </div>
    </div>
  )
}
