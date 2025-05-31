// import React from 'react'
// import { FaGithub } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
// import { Link, Element } from 'react-scroll';

// export default function About() {
//     return (

//         <Element name="About">
//         <div>

//             <div className=' flex flex-col items-center mt-10 px-10 '>

//                 <div className=' text-3xl md:ml-[-620px] md:text-4xl text-white'>About <span className=' text-3xl md:text-4xl text-amber-600'>Me</span></div>
//                 <div className='flex flex-col md:gap-20 md:flex-row'>
//                     <div>
//                         <div className=' text-white text-lg md:text-lg w-[350px] mt-3 ml-5'>Aspiring software developer with hands-on experience from a 6-month internship
//                             at Sqilco. Passionate about coding, problem-solving, and building innovative solutions. Currently in BCA,
//                             continuously learning and exploring new technologies to shape the future of software development.</div>
//                         <div className=' bg-gray-500 w-17 rounded-xl h-18 p-1 mt-6 ml-3'>
//                             <span className='text-4xl text-white font-bold flex'>3<p className=' text-amber-600'>+</p></span>
//                             <p className=' text-amber-600 font-semibold'>Projects</p>
//                         </div>
//                     </div>

//                     <div className=' flex border-2 bg-gray-800 rounded-lg border-amber-600 h-[290px] w-[350px] flex-col items-center mt-5 gap-2'>
//                         <p className=' text-2xl text-white mt-5 font-semibold'>Let's connect!</p>
//                         <input className='border-2 bg-gray-400 p-1 border-gray-800 rounded-lg md:w-[300px] shadow-xl ' type="text" placeholder='Your Name...' required />
//                         <input className='border-2 bg-gray-400 p-1 border-gray-800 md:w-[300px] rounded-lg shadow-xl ' type="email" name="" id="" placeholder='Your Email...' required />
//                         <textarea className='bg-gray-400 rounded-lg pl-1 w-[190px] md:w-[300px]' name="" id="" placeholder='Your Message '></textarea>
//                         <button className='border-2 bg-amber-600 p-1 border-amber-600 w-47 md:w-[300px] hover:scale-103 hover:shadow-lg mb-5 hover:shadow-gray-900 transition-all duration-300 text-white rounded-lg '>Send Message</button>
//                     </div>
//                 </div>
//             </div>


//             <div className='flex justify-around py-20'>

//                 <div>
//                     <p className=' text-white text-xl md:text-2xl font-semibold mb-3'>VISHAL</p>

//                     <div className=' flex h-20 w-30  items-start justify-start gap-3'>
//                         <button className=' flex items-center justify-center shadow-sm shadow-gray-900 bg-amber-600 text-white rounded-xl text-3xl  h-[40px] w-[40px] hover:scale-110 transition-all duration-300 hover:bg-amber-700'><FaGithub /></button>
//                         <button className=' flex items-center justify-center shadow-sm shadow-gray-900 bg-amber-600 text-white rounded-xl text-3xl  h-[40px] w-[40px] hover:scale-110 transition-all duration-300 hover:bg-amber-700'><FaLinkedin /></button>
//                     </div>
//                 </div>
//                 <p className=' text-amber-600 text-xl md:text-2xl font-semibold'>@2025 VISHAL</p>
//             </div>

//         </div>
    
// </Element>

//     )
// }


import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Element } from 'react-scroll';

export default function About() {
  return (
    <Element name="About">
      <div className="px-4 md:px-10 py-10">
        {/* About Section */}
        <div className="flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl text-white font-semibold">
            About <span className="text-amber-600">Me</span>
          </h2>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 mt-6">
            {/* Description */}
            <div className="text-white text-base md:text-lg max-w-md">
              <p>
                Aspiring software developer with hands-on experience from a 6-month internship
                at Sqilco. Passionate about coding, problem-solving, and building innovative solutions.
                Currently in BCA, continuously learning and exploring new technologies to shape the
                future of software development.
              </p>
              <div className="bg-gray-500 rounded-xl mt-6 p-4 w-fit">
                <span className="text-4xl text-white font-bold flex">
                  3<span className="text-amber-600">+</span>
                </span>
                <p className="text-amber-600 font-semibold">Projects</p>
              </div>
            </div>

            {/* Contact Form */}
            <form className="bg-gray-800 border-2 border-amber-600 rounded-lg p-4 flex flex-col gap-3 w-full max-w-md">
              <h3 className="text-2xl text-white font-semibold text-center">Let's connect!</h3>
              <input
                className="bg-gray-400 border-2 border-gray-800 rounded-lg p-2 shadow-md"
                type="text"
                placeholder="Your Name..."
                required
              />
              <input
                className="bg-gray-400 border-2 border-gray-800 rounded-lg p-2 shadow-md"
                type="email"
                placeholder="Your Email..."
                required
              />
              <textarea
                className="bg-gray-400 border-2 border-gray-800 rounded-lg p-2 shadow-md resize-none"
                placeholder="Your Message"
                rows={4}
              ></textarea>
              <button
                type="submit"
                className="bg-amber-600 hover:bg-amber-700 text-white rounded-lg p-2 hover:scale-105 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-16 px-4 md:px-20 gap-4">
          <div>
            <p className="text-white text-xl md:text-2xl font-semibold">VISHAL</p>
            <div className="flex gap-4 mt-2">
              <a href="#" aria-label="GitHub">
                <button className="flex items-center justify-center bg-amber-600 text-white text-2xl h-10 w-10 rounded-xl shadow-md hover:scale-110 hover:bg-amber-700 transition-all duration-300">
                  <FaGithub />
                </button>
              </a>
              <a href="#" aria-label="LinkedIn">
                <button className="flex items-center justify-center bg-amber-600 text-white text-2xl h-10 w-10 rounded-xl shadow-md hover:scale-110 hover:bg-amber-700 transition-all duration-300">
                  <FaLinkedin />
                </button>
              </a>
            </div>
          </div>
          <p className="text-amber-600 text-lg md:text-xl font-semibold">© 2025 VISHAL</p>
        </div>
      </div>
    </Element>
  );
}

