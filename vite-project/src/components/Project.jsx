import React from "react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import img from "../assets/images/image2.png";

export default function Project() {
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
        <div className="flex flex-col-reverse md:flex-row md:items-center justify-center px-4 py-12 gap-6">
          {/* Text Section */}
          <div className="max-w-md w-full">
            <div className="text-2xl md:text-3xl text-white font-semibold mb-2">
              Project #2
            </div>
            <div className="text-white text-base md:text-lg mb-4">
              Amazon clone.
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="rounded-lg px-4 py-2 text-sm md:text-base font-semibold shadow-sm shadow-gray-900 bg-amber-600 hover:scale-110 transition-all duration-300 hover:bg-amber-700 text-white">
                View Site
              </button>
              <button className="flex items-center justify-center shadow-sm shadow-gray-900 bg-amber-600 text-white hover:scale-110 transition-all duration-300 rounded-xl text-2xl md:text-3xl h-10 w-10 hover:bg-amber-700">
                <FaGithub />
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="shadow-xl shadow-gray-900 sm:w-120 sm:mr-[-150px] sm:h-80 rounded-2xl ">
            <img
              className="rounded-2xl w-full h-auto sm:w-120 sm:h-80 object-cover"
              src={img}
              alt="Amazon Clone Project"
            />
          </div>
        </div>
      </motion.div>
    </>
  );
}
