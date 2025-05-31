// import React from 'react'

// export default function Experience() {
//   return (
//     <div className=' flex flex-col items-center mt-15 ' >
//         <div className=' text-3xl md:text-3xl font-semibold text-white '>Experience</div>
//         <div className=' border-2 border-amber-700 md:w-[400px] bg-gray-500 rounded-lg w-[250px] p-4 mt-6 '>
//             <span className=' text-xl md:text-2xl font-semibold text-white'>Sqilco</span>
//             <p className='text-white text-lg md:text-lg mt-2'>2024 - Present</p>
//             <p className='text-amber-500  md:text-lg mt-1'>I have completed 6 month internship program in sqilco.</p>
//         </div>
//     </div>
//   )
// }


import React from 'react';

export default function Experience() {
  return (
    <div className='flex flex-col items-center mt-12 px-4'>
      <div className='text-3xl font-semibold text-white'>Experience</div>

      <div className='border-2 border-amber-700 bg-gray-500 rounded-lg p-4 mt-6 w-full max-w-sm md:max-w-md'>
        <span className='text-xl md:text-2xl font-semibold text-white'>Sqilco</span>
        <p className='text-white text-base md:text-lg mt-2'>2024 - Present</p>
        <p className='text-amber-500 text-sm md:text-base mt-1'>
          I have completed a 6-month internship program at Sqilco.
        </p>
      </div>
    </div>
  );
}
