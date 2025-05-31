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

    const toggleMenu = () => {
        close(!open)
    }

    return (
        <nav className='flex justify-end px-10 relative h-10 items-end z-10'>
            <ul className='hidden md:flex gap-10 text-amber-500 text-xl'>
                {Navmenu.map((item, key) => (
                    <Link key={key} to={item.href} smooth={true} duration={500}>{item.name}</Link>
                ))}
            </ul>

            <div className='block md:hidden text-amber-500' onClick={toggleMenu}>
                {open ? <RxCross1 size={24} /> : <FaBars size={24} />}
            </div>

            <div className={`md:hidden fixed top-0 left-0 w-full h-full bg-gray-900 transition-transform duration-300 ease-in-out ${open ? 'translate-x-0' : '-translate-x-full'}`}>
                <ul className='text-amber-600 flex flex-col items-center justify-center h-full gap-8 text-xl'>
                    {Navmenu.map((item, key) => (
                        <Link 
                            key={key} 
                            to={item.href} 
                            smooth={true} 
                            duration={500}
                            onClick={toggleMenu}
                            className="hover:text-amber-400 transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </ul>
            </div>
        </nav>
    )
}