import React from 'react'
import { FaGithub } from "react-icons/fa";
import img from "../assets/images/image2.png"

export default function Project() {
    return (
        <div className='flex flex-col-reverse md:flex-row md:items-center justify-evenly  mx-25 '>
            <div>
                <div className=' text-2xl md:text-3xl text-white pl-15 pt-4 font-semibold'>Project #2</div>
                <div className=' md:text-xl text-white pl-15'>Amazon clone.</div>
                <div className='flex pl-15 pt-3'>
                    <button className=' rounded-lg px-1 md:text-lg mr-8 bg-amber-600 hover:scale-110 transition-all duration-300 hover:bg-amber-700'><p className='text-white'>View Site</p></button>
                    <button className=' flex items-center justify-center bg-amber-600 text-white hover:scale-110 transition-all duration-300 rounded-xl text-3xl  h-[40px] w-[40px] hover:bg-amber-700'><FaGithub /></button>
                </div>
            </div>

            <div className=' shadow-xl shadow-gray-900 rounded-2xl' >
                <img className='h-[250px] w-[400px] rounded-2xl ' src={img} alt="" />

            </div>
        </div>
    )
}
