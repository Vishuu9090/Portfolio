// import React from 'react'
// import { FaHtml5 } from "react-icons/fa6";
// import { FaCss3Alt } from "react-icons/fa6";
// import { AiOutlineJavaScript } from "react-icons/ai";
// import { FaReact } from "react-icons/fa6";

// export default function Tech() {
//   return (
//    <div className='flex justify-center mt-20 gap-7'>
//     <p className='text-white  text-2xl md:text-3xl'>My Tech Stack</p>
//     <div className='text-orange-600 text-3xl md:text-6xl'><FaHtml5/></div>
//     <div className='text-blue-700  text-3xl md:text-6xl'><FaCss3Alt/></div>
//     <div className='text-amber-300 text-3xl md:text-6xl'><AiOutlineJavaScript/></div>
//     <div className='text-blue-700  text-3xl md:text-6xl'><FaReact/></div>
//    </div>
//   )
// }

import React from "react";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa6";
import { AiOutlineJavaScript } from "react-icons/ai";
import { motion } from "framer-motion";

export default function Tech() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          scale: { type: "spring", bounce: 0.2 },
        }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="flex flex-col items-center mt-16 px-4">
          <p className="text-white text-2xl sm:text-3xl font-semibold mb-6 text-center">
            My Tech Stack
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <div className="text-orange-600 text-4xl sm:text-6xl">
              <FaHtml5 />
            </div>
            <div className="text-blue-700 text-4xl sm:text-6xl">
              <FaCss3Alt />
            </div>
            <div className="text-amber-300 text-4xl sm:text-6xl">
              <AiOutlineJavaScript />
            </div>
            <div className="text-blue-700 text-4xl sm:text-6xl">
              <FaReact />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
