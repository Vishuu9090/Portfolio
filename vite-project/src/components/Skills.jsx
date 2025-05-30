import React from 'react'
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { AiOutlineJavaScript } from "react-icons/ai";
import { FaReact } from "react-icons/fa6";
import { Element } from 'react-scroll';

export default function Skills() {
  return (
<Element name="Skills">
    <div className=' flex justify-center mt-25 '>
      <div>
        <div className='text-white text-3xl md:text-3xl flex justify-center '>Skills</div>
        <div className='text-white text-lg mt-2 md:text-lg pl-4  '>I worked on various frontend projects. Check them<a className='underline pl-1' href=""> here.</a></div>
        <div className='mx-25 mt-6 rounded-lg border-amber-600 bg-gray-800 border-2 h-[180px] w-[250px]'>
          <div className='flex justify-center text-xl font-bold pt-3 text-white'>Frontend</div>
          <div className='flex justify-around py-5'>
            <div className=' flex items-center textlg  text-orange-600'><FaHtml5/><span className='text-amber-400 pl-1'>HTML</span></div>
            <div className=' flex items-center text-lg  text-blue-600'><FaCss3Alt/><span className='text-amber-400 pl-1'>CSS</span></div>
          </div>
          <div className='flex justify-around py-2.5'>
            <div className=' flex items-center text-lg text-amber-300'><AiOutlineJavaScript/><span className='text-amber-400 pl-1'>JavaScript</span></div>
            <div className=' flex items-center text-lg text-blue-600'><FaReact/><span className='text-amber-400 pl-1'>React</span></div>
          </div>

        </div>
      
      </div>
    </div>
    </Element>
  )
}
