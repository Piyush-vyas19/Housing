import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useDarkMode } from '../components/DarkModeContext';
import heroimg from 'E:/housing/public/assets/hero1.webp';
import { indianCities } from './Indiancities';

const Hero = () => {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 800,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }, []);

    const { darkMode } = useDarkMode(); 
    const [locationInput, setLocationInput] = useState(''); 
    const [suggestions, setSuggestions] = useState([]); 
    const [showSuggestions, setShowSuggestions] = useState(false); 

    const handleInputChange = (e) => {
        const input = e.target.value;
        setLocationInput(input);

        if (input.length > 0) {
            const filteredSuggestions = indianCities.filter(({ city }) =>
                city.toLowerCase().startsWith(input.toLowerCase()) 
            );
            setSuggestions(filteredSuggestions);
            setShowSuggestions(true);
        } else {
            setShowSuggestions(false);
        }
    };

    const handleSuggestionClick = (city) => {
        setLocationInput(city); 
        setShowSuggestions(false); 
    };

    return (
        <>
            <div className={`${darkMode ? 'dark bg-black' : 'light bg-white'}`}>
                <section id='hero' className='w-[95%] h-[600px] m-auto mt-24 bg-cover bg-center rounded-xl flex justify-center flex-col items-start lg:px-28 px-10 gap-7 z-20 ' style={{ backgroundImage: `url(${heroimg})` }}>
                    <h1 data-aos="zoom-in" className='text-6xl text-white font-semibold lg:pr-[500px] pr-[0] lg:leading-[70px] leading-[60px]'>
                        Find your home in just one click
                    </h1>
                    <p data-aos="zoom-in" className='text-white text-xl lg:pr-[500px] pr-0'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, delectus velit quasi temporibus vero rerum, nobis officiis, voluptatem error repellendus quisquam. Totam exercitationem similique laboriosam veritatis ipsum provident deserunt excepturi.
                    </p>
                </section>
            </div>

            {/* Search Section */}
            <div className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'} z-10`}>
                <div data-aos="zoom-in" id="form" className={`${darkMode ? 'dark bg-grey-800' : 'light bg-white'} lg:w-[70%] w-full m-auto grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-6 p-8 rounded-xl -mt-14`}>
                    <div className='w-full'>
                        <h1 className='text-black font-semibold'>LOCATION</h1>
                        <input
                            type="text"
                            placeholder='Enter an address or state'
                            className='bg-white p-2 w-full mt-2 border-b-[1px] border-[#c9c7c1]'
                            value={locationInput}
                            onChange={handleInputChange}
                            onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
                            onFocus={() => setShowSuggestions(true)}
                        />
                        {showSuggestions && suggestions.length > 0 && (
                            <ul className='absolute bg-white border border-gray-300 rounded-lg w-full mt-1 max-h-48 overflow-y-auto'>
                                {suggestions.map((suggestion, index) => (
                                    <li
                                    key={index}
                                    className="cursor-pointer hover:bg-gray-200 p-2"
                                    onMouseDown={() => handleSuggestionClick(suggestion.city)} // Use onMouseDown instead of onClick
                                >
                                    {suggestion.city}, {suggestion.state}
                                </li>
                                
                                ))}
                            </ul>
                        )}
                    </div>

                    <div className='w-full'>
                        <h1 className='text-black font-semibold dark:text white'>TYPE</h1>
                        <select className='bg-white p-2 border-b-[1px] w-full mt-2 border-[#c9c7c1] text-grey-500 text-md'>
                            <option value="" disabled>Select property</option>
                            <option value="rentals">Rentals</option>
                            <option value="selling">Selling</option>
                            <option value="buying">Buying</option>
                        </select>
                    </div>

                    <div className='w-full'>
                        <h1 className='text-black font-semibold dark:text white'>BHK</h1>
                        <select className='bg-white p-2 border-b-[1px] w-full mt-2 border-[#c9c7c1] text-grey-500 text-md'>
                            <option value="" disabled>Select BHK</option>
                            <option value="1BHK">1BHK</option>
                            <option value="2BHK">2BHK</option>
                            <option value="3BHK">3BHK</option>
                            <option value="Duplex">Duplex</option>
                            <option value="Condos">Condos</option>
                            <option value="Villa">Villa</option>
                        </select>
                    </div>

                    <div className='w-full'>
                        <button className='bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-white dark:hover:text-black text-lg p-4 w-full text-white font-semibold rounded-xl cursor-pointer transform hover:scale-110 transition-transform duration-300'>
                            SUBMIT
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
