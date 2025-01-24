import React from 'react'
import Ccp from '../photos/C++.png'
import Css from '../photos/CSS.png'
import Html from '../photos/HTML.png'
import Javascript from '../photos/JAVASCRIPT.png'
import Mongodb from '../photos/MONGODB.png'
import Node from '../photos/NODE.png'
import reac from '../photos/REACT.png'
import Tailwind from '../photos/TAILWIND.png'
import Github from '../photos/GITHUB.png'

export default function Skills() {

  const tech=[
    {
      id:1,
      src:Html,
      title:'Html',
      style:'shadow-orange-500'
    },
    {
      id:2,
      src:Css,
      title:'Css',
      style:'shadow-blue-500'
    },
    {
      id:3,
      src:Javascript,
      title:'Javascript',
      style:'shadow-yellow-500'
    },
    {
      id:4,
      src:reac,
      title:'React',
      style:'shadow-blue-600'
    },
    {
      id:5,
      src:Tailwind,
      title:'Tailwind',
      style:'shadow-sky-500'
    },
    {
      id:6,
      src:Mongodb,
      title:'Mongo DB',
      style:'shadow-green-500'
    },
    {
      id:7,
      src:Node,
      title:'Node',
      style:'shadow-green-300'
    },
    {
      id:8,
      src:Github,
      title:'Github',
      style:'shadow-gray-400'
    },
    {
      id:9,
      src:Ccp,
      title:'C++',
      style:'shadow-blue-400'
    }
]


  return (
    <div className='bg-[rgb(0,0,33)] w-full text-white h-full md:h-screen'>
      <p className='text-white font-bold font-serif flex justify-center pt-4 text-2xl md:text-3xl underline underline-offset-4 decoration-purple-400 hover:scale-125 hover:duration-300'>Skills</p>
      <p className='py-6 px-5 font-serif md:text-2xl'>These are the technologies I've worked with.</p>

      <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

        {
          tech.map(({id,src,title,style})=>(
          
            <div key={id} className={` ml-3 mr-3 shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>

            <img src={src} alt="" className='w-20 mx-auto'/>
            <p className='mt-4'>{title}</p>
        </div>
          ))
        }

        

      </div>
      
    </div>
  )
}
