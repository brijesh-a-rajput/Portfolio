import React from 'react'
import {AiOutlineGithub,AiFillLinkedin,AiOutlineMail} from 'react-icons/ai';
import {BsFillPersonLinesFill} from 'react-icons/bs'
export default function SocialLinks() {

    const links=[
        {
            id:1,
            child:(
                <>
                LinkedIn <AiFillLinkedin size={30}/>
                </>
            ),
            href:"https://www.linkedin.com/in/brijesh-rajput-b3316925b/",
            style:'rounded-tr-md'
        },
        {
            id:2,
            child:(
                <>
                Github <AiOutlineGithub size={30}/>
                </>
            ),
            href:"https://github.com/Brijesh-Rajput07"
        },
        {
            id:3,
            child:(
                <>
                Mail <AiOutlineMail size={30}/>
                </>
            ),
            href:"mailto:rajputbrijesh170@gmail.com"
            
        },
        {
            id:4,
            child:(
                <>
                Resume <BsFillPersonLinesFill size={30}/>
                </>
            ),
            href:"/Resume.pdf",
            style:'rounded-br-md',
            download:true,
            
        }
    ]

  return (

    
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
        {
        links.map(({id,child,href,style,download})=>
        (
            <li key={id} className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 + " " + style'>
            <a href={href} className='flex justify-between items-center w-full text-white' download={download} target='_blank'
            rel='noreferrer'>
            <>
            {child}
            </>
            </a>
            </li>
        )
        )
    }
            
        </ul>
      
    </div>
  )
}
