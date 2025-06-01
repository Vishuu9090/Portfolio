// import React from 'react'
// import { TypeAnimation } from 'react-type-animation';
// import { FaGithub } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
// import Pdf from "../assets/pdf/VISHAL.pdf"
// import { motion } from 'framer-motion';
// import img1 from "../assets/images/first image.jpg"

// export default function Journey() {
//     return (
//         <div className=' flex flex-col  items-center md:flex-row  justify-around '>

//             <motion.div
//                 initial={{ opacity: 0, y: -50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, ease: "easeOut" }}
//                 className=''>

//                 <div className='   h-[400px] w-[400px]'>

//                     <TypeAnimation className=' text-amber-600'
//                         sequence={[

//                             'Front-End developer',
//                             1000,
//                             'Webdesigner',
//                             1000,
//                             ' Casual Gamer',
//                             1000
//                         ]}
//                         wrapper="span"
//                         speed={50}
//                         style={{ fontSize: '2em', display: 'inline-block' }}
//                         repeat={Infinity}
//                     />
//                     <p className='text-4xl md:text-7xl text-amber-500'>HEY, I AM </p>
//                     <p className=' font-semibold text-3xl md:text-5xl text-gray-400'>VISHAL</p>
//                     <p className='text-lg md:text-2xl text-white pt-4'>I am a front-end developer with 6 months intersnships.</p>

//                     <div>
//                         <div className=' flex mt-5 gap-4 items-center'>
//                             <a
//                                 href={Pdf}
//                                 download="VISHAL_Resume.pdf"
//                                 className='shadow-lg shadow-gray-950 border-amber-500 border-2 p-2 rounded-lg md:text-xl hover:scale-110 transition-all duration-300 text-amber-200'
//                             >
//                                 Download CV
//                             </a>
//                             <button className=' bg-amber-700 p-2  rounded-full text-white hover:shadow-lg hover:shadow-gray-900  hover:scale-110 shadow-sm shadow-gray-900 transition-all duration-300'><FaGithub className=' text-2xl md:text-4xl' /></button>
//                             <button className=' bg-amber-700 p-2  rounded-full text-white hover:shadow-lg hover:shadow-gray-900 hover:scale-110 shadow-sm shadow-gray-900 transition-all duration-300'><FaInstagram className=' text-2xl md:text-4xl' /></button>
//                             <button className=' bg-amber-700 p-2 text-xl rounded-full text-white hover:shadow-lg hover:shadow-gray-900 hover:scale-110 shadow-sm shadow-gray-900 transition-all duration-300'><FaLinkedin className=' text-2xl md:text-4xl' /></button>
//                         </div>
//                     </div>


//                 </div>
//             </motion.div>

//             <motion.div
//                 initial={{ opacity: 0, y: -50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                  transition={{ duration: 0.8, ease: "easeOut" }}
//                 className=''>

//                 <div className=' shadow-xl rounded-2xl shadow-gray-900 h-[320px] w-[400px]'>
//                     <img className='shadow-xl rounded-2xl shadow-gray-900' src={img1} alt="" />
//                 </div>
//             </motion.div>





//         </div>
//     )
// }


import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Pdf from "../assets/pdf/VISHAL.pdf";
import { motion } from 'framer-motion';
import img1 from "../assets/images/first image.jpg";

export default function Journey() {
    return (
        <div className='flex flex-col-reverse md:flex-row items-center justify-center md:justify-around px-4 py-8 gap-8'>

            {/* Text Section */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className='text-center md:text-left max-w-md'
            >
                <div className='space-y-4'>
                    <TypeAnimation
                        className='text-amber-600 text-xl sm:text-2xl'
                        sequence={[
                            'Front-End Developer', 1000,
                            'Web Designer', 1000,
                            'Casual Gamer', 1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                    <p className='text-4xl md:text-6xl font-bold text-amber-500'>HEY, I AM</p>
                    <p className='font-semibold text-3xl md:text-5xl text-gray-400'>VISHAL</p>
                    <p className='text-base sm:text-lg md:text-xl text-white pt-2'>
                        I am a front-end developer with 6 months of internship experience.
                    </p>

                    {/* Buttons */}
                    <div className='flex flex-wrap justify-center md:justify-start gap-4 mt-5'>
                        <a
                            href={Pdf}
                            download="VISHAL_Resume.pdf"
                            className=' flex justify-center items-center border-2 border-amber-500 text-amber-200 font-semibold  px-4 py-2 shadow-md shadow-gray-900 rounded-lg text-sm md:text-base hover:scale-105 transition-all duration-300'
                        >
                            Download CV
                        </a>
                        <a href="https://github.com/" target='_blank' rel='noreferrer'>
                            <button className='bg-amber-700 p-3 rounded-full text-white shadow-md shadow-gray-900 hover:scale-110 transition duration-300'>
                                <FaGithub className='text-xl md:text-2xl' />
                            </button>
                        </a>
                        <a href="https://instagram.com/" target='_blank' rel='noreferrer'>
                            <button className='bg-amber-700 p-3 rounded-full shadow-md  shadow-gray-900 text-white hover:scale-110 transition duration-300'>
                                <FaInstagram className='text-xl md:text-2xl' />
                            </button>
                        </a>
                        <a href="https://linkedin.com/" target='_blank' rel='noreferrer'>
                            <button className='bg-amber-700 p-3 rounded-full shadow-md shadow-gray-900 text-white hover:scale-110 transition duration-300'>
                                <FaLinkedin className='text-xl md:text-2xl' />
                            </button>
                        </a>
                    </div>
                </div>
            </motion.div>

            {/* Image Section */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className='flex justify-center'
            >
                <div className='shadow-xl rounded-2xl shadow-gray-900 w-64 h-64 sm:w-80 sm:h-80 overflow-hidden'>
                    <img
                        className='w-full h-full object-cover rounded-2xl'
                        src={img1}
                        alt="Vishal"
                    />
                </div>
            </motion.div>

        </div>
    );
}
