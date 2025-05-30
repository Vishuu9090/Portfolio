import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-scroll';


export default function Navbar() {

    const Navmenu = [
        { href: "Skills", name: "About" },
        { href: "Portfolio", name: "Portfolio" },
        { href: "About", name: "Contact" },


    ]

    const [open, close] = useState(false)

    const vishu = () => {
        close(!open)
    }


    return (
        <nav className='flex justify-end px-10  relative h-10 items-end z-10'>
            {/* <div className='font-semibold text-2xl text-amber-500'>
                Vishal
            </div> */}



            <ul className=' hidden md:flex gap-10 text-amber-500 text-xl'>
                {
                    Navmenu.map((item, key) => (
                        <Link key={key} to={item.href} smooth={true} duration={500}>{item.name}</Link>

                    ))
                }

            </ul>

            <div className=' block  md:hidden  ' onClick={vishu} >
                {open ? <RxCross1 /> : <FaBars />}
            </div>

            {
                open && (
                    <ul className=' md:hidden text-amber-600    absolute top-12 flex items-center flex-col bg-gray-900 w-full left-0 gap-3      '>
                        {
                            Navmenu.map((item, key) => (
                        <Link key={key} to={item.href} smooth={true} duration={500}>{item.name}</Link>
                            ))
                        }
                    </ul>
                )
            }





        </nav>

    )
}







