import React, { useEffect } from 'react';
import { client } from '../components/export'; // Correct import
import { useDarkMode } from '../components/DarkModeContext'; 
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaStar } from 'react-icons/fa'; // Importing the star icon for ratings

const Clients = () => {

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 800,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }, []);

    const { darkMode } = useDarkMode(); 

    return (
        <div className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'} pb-20`}>
            <section id="testimonials" className="lg:w-[95%] w-full h-fit m-auto bg-cover bg-center rounded-xl flex flex-col justify-center items-start lg:px-20 px-6 py-20 gap-20">
                <div className='flex flex-col justify-center items-start gap-4'>
                    <h1 data-aos="zoom-in" className='text-red-500 dark:text-white'>OUR CLIENTS</h1>
                    <h1 data-aos="zoom-in" className='text-black dark:text-white text-[40px] font-semibold leading-10'>
                        What Our Clients Say
                    </h1>
                </div>

                <div id="clients-box" className='grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8 w-full'>
                    {client.map((item, index) => (
                        <div 
                            data-aos="zoom-in" 
                            data-aos-delay="200" 
                            key={index} 
                            className='bg-white dark:bg-gray-900 hover:bg-red-100 dark:hover:bg-gray-800 cursor-pointer p-12 flex flex-col justify-center items-center gap-6 rounded-xl w-full transition-all duration-300'
                        >
                            <div className='flex justify-start items-center w-full gap-4'>
                                <img 
                                    src={item.image} 
                                    alt={`${item.name}'s testimonial`} 
                                    className='w-[70px] transform hover:scale-110 transition-transform duration-300' 
                                />
                                <div className='flex flex-col justify-center items-start gap-1'>
                                    <h1 className='text-xl text-black font-semibold dark:text-white'>
                                        {item.name}
                                    </h1>
                                    <h1 className='text-slate-600 dark:text-gray-400'>
                                        {item.title}
                                    </h1>
                                </div>
                            </div>
                            <p className='text-md text-justify text-slate-600 dark:text-gray-300'>
                                {item.feedback}
                            </p>
                            <div className='flex justify-start items-start gap-1 w-full'>
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Clients;
