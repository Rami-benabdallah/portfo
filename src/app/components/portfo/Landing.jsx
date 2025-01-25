import React from 'react';

import { PortfoLetter } from '../afterLetter/PortfoLetter';
import PortfoStar from '@/app/assets/icons/portfoStar';
import PortoWavesBlue from '@/app/assets/icons/portoWavesBlue';

export const Landing = ({ }) => {

    return (
        <div className="h-screen w-screen relative flex items-center justify-center bg-portfoGreenBG">
            <div className="w-full xl:w-[1200px] 2xl:w-[1500px] h-full flex items-center justify-center">

                {/* Card */}
                <div className="w-3/5 md:w-2/5 lg:w-3/5 relative">
                    <div style={{ animation: 'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both' }}>
                        <div className="w-full bg-dark duration-200 rounded-full">
                            <div className="bg-portfoBlueBG px-20 py-32 md:px-28 md:py-40 lg:px-16 lg:py-56 2xl:px-28 2xl:py-72 rounded-full flex items-center border-slate-900 border-2 duration-200 -translate-x-1 -translate-y-1 w-full">
                            </div>
                        </div>
                    </div>

                    {/* Positioned PortfoLetter */}
                    <div className="absolute right-[17rem] bottom-[17rem] md:bottom-[21rem] md:left-[0rem] lg:left-[2rem] lg:bottom-[33rem] xl:bottom-[32rem] xl:left-[5rem] 2xl:bottom-[45rem] 2xl:left-0 translate-x-10 translate-y-5">
                        <PortfoLetter letter="PORT" textColor="text-portfoDirtyWhiteText" />
                    </div>

                    {/* Positioned PortfoLetter */}
                    <div className="absolute right-[16rem] bottom-[10rem] md:bottom-[13rem] lg:left-[2rem] lg:bottom-[17rem] 2xl:bottom-[24rem] 2xl:left-0 translate-x-10 translate-y-5">
                        <PortfoLetter letter="FOLIO" textColor="text-portfoDirtyWhiteText" />
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
            <div className="w-full absolute bottom-0 left-0">
                <PortoWavesBlue className="w-full" />
            </div>
        </div>
    );
};
