import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Element } from "react-scroll";
import {motion} from "framer-motion";

export default function About() {
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
        <Element name="About">
          <div className="px-4 md:px-10 sm:mt-20 py-10">
            {/* About Section */}
            <div className="flex flex-col items-center">
              <h2 className="text-3xl md:text-4xl text-white font-semibold">
                About <span className="text-amber-600">Me</span>
              </h2>

              <div className="flex flex-col md:flex-row items-center md:items-start gap-10 mt-6">
                {/* Description */}
                <div className="text-white text-base md:text-lg max-w-md">
                  <p>
                    Aspiring software developer with hands-on experience from a
                    6-month internship at Sqilco. Passionate about coding,
                    problem-solving, and building innovative solutions.
                    Currently in BCA, continuously learning and exploring new
                    technologies to shape the future of software development.
                  </p>
                  <div className="bg-gray-500 rounded-xl mt-6 p-4 w-fit">
                    <span className="text-4xl text-white font-bold flex">
                      3<span className="text-amber-600">+</span>
                    </span>
                    <p className="text-amber-600 font-semibold">Projects</p>
                  </div>
                </div>

                {/* Contact Form */}
                <form className="bg-gray-800 border-2 sm:h-[300px]  sm:w-[350px] border-amber-600 rounded-lg p-4 flex flex-col gap-3 w-full max-w-md">
                  <h3 className="text-2xl text-white font-semibold text-center">
                    Let's connect!
                  </h3>
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
            <div className="flex flex-col md:flex-row justify-between items-center mt-25 px-4 md:px-20 gap-4">
              <div>
                <p className="text-white text-xl md:text-2xl font-semibold">
                  VISHAL
                </p>
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
              <p className="text-amber-600 text-lg md:text-xl font-semibold">
                © 2025 VISHAL
              </p>
            </div>
          </div>
        </Element>
      </motion.div>
    </>
  );
}
