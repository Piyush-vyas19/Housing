import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'//used to bring the animation of the sliding animation
import { useDarkMode } from '../components/DarkModeContext'
import heroimg from 'E:/housing/public/assets/hero1.webp'

const Hero = () => {
    useEffect(() => {//function to set the time of the animation and the ease effect of the animation and remember to always give delay time of the any animation 
        AOS.init({
            offset: 200,//offset allows us to retrieve the current position of an element (specifically its border box, which excludes margins) relative to the document.
            duration: 800,
            easing: 'ease-in-sine',
            delay: 100,
        });

    }, [])//the big bracket is used because we don't want to keep this animation running in loop 

    const { darkMode, toggleDarkMode } = useDarkMode();//to import and use the dark mode 

    return (//using react fragmentation
        <>
            <div className={`${darkMode ? 'dark bg-black' : 'light bg-white'}`}>
                <section id='hero' className='w-[95%] h-[600px] m-auto mt-24 bg-cover bg-center rounded-xl flex justify-center flex-col items-start lg:px-28 px-10 gap-7 z-20 ' style={{ backgroundImage: `url(${heroimg})` }}>
                    <h1 data-aos="zoom-in " className='text-6xl text-white font-semibold lg:pr-[500px] pr-[0] lg:leading-[70px] leading-[60px]'>find your home in just one click</h1>
                    <p data-aos="zoom-in" className='text-white text-xl lg:pr-[500px] pr-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, delectus velit quasi temporibus vero rerum, nobis officiis, voluptatem error repellendus quisquam. Totam exercitationem similique laboriosam veritatis ipsum provident deserunt excepturi.</p>
                </section>

            </div>

            {/*ab start hoga jalva babes*/}

            <div className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'} z-10`}>
                <div data-aos="zoom-in" id="form" className={`${darkMode ? 'dark bg-grey-800 ' : 'light bg-white '} lg:w-[70%] w-full m-auto grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-6 p-8 rounded-xl -mt-14`}>
                    <div className='w-full'>
                        <h1 className='text-black font-semibold '>LOCATION</h1>
                        <input type="text" placeholder='enter an address or state' className='bg-white p-2 w-full mt-2 border-b-[1px] border-[#c9c7c1]'></input>

                    </div>
                    <div className='w-full'>
                        <h1 className='text-black font-semibold dark:text white'>TYPE</h1>
                        <select name="selectOption" id="selectOption" className='bg-white p-2 border-b-[1px] w-full mt-2 border-[#c9c7c1] text-grey-500 text-md'>
                            <option value="" disabled selected>select property</option>
                            <option value="option1">rentals</option>
                            <option value="option2">selling</option>
                            <option value="option3">buying</option>
                        </select>


                    </div>
                    <div className='w-full'>
                        <h1 className='text-black font-semibold dark:text white'>BHK</h1>
                        <select name="selectOption" id="selectOption" className='bg-white p-2 border-b-[1px] w-full mt-2 border-[#c9c7c1] text-grey-500 text-md'>
                            <option value="" disabled selected>select property</option>
                            <option value="option1">1BHK</option>
                            <option value="option2">2BHK</option>
                            <option value="option3">3BHK</option>
                            <option value="option3">Duplex</option>
                            <option value="option3">condos</option>
                            <option value="option3">Villa</option>
                        </select>


                    </div>
                    <div className='w-full'>
                        <button className='bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-white dark:hover:text-black text-lg p-4 w-full text-white font-semibold rounded-xl cursor-pointer transform hover:scale-110 transition-transform duration-300'>SUBMIT</button>


                    </div>





                </div>


            </div>



        </>
    )
}

export default Hero
