import React, { useState } from 'react';

import { mysteryQuest } from '@/app/layout';

import PortfoBadge from '@/app/assets/icons/portfoBadge';
import PortoBoucole from '@/app/assets/icons/portfoBoucole';
import PortfoEarth from '@/app/assets/icons/portfoEarth';
import PortfoLamp from '@/app/assets/icons/portfoLamp';
import PortfoLoop from '@/app/assets/icons/portfoLoop';
import PortfoMouse from '@/app/assets/icons/portfoMouse';
import PortfoPaperPlane from '@/app/assets/icons/portfoPaperPlane';
import PortoSun from '@/app/assets/icons/portoSun';

const tableOfContents = [
    {
        id: 1,
        title: 'ABOUT ME',
    },
    {
        id: 2,
        title: 'TECHNOLOGIES',
    },
    {
        id: 3,
        title: 'PROJECTS',
    },
    {
        id: 4,
        title: 'SERVICES',
    },
    {
        id: 5,
        title: 'CONTACT',
    }
]


export const TableOfContents = ({ }) => {
      const [rotate, setRotate] = useState(false);
    
      const handleHover = () => {
        setRotate(false);  // Reset animation state
        setTimeout(() => setRotate(true), 10);  // Trigger reflow and restart animation
      };

      const textStyle = {
        textShadow: '2px 2px 0px gray, -2px -2px 0px gray, 2px -2px 0px gray, -2px 2px 0px gray',
      };

    return (
        <div className="h-screen w-screen relative flex items-center justify-center bg-portfoBlueBG">
            <div className="w-full xl:w-[1200px] 2xl:w-[1500px] h-full flex justify-center flex-col lg:flex-row">
                <div className={`${mysteryQuest.className} lg:flex-1`}>
                    <div className="flex flex-col items-center justify-center md:mt-20 lg:mt-[6rem] 2xl:mt-48">
                        <span className="text-[4rem] md:text-[4rem] lg:text-[6rem] xl:text-[7rem] 2xl:text-[13rem] z-20">
                            Table of
                        </span>
                        <span className="text-[4rem] md:text-[4rem] lg:text-[6rem] xl:text-[7rem] 2xl:text-[13rem] z-20">
                            contents
                        </span>
                        <div className="h-full w-full relative">
                            <div onMouseEnter={handleHover}
                                className={`absolute top-[30rem] left-0 md:top-[18rem] md:left-0 lg:top-10 lg:left-10 cursor-pointer rounded-full px-12 py-12 bg-portfoDirtyYellowWhite flex items-center justify-center ${rotate ? "animate-rotate-15" : ""
                                    }`}>
                                <PortoBoucole />
                            </div>
                            <div className="absolute top-[-8rem] left-[10rem] md:top-[-10rem] md:left-[30rem] lg:top-32 lg:left-80 2xl:top-48 2xl:left-80 z-1 z-10">
                                <PortoSun />
                            </div>
                            {/* Positioned PortfoLetter */}
                            <div className="rounded-full w-4 px-4 py-4 bg-portfoGreenBG border border-gray-950 absolute top-[10rem] left-[70%] md:top-[26rem] md:left-[70%] lg:top-32 lg:left-[55%] xl:top-32 xl:left-[45%]" />
                            <div className="rounded-full w-2 px-2 py-2 bg-portfoDirtyWhiteText border border-gray-950 absolute md:top-[4rem] md:left-[15%] lg:top-[14rem] lg:left-[45%] xl:top-[14rem] xl:left-[35%] 2xl:top-48 2xl:left-[35%]" />
                            <div className="rounded-full w-2 px-2 py-2 bg-portfoGreentBGsmall border border-gray-950 absolute top-72 left-[10%] md:top-48 md:left-[7%] lg:top-72 lg:left-[10%]" />
                            <div className="rounded-full w-3 px-3 py-3 bg-portfoRedBG border border-gray-950 absolute top-[22rem] left-[25%] md:top-[23rem] md:left-[53%] lg:top-[18rem] lg:left-[25%] 2xl:top-[22rem] 2xl:left-[25%]" />
                        </div>

                    </div>
                </div>
                <div className="flex lg:flex-1 h-[calc(100vh-6rem)] items-center justify-center flex-col lg:mt-0">
                    <div className="grid gap-4 md:gap-8 grid-cols-2 md:grid-cols-2 lg:grid-cols-1">
                        {tableOfContents.map((content, index) => (
                            <div className="relative cursor-pointer" style={{ animation: 'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both' }} key={index}>
                                <div className="w-full bg-dark duration-200 rounded-full">
                                    <div className={`px-2 py-2 rounded-full flex items-center text-white text-sm md:text-lg xl:text-xl 2xl:text-5xl font-extrabold border-slate-900 border-2 duration-200 -translate-x-1 -translate-y-1 w-full ${index % 2 === 0 ? 'bg-portfoGreentBGsmall' : 'bg-portfoRedBG'
                                        }`} style={textStyle}>
                                        <span className="border border-gray-900 px-2 py-2 md:px-6 md:py-6 rounded-full w-full">
                                            {content.title}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center absolute bottom-[2rem] right-[7rem] md:bottom-[3rem] md:right-[10rem] lg:bottom-[3rem] lg:right-[10rem] xl:bottom-[3rem] xl:right-[11rem] 2xl:bottom-[4rem] 2xl:right-[24rem]" >
                                    <PortfoBadge className="w-16 h-16 md:w-28 md:h-28" />
                                    <span className="absolute text-white text-5xl font-extrabold">{content.id}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full h-24 absolute bottom-0 left-0 bg-portfoRedBG overflow-hidden flex items-center justify-center border-y border-gray-900 z-20">
                    <div className="flex animate-marquee whitespace-nowrap">
                        <span className="mx-4 text-2xl font-bold flex  items-center justify-center gap-12">
                            YOU SHALL PASS <PortfoLoop /> YOU SHALL PASS <PortfoMouse /> YOU SHALL PASS <PortfoPaperPlane /> YOU SHALL PASS <PortfoEarth /> YOU SHALL PASS <PortfoLamp />
                        </span>
                        <span className="mx-4 text-2xl font-bold flex  items-center justify-center gap-12">
                            YOU SHALL PASS <PortfoLoop /> YOU SHALL PASS <PortfoMouse /> YOU SHALL PASS <PortfoPaperPlane /> YOU SHALL PASS <PortfoEarth /> YOU SHALL PASS <PortfoLamp />
                        </span>
                        <span className="mx-4 text-2xl font-bold flex  items-center justify-center gap-12">
                            YOU SHALL PASS <PortfoLoop /> YOU SHALL PASS <PortfoMouse /> YOU SHALL PASS <PortfoPaperPlane /> YOU SHALL PASS <PortfoEarth /> YOU SHALL PASS <PortfoLamp />
                        </span>
                        <span className="mx-4 text-2xl font-bold flex  items-center justify-center gap-12">
                            YOU SHALL PASS <PortfoLoop /> YOU SHALL PASS <PortfoMouse /> YOU SHALL PASS <PortfoPaperPlane /> YOU SHALL PASS <PortfoEarth /> YOU SHALL PASS <PortfoLamp />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
