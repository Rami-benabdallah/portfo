import React from 'react';
import { bangers } from '@/app/layout';

export const PortfoLetter = ({ letter, textColor }) => {
  return (
    <div className="relative w-fit inline-block" style={{ width: '1ch' }}>
      {/* Static black background letter */}
      <span className={`${bangers.className} absolute text-black text-[8rem] md:text-[9rem] lg:text-[17rem] 2xl:text-[28rem] font-extrabold leading-none`}>
        {letter}
      </span>

      {/* Animated red letter */}
      <span
        className={`${bangers.className} ${textColor} absolute text-[8rem] md:text-[9rem] lg:text-[17rem] 2xl:text-[28rem] font-extrabold leading-none transform 
        animate-move-letter`}
      >
        {letter}
      </span>
    </div>
  );
};
