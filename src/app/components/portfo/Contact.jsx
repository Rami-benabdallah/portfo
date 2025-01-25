import React from 'react';

import Jigsaw from '@/app/assets/icons/Jigsaw';
import { PortfoLetter } from '../afterLetter/PortfoLetter';
import PortfoStar from '@/app/assets/icons/portfoStar';
import PortfoPhone from '@/app/assets/icons/portfoPhone';
import PortfoMail from '@/app/assets/icons/portfoMail';
import PortfoLinkedIn from '@/app/assets/icons/portfoLinkedIn';

export const Contact = ({ }) => {

    return (
        <div className="w-screen relative flex items-center justify-center flex-col bg-portfoYellowBG">
            <div className='w-full h-full flex items-center justify-center flex-col overflow-hidden'>
                <div className='flex bg-light'>
                    <Jigsaw className="h-32" />
                    <Jigsaw className="h-32" />
                    <Jigsaw className="h-32" />
                    <Jigsaw className="h-32" />
                    <Jigsaw className="h-32" />
                    <Jigsaw className="h-32" />
                    <Jigsaw className="h-32" />
                    <Jigsaw className="h-32" />
                    <Jigsaw className="h-32" />
                    <Jigsaw className="h-32" />
                    <Jigsaw className="h-32" />
                    <Jigsaw className="h-32" />
                    <Jigsaw className="h-32" />
                    <Jigsaw className="h-32" />
                    <Jigsaw className="h-32" />
                    <Jigsaw className="h-32" />
                    <Jigsaw className="h-32" />
                    <Jigsaw className="h-32" />
                    <Jigsaw className="h-32" />
                    <Jigsaw className="h-32" />
                </div>
                <div className="w-full xl:w-[1200px] 2xl:w-[1500px] h-[calc(100vh-4rem)] flex flex-col items-center gap-8 px-10 pb-10 xl:px-0">
                    {/* Card */}
                    <div className="w-3/5 md:w-2/5 lg:w-3/5 relative mt-56">
                        <div style={{ animation: 'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both' }}>
                            <div className="w-full bg-dark duration-200 rounded-full">
                                <div className="bg-portfoRedLightBG px-20 py-32 md:px-28 md:py-40 lg:px-16 lg:py-56 2xl:px-28 2xl:py-72 rounded-full flex items-center border-slate-900 border-2 duration-200 -translate-x-1 -translate-y-1 w-full">
                                </div>
                            </div>
                        </div>

                        {/* Positioned PortfoLetter */}
                        <div className="absolute right-[17rem] bottom-[17rem] md:bottom-[21rem] md:left-[0rem] lg:left-[2rem] lg:bottom-[33rem] xl:bottom-[32rem] xl:left-[5rem] 2xl:bottom-[45rem] 2xl:left-0 translate-x-10 translate-y-5">
                            <PortfoLetter letter="THANK" textColor="text-portfoBlueCardBG" />
                        </div>

                        {/* Positioned PortfoLetter */}
                        <div className="absolute right-[16rem] bottom-[10rem] md:bottom-[13rem] lg:left-[2rem] lg:bottom-[17rem] 2xl:bottom-[24rem] 2xl:left-0 translate-x-10 translate-y-5">
                            <PortfoLetter letter="YOU" textColor="text-portfoBlueCardBG" />
                        </div>

                        {/* Positioned STARS */}
                        <span className="absolute bottom-[16rem] right-[9rem] md:bottom-[14rem] md:right-[19rem] lg:bottom-0 lg:right-[24rem] xl:bottom-[25rem] xl:right-[35rem] 2xl:bottom-[40rem] 2xl:right-[35rem] animate-rotate-blink h-12 w-12 lg:h-24 lg:w-24">
                            <PortfoStar />
                        </span>
                        <span className="absolute bottom-[12rem] right-[15rem] md:bottom-[20rem] md:right-[12rem] lg:bottom-[30rem] lg:right-[30rem] xl:bottom-[14rem] xl:right-[40rem] 2xl:bottom-[30rem] 2xl:right-[52rem] animate-rotate-blink h-12 w-12 lg:h-24 lg:w-24">
                            <PortfoStar />
                        </span>
                        <span className="absolute right-[0rem] bottom-[10rem] md:bottom-[0rem] md:right-[14rem] lg:bottom-[10rem] lg:right-[35rem] xl:bottom-0 xl:right-[32rem] 2xl:bottom-[10rem] 2xl:right-[50rem] animate-rotate-blink h-12 w-12 lg:h-24 lg:w-24">
                            <PortfoStar />
                        </span>
                        <span className="absolute bottom-[2rem] right-[13rem] md:bottom-[2rem] md:right-[2rem] animate-rotate-blink h-12 w-12 lg:h-24 lg:w-24">
                            <PortfoStar />
                        </span>
                        <span className="absolute bottom-0 right-[0rem] md:bottom-[16rem] md:right-[0rem] lg:bottom-[27rem] lg:right-[6rem] xl:bottom-[29rem] xl:right-[6rem] 2xl:bottom-[34rem] 2xl:right-[6rem] animate-rotate-blink h-12 w-12 lg:h-24 lg:w-24">
                            <PortfoStar />
                        </span>
                    </div>
                </div>
                <div className='w-screen min-h-16 p-4 bg-portfoOrangeCardBG border-t-4 border-gray-950 flex flex-col md:flex-row items-center justify-between'>
                    <div className='w-full flex flex-col lg:flex-row items-center lg:justify-between gap-4'>
                        <div className="flex gap-4 items-center">
                            <div className="bg-gray-950 rounded-full h-8 w-8 flex items-center justify-center">
                                <PortfoPhone className="h-5 w-5 text-light" />
                            </div>
                            <span>+49 123456789</span>
                        </div>
                        <div className="flex gap-4 items-center">
                            <div className="bg-gray-950 rounded-full h-8 w-8 flex items-center justify-center">
                                <PortfoMail className="h-4 w-4 text-light" />
                            </div>
                            <span>ramibenabdallah40@gmail.com</span>
                        </div>
                        <div className="flex gap-4 items-center">
                            <div className="bg-gray-950 rounded-full h-8 w-8 flex items-center justify-center">
                                <PortfoLinkedIn className="h-4 w-4 text-light" />
                            </div>
                            <span>linkedin.com/in/rami-ben-abdallah/</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
