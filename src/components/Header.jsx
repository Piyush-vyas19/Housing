import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaTimes, FaBars, FaPhoneAlt, FaUserCircle } from 'react-icons/fa'; 
import logo23 from 'E:/housing/public/assets/logo23.jpg';
import { useDarkMode } from './DarkModeContext';

const Header = () => {
    const { darkMode, toggleDarkMode } = useDarkMode();  
    const [isMenuOpen, setIsMenuOpen] = useState(false); 
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const navItems = [
        { link: 'Home', path: 'home' },
        { link: 'About', path: 'about' },
        { link: 'Properties', path: 'properties' },
        { link: 'Services', path: 'services' },
        { link: 'Testimonials', path: 'testimonials' },
    ];

    return (
        <nav className={`${darkMode ? 'dark bg-black' : 'light bg-[#f3f3f3]'} flex justify-between items-center lg:px-20 px-4 py-4 sticky top-0 z-30 shadow-md`}>
            {/* Logo */}
            <div id="logo">
                <img src={logo23} alt="Logo" className="lg:w-[150px] w-[100px] dark:invert" />
            </div>
            
            {/* Desktop Navbar */}
            <ul className="lg:flex justify-center items-center gap-8 hidden">
                {navItems.map(({ link, path }) => (
                    <li key={path}>
                        <Link
                            className="text-black text-[15px] uppercase font-semibold cursor-pointer px-3 py-2 dark:text-white rounded-lg hover:bg-red-600 hover:text-white transition-colors duration-200"
                            to={path}
                            spy={true}
                            offset={-100}
                            smooth={true}
                            duration={500}
                            onClick={closeMenu} 
                        >
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Mobile Menu Icon */}
            <div className="lg:hidden flex items-center justify-center" onClick={toggleMenu}>
                <div>
                    {isMenuOpen ? <FaTimes className="text-black dark:text-white text-2xl cursor-pointer" /> : <FaBars className="text-black dark:text-white text-2xl cursor-pointer" />}
                </div>
            </div>

            {/* Mobile Navbar */}
            <div className={`${isMenuOpen ? 'flex' : 'hidden'} w-full h-fit bg-slate-800 p-4 absolute top-[80px] left-0`} onClick={closeMenu}> 
                <ul className='flex flex-col justify-center items-center gap-2 w-full'>
                    {navItems.map(({link, path}) => (
                        <Link 
                            key={path} 
                            className='text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-red-600 hover:text-black w-full text-center' 
                            to={path}
                            spy={true}
                            offset={-100}
                            smooth={true}
                            duration={500}
                            onClick={closeMenu}
                        >
                            {link}
                        </Link>
                    ))}
                </ul>
            </div>

            {/* Right Side: Contact Info, Login/Signup */}
            <div className="flex justify-center items-center lg:gap-8 gap-2">
                <div className="flex justify-center items-center lg:gap-3 gap-1">
                    <FaPhoneAlt className="text-red-600" />
                    <h1 className="lg:text-xl text-sm text-black dark:text-white font-semibold">
                        8698666997
                    </h1>
                </div>

                {/* Login/Signup buttons */}
                <div className="hidden lg:flex items-center gap-4">
                    <button className="bg-transparent border border-red-600 text-red-600 px-4 py-1 text-sm font-semibold rounded-lg hover:bg-red-600 hover:text-white transition-colors duration-300">
                        Login
                    </button>
                    <button className="bg-red-600 text-white px-4 py-1 text-sm font-semibold rounded-lg hover:bg-black transition-colors duration-300">
                        Signup
                    </button>
                </div>

                <FaUserCircle className="text-red-600 text-2xl" />
            </div>

            {/* Mobile Login/Signup */}
            {isMenuOpen && (
                <div className="lg:hidden flex flex-col items-center mt-4">
                    <button className="bg-transparent border border-red-600 text-red-600 px-4 py-1 text-sm font-semibold rounded-lg hover:bg-red-600 hover:text-white transition-colors duration-300 mb-2">
                        Login
                    </button>
                    <button className="bg-red-600 text-white px-4 py-1 text-sm font-semibold rounded-lg hover:bg-black transition-colors duration-300">
                        Signup
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Header;
