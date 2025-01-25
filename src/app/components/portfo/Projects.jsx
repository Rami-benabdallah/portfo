import React from 'react';
import Image from 'next/image';

import Star2 from '@/app/assets/icons/Star2';
import cassie2 from '@/app/assets/images/cassie2.jpeg';

export const Projects = ({ }) => {

    return (
        <div className="w-screen relative flex items-center justify-center flex-col bg-portfoRedLightBG">
            <div className='w-full bg-portfoPinkBG flex items-center justify-center gap-8 h-48'>
                <Star2 className="text-portfoGreentStar animate-rotate-always" />
                <h3 className="text-2xl text-light md:text-7xl font-extrabold">
                    MY PROJECTS
                </h3>
                <Star2 className="text-portfoGreentStar animate-rotate-always" />
            </div>
            <div className='w-full h-full bg-portfoBlueCardBG flex items-center justify-center'>
                <div className="w-full xl:w-[1200px] 2xl:w-[1500px] h-full flex flex-col items-center gap-8 px-10 pb-10 xl:px-0">
                    <div className='flex flex-col items-center gap-8'>
                        <div className='h-24 w-full border-b border-gray-950 flex items-center justify-between'>
                            <span>
                                Tnker App
                            </span>
                            <span className='font-thin'>
                                SAAS
                            </span>
                        </div>
                        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
                            <div className="w-full bg-red-400 h-[22rem] md:h-[30rem] rounded-2xl border-4 border-gray-950 overflow-hidden">
                                <Image
                                    src={cassie2}
                                    alt="Picture of the author"
                                    className="w-full h-full object-cover pointer-events-none"
                                />
                            </div>
                            <div className="w-full h-full flex flex-col items-center gap-4">
                                <h3 className='font-bold text-3xl text-portfoRedLightBG'>
                                    THE TNKER APP
                                </h3>
                                <span> * 2022 - 2023 *</span>
                                <p className='text-center'>
                                    A web application designed to streamline task management, material tracking, and workforce coordination for businesses of all sizes. Built with both workers and managers in mind, this platform provides an intuitive and efficient way to improve productivity and accountability
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-8'>
                        <div className='h-24 w-full border-b border-gray-950 flex items-center justify-between'>
                            <span>
                                Tnker App
                            </span>
                            <span className='font-thin'>
                                SAAS
                            </span>
                        </div>
                        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
                            <div className="w-full bg-red-400 h-[22rem] md:h-[30rem] rounded-2xl border-4 border-gray-950 overflow-hidden">
                                <Image
                                    src={cassie2}
                                    alt="Picture of the author"
                                    className="w-full h-full object-cover pointer-events-none"
                                />
                            </div>
                            <div className="w-full h-full flex flex-col items-center gap-4">
                                <h3 className='font-bold text-3xl text-portfoRedLightBG'>
                                    TNKER MOBILE
                                </h3>
                                <span> * 2022 - 2023 *</span>
                                <p className='text-center'>
                                    A mobile app designed to bridge the gap between customers and skilled labor professionals, such as electricians, house painters, and plumbers. It simplifies the process of finding, hiring, and communicating with trusted service providers. With features like location-based search, transparent pricing, secure in-app messaging, and reliable reviews, the app ensures a seamless experience for customers. Service providers can showcase their expertise and manage bookings efficiently, while customers enjoy hassle-free scheduling, secure payments, and access to top-quality professionals to meet their home improvement and repair needs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
