import React from 'react'
import Hospital from '../photos/Hospital.png'
import Flipkart from '../photos/Flipkart.png'
export default function Projects() {

    const projects=[
      {
        id:1,
        src:Hospital
      },
      {
        id:2,
        src:Flipkart
      }
    ]


  return (
    <div className='bg-[rgb(0,0,33)] w-full text-white h-full sm:h-screen md:h-screen'>
      <p className='text-white font-bold font-serif flex justify-center pt-4 text-2xl md:text-3xl underline underline-offset-4 decoration-purple-400 hover:scale-125 hover:duration-300'>Projects</p>
      <p className='py-6 px-5 font-serif md:text-2xl'>Check out some of my work here.</p>


      <div className='w-full grid sm:grid-cols-2 md:grid-cols-3 text-white py-8 px-12 sm:px-0 gap-8 '>
{
  projects.map(({id,src})=>(
    <div key={id} className='ml-3 mr-3 shadow-md shadow-gray-500 hover:scale-105 duration-300 rounded-lg py-2 px-1'>
            <img src={src} alt="" className='w-640' />
            <div className='flex  justify-between items-center'>
            <button className='font-serif p-3 text-xl pl-10 sm:pl-5 md:pl-10'>Demo</button>
            <button className='font-serif p-3 text-xl pr-10 sm:pl-5 md:pl-10'>Code</button>
          </div>
          </div>
  ))
}

      </div>
    </div>
  )
}
