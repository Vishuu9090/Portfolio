import React from "react";
import { FaGithub } from "react-icons/fa";
import img from "../assets/images/image3.png";
import { motion } from "framer-motion";

export default function Project3() {
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
        <div className="flex flex-col md:flex-row items-center justify-center mt-20 px-4 gap-6 md:gap-45">
          {/* Image */}
          <div className="rounded-2xl sm:w-120 sm:ml-[170px] sm:h-80 shadow-2xl shadow-gray-900 ">
            <img
              className="rounded-2xl w-full h-auto  object-cover shadow-2xl sm:w-120 sm:h-80 shadow-gray-900"
              src={img}
              alt="Project 3"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col items-start w-full max-w-md">
            <div className="text-2xl md:text-3xl mt-4 text-white font-semibold">
              Project #3
            </div>
            <div className="text-white text-base md:text-xl pt-2">
              Basic HTML and CSS project.
            </div>
            <div className="flex gap-4 pt-3 flex-wrap">
              <button className="rounded-lg px-4 py-2 text-sm md:text-base font-semibold bg-amber-600 text-white shadow-sm shadow-gray-900 hover:scale-110 transition-all duration-300 hover:bg-amber-700">
                View Site
              </button>
              <button className="flex items-center justify-center bg-amber-600 text-white shadow-sm shadow-gray-900 hover:scale-110 transition-all duration-300 rounded-xl text-2xl md:text-3xl h-10 w-10 hover:bg-amber-700">
                <FaGithub />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
