import React from "react";
import { FaGithub } from "react-icons/fa";
import { Element } from "react-scroll";
import img from "../assets/images/image1.png";
import { motion } from "framer-motion";

export default function Portfolio() {
  // Animate when in view using framer-motion's whileInView and viewport props
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
        <Element name="Portfolio">
          <div className="sm:mt-40 mt-20 px-4">
            <div className="flex flex-col md:flex-row items-center justify-center sm:gap-40 gap-10">
              {/* Left: Title + Image */}
              <div className="flex flex-col gap-7 items-center">
                <h1 className="sm:text-5xl text-3xl sm:ml-[-300px] text-white font-semibold text-center md:text-left">
                  Portfolio
                </h1>
                <img
                  className="w-full  sm:w-120 sm:h-80 rounded-2xl shadow-xl shadow-gray-900 object-cover"
                  src={img}
                  alt="Project Screenshot"
                />
              </div>

              {/* Right: Description + Buttons */}
              <div className="flex flex-col justify-start  max-w-md">
                <div className="text-2xl md:text-3xl text-white font-semibold mb-2">
                  Project #1
                </div>
                <div className="text-white text-base md:text-lg mb-4">
                  UI for frontend development using React.
                </div>

                <div className="flex gap-4 flex-wrap">
                  <button className="bg-amber-600  text-white font-semibold px-4 py-2 rounded-lg shadow-sm shadow-gray-900 hover:scale-110 hover:bg-amber-700 transition-all duration-300 text-sm md:text-base">
                    View Site
                  </button>
                  <button className="flex items-center justify-center bg-amber-600  text-white rounded-xl text-2xl md:text-3xl h-10 w-10 shadow-sm shadow-gray-900 hover:scale-110 hover:bg-amber-700 transition-all duration-300">
                    <FaGithub />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Element>
      </motion.div>
    </>
  );
}
