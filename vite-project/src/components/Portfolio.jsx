import React from 'react'
import { FaGithub } from "react-icons/fa";
import { Element } from 'react-scroll';
import img from "../assets/images/image1.png"

export default function Portfolio() {
  return (
    <Element name="Portfolio">
    <div className='py-10'>

      <div className=' flex  flex-col     items-center  justify-center md:flex-row gap-4 '>

        <div className=' flex flex-col gap-4'>
        <h1 className=' text-3xl text-white'>Portfolio</h1>

          <img className='h-[250px] w-[400px] shadow-xl shadow-gray-900  rounded-2xl' src={img} alt="" />
        </div>
        <div className='flex justify-center items-start flex-col'>
          <div className='text-2xl md:text-3xl text-white font-semibold'>Project #1</div>
          <div className='text-white md:text-xl pt-2'>UI for frontend development using React.</div>
          <div className='flex justify-between pt-3'>
            <button className=' rounded-lg px-1 md:text-lg mr-8 bg-amber-600 hover:bg-amber-700 hover:scale-110 transition-all shadow-sm shadow-gray-900 duration-300'><p className='text-white'>View Site</p></button>
            <button className=' flex items-center justify-center bg-amber-600 text-white rounded-xl md:text-3xl text-3xl hover:scale-110 shadow-sm shadow-gray-900 transition-all duration-300 h-[40px] w-[40px] hover:bg-amber-700'><FaGithub /></button>
          </div>
        </div>


      </div>


    </div>
</Element>
  )
}
