import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Pdf from "../assets/pdf/VISHAL2.pdf"
import { motion } from 'framer-motion';


export default function Journey() {
    return (
        <div className=' flex flex-col  items-center md:flex-row  justify-around '>

            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className=''>

                <div className='   h-[400px] w-[400px]'>

                    <TypeAnimation className=' text-amber-600'
                        sequence={[

                            'Front-End developer',
                            1000,
                            'Webdesigner',
                            1000,
                            ' Casual Gamer',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '2em', display: 'inline-block' }}
                        repeat={Infinity}
                    />
                    <p className='text-4xl md:text-7xl text-amber-500'>HEY, I AM </p>
                    <p className=' font-semibold text-3xl md:text-5xl text-gray-400'>VISHAL</p>
                    <p className='text-lg md:text-2xl text-white pt-4'>I am a front-end developer with 6 months intersnships.</p>

                    <div>
                        <div className=' flex mt-5 gap-4 items-center'>
                            <a
                                href={Pdf}
                                download="VISHALResume.pdf"
                                className='shadow-lg shadow-gray-950 border-amber-500 border-2 p-2 rounded-lg md:text-xl hover:scale-110 transition-all duration-300 text-amber-200'
                            >
                                Download CV
                            </a>
                            <button className=' bg-amber-700 p-2  rounded-full text-white hover:shadow-lg hover:shadow-gray-900  hover:scale-110  transition-all duration-300'><FaGithub className=' text-2xl md:text-4xl' /></button>
                            <button className=' bg-amber-700 p-2  rounded-full text-white hover:shadow-lg hover:shadow-gray-900 hover:scale-110  transition-all duration-300'><FaInstagram className=' text-2xl md:text-4xl' /></button>
                            <button className=' bg-amber-700 p-2 text-xl rounded-full text-white hover:shadow-lg hover:shadow-gray-900 hover:scale-110 transition-all duration-300'><FaLinkedin className=' text-2xl md:text-4xl' /></button>
                        </div>
                    </div>


                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, ease: "easeOut" }}
                className=''>

                <div className=' shadow-xl rounded-2xl shadow-gray-900 h-[320px] w-[400px]'>
                    <img className='shadow-xl rounded-2xl shadow-gray-900' src="\src\assets\images\first image.jpg" alt="" />
                </div>
            </motion.div>





        </div>
    )
}
