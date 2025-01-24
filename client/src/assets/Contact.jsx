import React, { useState } from "react";
export default function Contact() {

const [name,setName]=useState('');
const [email,setEmail]=useState('');
const [message,setMessage]=useState('');

  async function contactinfo(ev)
  {
    ev.preventDefault();
   
      const response=await fetch('http://localhost:4000/contact',
      {
        method: 'POST',
        body: JSON.stringify({name,email,message}),
        headers: {'Content-Type' : 'application/json'},
      })
      
      setEmail('');
      setName('');
      setMessage('');
      
   
    if(response.status!==200)
    {
      alert('write your name and email properly.')
    }
    else{
      alert('Form submitted');
    }
  }

  return (
    <div className="bg-[rgb(0,0,33)] w-full text-white h-screen md:h-screen">
      <p className="text-white font-bold font-serif flex justify-center pt-4 text-2xl md:text-3xl underline underline-offset-4 decoration-purple-400 hover:scale-125 hover:duration-300">
        Contact
      </p>
      <p className="py-6 px-5 font-serif md:text-2xl ">
        Submit the below form to get in touch with me.
      </p>

      <div className="flex justify-center items-center text-white w-full mr-16 ">
        <form action="" className="flex flex-col w-full md:w-1/2 pl-10 pr-10">
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            className="bg-[rgb(0,0,33)] border-2  border-spacing-2 font-serif p-2 bg-transparent rounded-md text-white focus:outline-none"
            value={name}
            onChange={e=>setName(e.target.value)}
          />

<input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            className="bg-[rgb(0,0,33)] border-2  border-spacing-2 font-serif p-2 bg-transparent rounded-md my-4 text-white focus:outline-none" 
            value={email}
            onChange={e=>setEmail(e.target.value)}
          />

          <textarea name="message"  rows="10" className="bg-[rgb(0,0,33)] border-2  border-spacing-2 font-serif p-2 bg-transparent rounded-md text-white focus:outline-none" placeholder="Enter Your Message" value={message}
            onChange={e=>setMessage(e.target.value)}></textarea>

          <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300" onClick={contactinfo}>
            Let's Talk
          </button>
        </form>
      </div>
    </div>
  );
}
