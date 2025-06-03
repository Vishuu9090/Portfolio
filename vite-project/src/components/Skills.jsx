import React from "react";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa6";
import { AiOutlineJavaScript } from "react-icons/ai";
import { Element } from "react-scroll";
import { motion } from "framer-motion";

export default function Skills() {
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
        <Element name="Skills">
          <div className="flex justify-center mt-20 sm:mt-30 px-4">
            <div className="text-center max-w-md w-full">
              {/* Title */}
              <div className="text-white text-3xl sm:text-3xl font-semibold">
                Skills
              </div>

              {/* Description */}
              <div className="text-white text-base sm:text-lg mt-2">
                I worked on various frontend projects. Check them
                <a className="underline pl-1 text-amber-400" href="#">
                  here.
                </a>
              </div>

              {/* Card */}
              <div className="mt-6 rounded-lg border-amber-600 bg-gray-800 border-2 px-4 py-5 w-full sm:w-[300px] mx-auto">
                <div className="text-white text-xl font-bold text-center mb-4">
                  Frontend
                </div>

                {/* Row 1 */}
                <div className="flex justify-around mb-4">
                  <div className="flex items-center text-orange-600 text-lg">
                    <FaHtml5 />
                    <span className="text-amber-400 pl-2">HTML</span>
                  </div>
                  <div className="flex items-center text-blue-600 text-lg">
                    <FaCss3Alt />
                    <span className="text-amber-400 pl-2">CSS</span>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="flex justify-around">
                  <div className="flex items-center text-amber-300 text-lg">
                    <AiOutlineJavaScript />
                    <span className="text-amber-400 pl-2">JavaScript</span>
                  </div>
                  <div className="flex items-center text-blue-600 text-lg">
                    <FaReact />
                    <span className="text-amber-400 pl-2">React</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Element>
      </motion.div>
    </>
  );
}
