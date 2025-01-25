import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';


import PropTypes from 'prop-types';

import { AfterCard } from '../afterCard/AfterCard';
import { AfterIconButton } from '../afterIconButton/AfterIconButton';


import LocationIcon from '@/app/assets/icons/location';
import LoveIcon from '@/app/assets/icons/love';
import HateIcon from '@/app/assets/icons/hate';
import LongArrowDownIcon from '@/app/assets/icons/longArrowDown';

/** Primary UI component for user interaction */
export const AfterMainMatchCard = ({ userCard, isFront, onLove, onHate }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0); // state to track current image index
    const [extentedCard, setExtendedCard] = useState(isFront ? false : false);

    const scrollableDivRef = useRef(null);

    // Function to handle moving to the next image
    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === userCard.allPictures.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Function to handle moving to the previous image
    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? userCard.allPictures.length - 1 : prevIndex - 1
        );
    };

    // Scroll when extendedCard is true
    useEffect(() => {
        if (extentedCard && scrollableDivRef.current) {
            scrollableDivRef.current.scrollBy({ top: 50, behavior: 'smooth' });
        }
    }, [extentedCard]);

    const handleExtendedCard = () => {
        setExtendedCard(!extentedCard);
    }

    return (
        <AfterCard padding="px-4 py-2" rounded="rounded-2xl" mode="mainMatchCard">
            <div
                className='flex flex-col gap-8 w-[460px] h-[650px] overflow-y-scroll pointer-events-auto scrollbar-hide'
                ref={scrollableDivRef}
            >
                <div className="relative flex justify-center rounded-2xl">
                    <div className="rounded-2xl border-2 border-dark overflow-hidden h-[550px] w-[450px] relative">

                        {/* Tabs at the top to show the number of pictures and indicate the current one */}
                        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
                            {userCard.allPictures.map((_, index) => (
                                <div
                                    key={index}
                                    onClick={() => setCurrentImageIndex(index)} // Click event to change the current image
                                    className={`h-2 w-8 cursor-pointer pointer-events-auto rounded-full ${currentImageIndex === index ? 'bg-main-match-card-bg' : 'bg-gray-300 opacity-90'
                                        }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={handlePrevImage}
                            className="absolute h-12 w-12 pointer-events-auto left-2 top-1/2 transform -translate-y-1/2 bg-light text-dark p-2 rounded-full z-40 opacity-30 hover:opacity-70 transition-opacity duration-300"
                        >
                            &#8249; {/* Left arrow symbol */}
                        </button>

                        <button
                            onClick={handleNextImage}
                            className="absolute h-12 w-12 pointer-events-auto right-2 top-1/2 transform -translate-y-1/2 bg-light text-dark p-2 rounded-full z-40 opacity-30 hover:opacity-70 transition-opacity duration-300"
                        >
                            &#8250; {/* Right arrow symbol */}
                        </button>


                        {/* Use layout="fill" to fill the container and objectFit="cover" to ensure proper coverage */}
                        <Image
                            src={userCard.allPictures[currentImageIndex].picture}
                            alt="Picture of the author"
                            layout="fill"    // Image will fill the container
                            objectFit="cover" // Image will cover the entire area, cropping the excess
                            className={`rounded-2xl pointer-events-none ${isFront ? '' : 'filter blur-xl'}`} // Ensures the image has rounded corners
                        />
                    </div>

                    <div
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 pointer-events-auto"
                    >
                        <div className='flex gap-8'>
                            <AfterIconButton mode="hate" icon={HateIcon} size="h-10 w-10" onClick={onHate} />
                            <AfterIconButton mode="love" icon={LoveIcon} size="h-10 w-10" onClick={onLove} />
                        </div>
                    </div>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex flex-col text-md'>
                        <span className={`${isFront ? '' : 'filter blur-xl'}`}>
                            {userCard.fullName}, {userCard.age}
                        </span>
                        <div className={`flex items-center gap-1 ${isFront ? '' : 'filter blur-xl'}`}>
                            <LocationIcon className="h-4 w-4" />
                            <span className='text-gray-500'>
                                {userCard.location}
                            </span>
                        </div>
                    </div>
                    <div className='pointer-events-auto'>
                        <AfterIconButton
                            mode="mainMatchCard"
                            icon={LongArrowDownIcon}
                            rounded={true} size="h-4 w-4"
                            onClick={handleExtendedCard} />
                    </div>
                </div>
                {extentedCard && (
                    <div className='flex flex-col gap-8'>
                        <div className='flex flex-col'>
                            <span className='text-4xl text-gray-500'>
                                Bio
                            </span>
                            <p>
                                This is my bio, its only for testing purposes, please don't text me! This is my bio, its only for testing purposes, please don't text me!
                            </p>
                        </div>
                        <div className='flex flex-col'>
                            <div>
                                <span className='text-4xl text-gray-500'>
                                    About me
                                </span>
                                <div>
                                    <ul className='flex flex-wrap gap-2 p-1'>
                                        {userCard.aboutMe.map((item) => (
                                            <li key={item.name} className="flex items-center justify-center gap-2 bg-verified border-2 border-dark rounded-full px-3 py-1.5 text-sm transition-all duration-100 ease-in-out transform cursor-pointer">
                                                <item.icon className="h-5 w-5" />
                                                {item.value}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <div>
                                <span className='text-4xl text-gray-500'>
                                    My interests
                                </span>
                                <div>
                                    <ul className='flex flex-wrap gap-2 p-1'>
                                        {userCard.interests.map((item) => (
                                            <li key={item.name} className="flex items-center justify-center gap-2 bg-verified border-2 border-dark rounded-full px-3 py-1.5 text-sm transition-all duration-100 ease-in-out transform cursor-pointer">
                                                <item.icon className="h-5 w-5" />
                                                {item.value}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <div>
                                <span className='text-4xl text-gray-500'>
                                    Languages i speak
                                </span>
                                <div>
                                    <ul className='flex flex-wrap gap-2 p-1'>
                                        {userCard.languages.map((item) => (
                                            <li key={item} className="flex items-center justify-center gap-2 bg-verified border-2 border-dark rounded-full px-3 py-1.5 text-sm transition-all duration-100 ease-in-out transform cursor-pointer">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </AfterCard>
    );
};


const modeToCircleBgColor = {
    love: 'after:bg-love',
    hate: 'after:bg-hate',
    menu: 'after:bg-menu',
    search: 'after:bg-search',
    back: 'after:bg-back',
    action: 'after:bg-action',
    light: 'after:bg-light',
};

const modeToCheckedBgColor = {
    love: 'peer-checked:bg-love',
    hate: 'peer-checked:bg-hate',
    menu: 'peer-checked:bg-menu',
    search: 'peer-checked:bg-search',
    back: 'peer-checked:bg-back',
    action: 'peer-checked:bg-action',
};

const modeToUncheckedBgColor = {
    love: 'bg-love',
    hate: 'bg-hate',
    menu: 'bg-menu',
    search: 'bg-search',
    back: 'bg-back',
    action: 'bg-action',
    light: 'bg-light',
};

AfterMainMatchCard.propTypes = {
    userCard: PropTypes.object,
    isFront: PropTypes.bool,
    size: PropTypes.string,
    onLove: PropTypes.func,
    onHate: PropTypes.func,
};

AfterMainMatchCard.defaultProps = {
    userCard: null,
    isFront: true,
    size: 'h-6 w-6',
    onLove: undefined,
    onHate: undefined,
};
