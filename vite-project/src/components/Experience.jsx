import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
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
        <div className="flex flex-col items-center sm:mt-40 mt-12 px-4">
          <div className="text-3xl sm:text-5xl font-semibold text-white">Experience</div>

          <div className="border-2 border-amber-700 bg-gray-500 rounded-lg p-4 mt-6 w-full max-w-sm md:max-w-md">
            <span className="text-xl sm:text-3xl font-semibold text-white">
              Sqilco
            </span>
            <p className="text-white text-base sm:text-2xl mt-2">
              2025 - Present
            </p>
            <p className="text-amber-500 text-sm sm:text-xl  mt-1">
              I have completed a 6-month internship program at Sqilco.
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
