import React from 'react'
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { AiOutlineJavaScript } from "react-icons/ai";
import { FaReact } from "react-icons/fa6";

export default function Tech() {
  return (
   <div className='flex justify-center mt-20 gap-7'>
    <p className='text-white  text-2xl md:text-3xl'>My Tech Stack</p>
    <div className='text-orange-600 text-3xl md:text-6xl'><FaHtml5/></div>
    <div className='text-blue-700  text-3xl md:text-6xl'><FaCss3Alt/></div>
    <div className='text-amber-300 text-3xl md:text-6xl'><AiOutlineJavaScript/></div>
    <div className='text-blue-700  text-3xl md:text-6xl'><FaReact/></div>
   </div>
  )
}
