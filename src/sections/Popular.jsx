import React, { useEffect } from 'react';
import { useDarkMode } from '../components/DarkModeContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import area1 from 'E:/housing/public/assets/area1.jpg';
import area2 from 'E:/housing/public/assets/area2.jpg';
import area3 from 'E:/housing/public/assets/area3.jpg';

const Popular = () => {
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
        <div className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'} py-20`}>
            <section
                className={`${darkMode ? 'bg-gray-800' : 'bg-red-500'} lg:w-[90%] w-full h-fit m-auto bg-cover bg-center rounded-xl flex flex-col items-center lg:px-20 px-6 py-20 gap-20`}
            >
                <div id="top" className="w-full grid lg:grid-cols-3 grid-cols-1 gap-8">
                    <div>
                        <h1 data-aos="zoom-in" className="text-red-500 dark:text-white">
                            POPULAR AREAS
                        </h1>
                        <h1 data-aos="zoom-in" className="text-black text-4xl font-semibold leading-10 mt-4 dark:text-white">
                            Explore the best areas
                        </h1>
                    </div>

                    <div className="grid lg:grid-cols-3 col-span-2 grid-cols-1 gap-6">
                        <div
                            data-aos="zoom-in"
                            data-aos-delay="400"
                            style={{ backgroundImage: `url(${area1})` }}
                            className="h-[400px] bg-cover bg-center rounded-xl"
                        ></div>
                        <div
                            data-aos="zoom-in"
                            data-aos-delay="400"
                            style={{ backgroundImage: `url(${area2})` }}
                            className="h-[400px] bg-cover bg-center rounded-xl"
                        ></div>
                        <div
                            data-aos="zoom-in"
                            data-aos-delay="400"
                            style={{ backgroundImage: `url(${area3})` }}
                            className="h-[400px] bg-cover bg-center rounded-xl"
                        ></div>
                    </div>
                </div>

                <div id="bottom" className="w-full grid lg:grid-cols-3 grid-cols-1 gap-6">
                    <div data-aos="slide-up" data-aos-delay="200" className="flex justify-center items-center gap-8 w-full">
                        <h1 className="text-black text-7xl font-semibold dark:text-white">10k</h1>
                        <h1 className="text-black text-2xl dark:text-white">ACTIVE listings</h1>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Popular;
