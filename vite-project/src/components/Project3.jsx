// import React from 'react'
// import { FaGithub } from "react-icons/fa";
// import img from "../assets/images/image3.png"

// export default function Project3() {
//   return (
//     <div className='  flex  flex-col md:gap-10  md:flex-row items-center justify-center mt-20 '>
//             <div className=' rounded-2xl h-[250px] w-[400px] shadow-2xl shadow-gray-900 '>
//               <img className='shadow-2xl shadow-gray-900 h-[250px] w-[400px] rounded-2xl' src={img} alt="" />
//             </div>

//             <div className='flex justify-center ml-[-80px] md:ml-[80px] items-start  flex-col'>
//               <div className='md:text-3xl text-2xl mt-4  text-white font-semibold'>Project #3</div>
//               <div className='text-white  md:text-xl pt-2'>Basic html and css project.</div>
//               <div className='flex gap-10 pt-3'>
//                 <button className=' rounded-lg px-1 shadow-sm shadow-gray-900 hover:scale-110 transition-all duration-300 md:text-lg  bg-amber-600 hover:bg-amber-700'><p className='text-white'>View Site</p></button>
//                 <button className=' flex items-center justify-center shadow-sm shadow-gray-900 hover:scale-110 transition-all duration-300 bg-amber-600 text-white rounded-xl text-3xl  h-[40px] w-[40px] hover:bg-amber-700'><FaGithub /></button>
//               </div>
//             </div>
//         </div>
//   )
// }


import React from 'react';
import { FaGithub } from "react-icons/fa";
import img from "../assets/images/image3.png";

export default function Project3() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center mt-20 px-4 gap-6 md:gap-10'>

      {/* Image */}
      <div className='rounded-2xl shadow-2xl shadow-gray-900 w-full max-w-sm'>
        <img
          className='rounded-2xl w-full h-auto object-cover shadow-2xl shadow-gray-900'
          src={img}
          alt="Project 3"
        />
      </div>

      {/* Content */}
      <div className='flex flex-col items-start w-full max-w-md'>
        <div className='text-2xl md:text-3xl mt-4 text-white font-semibold'>
          Project #3
        </div>
        <div className='text-white text-base md:text-xl pt-2'>
          Basic HTML and CSS project.
        </div>
        <div className='flex gap-4 pt-3 flex-wrap'>
          <button className='rounded-lg px-4 py-2 text-sm md:text-base font-semibold bg-amber-600 text-white shadow-sm shadow-gray-900 hover:scale-110 transition-all duration-300 hover:bg-amber-700'>
            View Site
          </button>
          <button className='flex items-center justify-center bg-amber-600 text-white shadow-sm shadow-gray-900 hover:scale-110 transition-all duration-300 rounded-xl text-2xl md:text-3xl h-10 w-10 hover:bg-amber-700'>
            <FaGithub />
          </button>
        </div>
      </div>

    </div>
  );
}
