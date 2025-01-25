import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

import { AfterMainMatchCard } from "./AfterMainMatchCard";

import profile2 from '../../assets/images/profile2.jpeg';
import rami1 from '../../assets/images/rami1.jpeg';
import rami2 from '../../assets/images/rami2.jpeg';
import yesmine1 from '../../assets/images/yesmine1.jpeg';
import yesmine2 from '../../assets/images/yesmine2.jpeg';
import cassie1 from '../../assets/images/cassie1.webp';
import cassie2 from '../../assets/images/cassie2.jpeg';
import hassine1 from '../../assets/images/hassine1.jpg';
import hassine2 from '../../assets/images/hassine2.jpg';
import jaa1 from '../../assets/images/jaa1.jpg';
import jaa2 from '../../assets/images/jaa2.jpg';
import nour1 from '../../assets/images/nour1.jpg';
import nour2 from '../../assets/images/nour2.jpg';
import souhe1 from '../../assets/images/souhe1.jpg';
import souhe2 from '../../assets/images/souhe2.jpg';
import wael1 from '../../assets/images/wael1.jpg';
import wael2 from '../../assets/images/wael2.jpg';
import golli1 from '../../assets/images/golli1.jpg';
import golli2 from '../../assets/images/golli2.jpg';
import zendaya1 from '../../assets/images/zendaya1.jpg';
import zendaya2 from '../../assets/images/zendaya2.jpg';

import HateIcon from "@/app/assets/icons/hate";
import LoveIcon from "@/app/assets/icons/love";

import AboutMeAlcohol from "@/app/assets/icons/aboutMeAlcohol";
import AboutMeAstroSign from "@/app/assets/icons/aboutMeAstroSign";
import AboutMeChildren from "@/app/assets/icons/aboutMeChildren";
import AboutMeDegree from "@/app/assets/icons/aboutMeDegree";
import AboutMeElement from "@/app/assets/icons/aboutMeElement";
import AboutMeHeight from "@/app/assets/icons/aboutMeHeight";
import AboutMeLookingFor from "@/app/assets/icons/aboutMeLookingFor";
import AboutMeReligion from "@/app/assets/icons/aboutMeReligion";
import AboutMeSmoking from "@/app/assets/icons/aboutMeSmoking";
import AboutMeSport from "@/app/assets/icons/aboutMeSport";

import InterestsBadminton from "@/app/assets/icons/interestsBadminton";
import InterestsBetting from "@/app/assets/icons/interestsBetting";
import InterestsCoding from "@/app/assets/icons/interestsCoding";
import InterestsFootball from "@/app/assets/icons/interestsFootball";
import InterestsGym from "@/app/assets/icons/interestsGym";

export const AfterSwipeCard = () => {
    const [cards, setCards] = useState(cardData);
    const [swipingLeft, setSwipingLeft] = useState(false);
    const [swipingRight, setSwipingRight] = useState(false);
    const [leftOpacity, setLeftOpacity] = useState(0);
    const [rightOpacity, setRightOpacity] = useState(0);

    const threshold = 70;

    const handleSwipe = (xValue) => {
        if (xValue > threshold) {
            setSwipingRight(true);
            setSwipingLeft(false);
            setRightOpacity(Math.min((xValue - threshold) / 100, 1)); // Scale right opacity
        } else if (xValue < -threshold) {
            setSwipingLeft(true);
            setSwipingRight(false);
            setLeftOpacity(Math.min((-xValue - threshold) / 100, 1)); // Scale left opacity
        } else {
            setSwipingLeft(false);
            setSwipingRight(false);
            setLeftOpacity(0);
            setRightOpacity(0);
        }
    };


    return (
        <>
            {/* Left opacity layer - on top of everything */}
            {swipingLeft && (
                <motion.div
                    className="absolute flex items-center justify-center left-0 top-0 h-full w-[200px] z-20"
                    style={{
                        background: `linear-gradient(to right, rgba(255, 255, 255, ${leftOpacity}) 30%, rgba(255, 255, 255, 0) 100%)`, // White gradient
                    }}
                >
                    <HateIcon
                        className="w-28 h-28" // Set size as needed
                        style={{
                            opacity: leftOpacity, // You can adjust opacity based on swiping
                            width: `${80 * leftOpacity}px`, // Scale width based on opacity
                            height: `${80 * leftOpacity}px`, // Scale height based on opacity
                        }}
                    />
                </motion.div>
            )}

            {/* Right layer - appears when swiping right */}
            {swipingRight && (
                <motion.div
                    className="absolute flex items-center justify-center right-0 top-0 h-full w-[200px] z-20"
                    style={{
                        background: `linear-gradient(to left, rgba(255, 255, 255, ${rightOpacity}) 30%, rgba(255, 255, 255, 0) 100%)`, // White gradient
                    }}
                >
                    <LoveIcon
                        className="w-28 h-28 text-fill-love" // Set size as needed
                        style={{
                            opacity: rightOpacity, // You can adjust opacity based on swiping
                            width: `${112 * rightOpacity}px`, // Scale width based on opacity
                            height: `${112 * rightOpacity}px`, // Scale height based on opacity
                        }}
                    />
                </motion.div>
            )}
            {cards.map((card) => {
                return (
                    <Card
                        key={card.id}
                        card={card}
                        cards={cards}
                        setCards={setCards}
                        onSwipe={handleSwipe}
                        setSwipingLeft={setSwipingLeft} // Pass down setter
                        setSwipingRight={setSwipingRight} // Pass down setter
                        setLeftOpacity={setLeftOpacity} // Pass down setter
                        setRightOpacity={setRightOpacity} // Pass down setter
                        {...card}
                    />
                );
            })}
        </>
    );
};

const Card = ({ id, setCards, cards, card, onSwipe, setSwipingLeft, setSwipingRight, setLeftOpacity, setRightOpacity }) => {
    const x = useMotionValue(0);

    const rotate = useTransform(x, [-150, 150], [-18, 18]);
    const opacity = useTransform(x, [-150, 0, 150], [0.8, 1, 0.8]);

    const isFront = id === cards[cards.length - 1].id;

    useEffect(() => {
        return x.onChange((latestX) => {
            onSwipe(latestX); // Call swipe handler on change
        });
    }, [x, onSwipe]);

    const handleDragEnd = () => {
        if (Math.abs(x.get()) > 100) {
            setCards((prevCards) => prevCards.filter((card) => card.id !== id));
        }

        setSwipingLeft(false);
        setSwipingRight(false);
        setLeftOpacity(0);
        setRightOpacity(0);
    };

    const swipeRight = () => {
        animate(x, 200, { duration: 0.3, onComplete: () => handleDragEnd() });
    };

    const swipeLeft = () => {
        animate(x, -200, { duration: 0.3, onComplete: () => handleDragEnd() });
    };


    return (
        <motion.div
            className="absolute cursor-pointer"
            style={{
                x,
                opacity,
                rotate,
                zIndex: isFront ? 10 : id,
                willChange: "transform, opacity",
            }}
            drag={isFront ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
        >
            <div
                style={{
                    pointerEvents: "none",
                }}
                className="flex justify-center"
            >
                <AfterMainMatchCard onLove={swipeRight} onHate={swipeLeft} userCard={card} isFront={isFront} />
            </div>
        </motion.div>
    );
};

const cardData = [
    {
        id: 1,
        mainPicture: profile2,
        allPictures: [
            {
                picture: profile2,
            },
            {
                picture: rami1,
            },
            {
                picture: rami2,
            },
        ],
        fullName: 'Rami Ben Hadj Abdallah',
        age: 27,
        sex: 'm',
        location: 'Cologne, Germany',
        aboutMe: [
            {
                name: 'height',
                value: '179cm',
                icon: AboutMeHeight,
            },
            {
                name: 'sport',
                value: 'Active',
                icon: AboutMeSport,
            },
            {
                name: 'astroSign',
                value: 'Virgo',
                icon: AboutMeAstroSign,
            },
            {
                name: 'Element',
                value: 'Water',
                icon: AboutMeElement,
            },
            {
                name: 'degree',
                value: 'Masters',
                icon: AboutMeDegree,
            },
            {
                name: 'alcohol',
                value: 'On occasion',
                icon: AboutMeAlcohol
            },
            {
                name: 'smoking',
                value: 'Only when i am drunk',
                icon: AboutMeSmoking,
            },
            {
                name: 'lookingFor',
                value: 'relationship',
                icon: AboutMeLookingFor,
            },
            {
                name: 'children',
                value: 'Someday',
                icon: AboutMeChildren,
            },
            {
                name: 'religion',
                value: 'Muslim',
                icon: AboutMeReligion,
            },
        ],
        interests: [
            {
                value: 'Coding',
                icon: InterestsCoding,
            },
            {
                value: 'Gym',
                icon: InterestsGym,
            },
            {
                value: 'Football',
                icon: InterestsFootball,
            },
            {
                value: 'Badminton',
                icon: InterestsBadminton,
            },
            {
                value: 'Betting',
                icon: InterestsBetting,
            },
        ],
        languages: [
            'English', 'French', 'Arabic', 'German'
        ],
    },
    {
        id: 2,
        mainPicture: yesmine1,
        allPictures: [
            {
                picture: yesmine1,
            },
            {
                picture: yesmine2,
            },
        ],
        fullName: 'Yesmine Ben Hadj Salah',
        age: 25,
        sex: 'f',
        location: 'Krakow, Poland',
        aboutMe: [
            {
                name: 'height',
                value: '179cm',
                icon: AboutMeHeight,
            },
            {
                name: 'sport',
                value: 'Active',
                icon: AboutMeSport,
            },
            {
                name: 'astroSign',
                value: 'Virgo',
                icon: AboutMeAstroSign,
            },
            {
                name: 'Element',
                value: 'Water',
                icon: AboutMeElement,
            },
            {
                name: 'degree',
                value: 'Masters',
                icon: AboutMeDegree,
            },
            {
                name: 'alcohol',
                value: 'On occasion',
                icon: AboutMeAlcohol
            },
            {
                name: 'smoking',
                value: 'Only when i am drunk',
                icon: AboutMeSmoking,
            },
            {
                name: 'lookingFor',
                value: 'relationship',
                icon: AboutMeLookingFor,
            },
            {
                name: 'children',
                value: 'Someday',
                icon: AboutMeChildren,
            },
            {
                name: 'religion',
                value: 'Muslim',
                icon: AboutMeReligion,
            },
        ],
        interests: [
            {
                value: 'Coding',
                icon: InterestsCoding,
            },
            {
                value: 'Gym',
                icon: InterestsGym,
            },
            {
                value: 'Football',
                icon: InterestsFootball,
            },
            {
                value: 'Badminton',
                icon: InterestsBadminton,
            },
            {
                value: 'Betting',
                icon: InterestsBetting,
            },
        ],
        languages: [
            'English', 'French', 'Arabic', 'German'
        ],
    },
    {
        id: 3,
        mainPicture: cassie1,
        allPictures: [
            {
                picture: cassie1,
            },
            {
                picture: cassie2,
            },
        ],
        fullName: 'Sydney Sweeney',
        age: 26,
        sex: 'f',
        location: 'San Francisco, USA',
        aboutMe: [
            {
                name: 'height',
                value: '179cm',
                icon: AboutMeHeight,
            },
            {
                name: 'sport',
                value: 'Active',
                icon: AboutMeSport,
            },
            {
                name: 'astroSign',
                value: 'Virgo',
                icon: AboutMeAstroSign,
            },
            {
                name: 'Element',
                value: 'Water',
                icon: AboutMeElement,
            },
            {
                name: 'degree',
                value: 'Masters',
                icon: AboutMeDegree,
            },
            {
                name: 'alcohol',
                value: 'On occasion',
                icon: AboutMeAlcohol
            },
            {
                name: 'smoking',
                value: 'Only when i am drunk',
                icon: AboutMeSmoking,
            },
            {
                name: 'lookingFor',
                value: 'relationship',
                icon: AboutMeLookingFor,
            },
            {
                name: 'children',
                value: 'Someday',
                icon: AboutMeChildren,
            },
            {
                name: 'religion',
                value: 'Muslim',
                icon: AboutMeReligion,
            },
        ],
        interests: [
            {
                value: 'Coding',
                icon: InterestsCoding,
            },
            {
                value: 'Gym',
                icon: InterestsGym,
            },
            {
                value: 'Football',
                icon: InterestsFootball,
            },
            {
                value: 'Badminton',
                icon: InterestsBadminton,
            },
            {
                value: 'Betting',
                icon: InterestsBetting,
            },
        ],
        languages: [
            'English', 'French', 'Arabic', 'German'
        ],
    },
    {
        id: 4,
        mainPicture: hassine1,
        allPictures: [
            {
                picture: hassine1,
            },
            {
                picture: hassine2,
            },
        ],
        fullName: 'Hassine Hammami',
        age: 25,
        sex: 'm',
        location: 'Heidelberg, Germany',
        aboutMe: [
            {
                name: 'height',
                value: '179cm',
                icon: AboutMeHeight,
            },
            {
                name: 'sport',
                value: 'Active',
                icon: AboutMeSport,
            },
            {
                name: 'astroSign',
                value: 'Virgo',
                icon: AboutMeAstroSign,
            },
            {
                name: 'Element',
                value: 'Water',
                icon: AboutMeElement,
            },
            {
                name: 'degree',
                value: 'Masters',
                icon: AboutMeDegree,
            },
            {
                name: 'alcohol',
                value: 'On occasion',
                icon: AboutMeAlcohol
            },
            {
                name: 'smoking',
                value: 'Only when i am drunk',
                icon: AboutMeSmoking,
            },
            {
                name: 'lookingFor',
                value: 'relationship',
                icon: AboutMeLookingFor,
            },
            {
                name: 'children',
                value: 'Someday',
                icon: AboutMeChildren,
            },
            {
                name: 'religion',
                value: 'Muslim',
                icon: AboutMeReligion,
            },
        ],
        interests: [
            {
                value: 'Coding',
                icon: InterestsCoding,
            },
            {
                value: 'Gym',
                icon: InterestsGym,
            },
            {
                value: 'Football',
                icon: InterestsFootball,
            },
            {
                value: 'Badminton',
                icon: InterestsBadminton,
            },
            {
                value: 'Betting',
                icon: InterestsBetting,
            },
        ],
        languages: [
            'English', 'French', 'Arabic', 'German'
        ],
    },
    {
        id: 5,
        mainPicture: jaa1,
        allPictures: [
            {
                picture: jaa1,
            },
            {
                picture: jaa2,
            },
        ],
        fullName: 'Mohamed jaidane',
        age: 26,
        sex: 'm',
        location: 'Reykjavik, Iceland',
        aboutMe: [
            {
                name: 'height',
                value: '179cm',
                icon: AboutMeHeight,
            },
            {
                name: 'sport',
                value: 'Active',
                icon: AboutMeSport,
            },
            {
                name: 'astroSign',
                value: 'Virgo',
                icon: AboutMeAstroSign,
            },
            {
                name: 'Element',
                value: 'Water',
                icon: AboutMeElement,
            },
            {
                name: 'degree',
                value: 'Masters',
                icon: AboutMeDegree,
            },
            {
                name: 'alcohol',
                value: 'On occasion',
                icon: AboutMeAlcohol
            },
            {
                name: 'smoking',
                value: 'Only when i am drunk',
                icon: AboutMeSmoking,
            },
            {
                name: 'lookingFor',
                value: 'relationship',
                icon: AboutMeLookingFor,
            },
            {
                name: 'children',
                value: 'Someday',
                icon: AboutMeChildren,
            },
            {
                name: 'religion',
                value: 'Muslim',
                icon: AboutMeReligion,
            },
        ],
        interests: [
            {
                value: 'Coding',
                icon: InterestsCoding,
            },
            {
                value: 'Gym',
                icon: InterestsGym,
            },
            {
                value: 'Football',
                icon: InterestsFootball,
            },
            {
                value: 'Badminton',
                icon: InterestsBadminton,
            },
            {
                value: 'Betting',
                icon: InterestsBetting,
            },
        ],
        languages: [
            'English', 'French', 'Arabic', 'German'
        ],
    },
    {
        id: 6,
        mainPicture: nour1,
        allPictures: [
            {
                picture: nour1,
            },
            {
                picture: nour2,
            },
        ],
        fullName: 'Nour Selmi',
        age: 25,
        sex: 'f',
        location: 'Bonn, Germany',
        aboutMe: [
            {
                name: 'height',
                value: '179cm',
                icon: AboutMeHeight,
            },
            {
                name: 'sport',
                value: 'Active',
                icon: AboutMeSport,
            },
            {
                name: 'astroSign',
                value: 'Virgo',
                icon: AboutMeAstroSign,
            },
            {
                name: 'Element',
                value: 'Water',
                icon: AboutMeElement,
            },
            {
                name: 'degree',
                value: 'Masters',
                icon: AboutMeDegree,
            },
            {
                name: 'alcohol',
                value: 'On occasion',
                icon: AboutMeAlcohol
            },
            {
                name: 'smoking',
                value: 'Only when i am drunk',
                icon: AboutMeSmoking,
            },
            {
                name: 'lookingFor',
                value: 'relationship',
                icon: AboutMeLookingFor,
            },
            {
                name: 'children',
                value: 'Someday',
                icon: AboutMeChildren,
            },
            {
                name: 'religion',
                value: 'Muslim',
                icon: AboutMeReligion,
            },
        ],
        interests: [
            {
                value: 'Coding',
                icon: InterestsCoding,
            },
            {
                value: 'Gym',
                icon: InterestsGym,
            },
            {
                value: 'Football',
                icon: InterestsFootball,
            },
            {
                value: 'Badminton',
                icon: InterestsBadminton,
            },
            {
                value: 'Betting',
                icon: InterestsBetting,
            },
        ],
        languages: [
            'English', 'French', 'Arabic', 'German'
        ],
    },
    {
        id: 7,
        mainPicture: wael1,
        allPictures: [
            {
                picture: wael1,
            },
            {
                picture: wael2,
            },
        ],
        fullName: 'Wael Morjen',
        age: 16,
        sex: 'm',
        location: 'Utrecht, Netherlands',
        aboutMe: [
            {
                name: 'height',
                value: '179cm',
                icon: AboutMeHeight,
            },
            {
                name: 'sport',
                value: 'Active',
                icon: AboutMeSport,
            },
            {
                name: 'astroSign',
                value: 'Virgo',
                icon: AboutMeAstroSign,
            },
            {
                name: 'Element',
                value: 'Water',
                icon: AboutMeElement,
            },
            {
                name: 'degree',
                value: 'Masters',
                icon: AboutMeDegree,
            },
            {
                name: 'alcohol',
                value: 'On occasion',
                icon: AboutMeAlcohol
            },
            {
                name: 'smoking',
                value: 'Only when i am drunk',
                icon: AboutMeSmoking,
            },
            {
                name: 'lookingFor',
                value: 'relationship',
                icon: AboutMeLookingFor,
            },
            {
                name: 'children',
                value: 'Someday',
                icon: AboutMeChildren,
            },
            {
                name: 'religion',
                value: 'Muslim',
                icon: AboutMeReligion,
            },
        ],
        interests: [
            {
                value: 'Coding',
                icon: InterestsCoding,
            },
            {
                value: 'Gym',
                icon: InterestsGym,
            },
            {
                value: 'Football',
                icon: InterestsFootball,
            },
            {
                value: 'Badminton',
                icon: InterestsBadminton,
            },
            {
                value: 'Betting',
                icon: InterestsBetting,
            },
        ],
        languages: [
            'English', 'French', 'Arabic', 'German'
        ],
    },
    {
        id: 8,
        mainPicture: souhe1,
        allPictures: [
            {
                picture: souhe1,
            },
            {
                picture: souhe2,
            },
        ],
        fullName: 'Souhe Nuisser',
        age: 25,
        sex: 'f',
        location: 'Tunis, Tunisia',
        aboutMe: [
            {
                name: 'height',
                value: '179cm',
                icon: AboutMeHeight,
            },
            {
                name: 'sport',
                value: 'Active',
                icon: AboutMeSport,
            },
            {
                name: 'astroSign',
                value: 'Virgo',
                icon: AboutMeAstroSign,
            },
            {
                name: 'Element',
                value: 'Water',
                icon: AboutMeElement,
            },
            {
                name: 'degree',
                value: 'Masters',
                icon: AboutMeDegree,
            },
            {
                name: 'alcohol',
                value: 'On occasion',
                icon: AboutMeAlcohol
            },
            {
                name: 'smoking',
                value: 'Only when i am drunk',
                icon: AboutMeSmoking,
            },
            {
                name: 'lookingFor',
                value: 'relationship',
                icon: AboutMeLookingFor,
            },
            {
                name: 'children',
                value: 'Someday',
                icon: AboutMeChildren,
            },
            {
                name: 'religion',
                value: 'Muslim',
                icon: AboutMeReligion,
            },
        ],
        interests: [
            {
                value: 'Coding',
                icon: InterestsCoding,
            },
            {
                value: 'Gym',
                icon: InterestsGym,
            },
            {
                value: 'Football',
                icon: InterestsFootball,
            },
            {
                value: 'Badminton',
                icon: InterestsBadminton,
            },
            {
                value: 'Betting',
                icon: InterestsBetting,
            },
        ],
        languages: [
            'English', 'French', 'Arabic', 'German'
        ],
    },
    {
        id: 9,
        mainPicture: golli1,
        allPictures: [
            {
                picture: golli1,
            },
            {
                picture: golli2,
            },
        ],
        fullName: 'Wael Golli',
        age: 999,
        sex: 'm',
        location: 'Frankfurt, Germany',
        aboutMe: [
            {
                name: 'height',
                value: '179cm',
                icon: AboutMeHeight,
            },
            {
                name: 'sport',
                value: 'Active',
                icon: AboutMeSport,
            },
            {
                name: 'astroSign',
                value: 'Virgo',
                icon: AboutMeAstroSign,
            },
            {
                name: 'Element',
                value: 'Water',
                icon: AboutMeElement,
            },
            {
                name: 'degree',
                value: 'Masters',
                icon: AboutMeDegree,
            },
            {
                name: 'alcohol',
                value: 'On occasion',
                icon: AboutMeAlcohol
            },
            {
                name: 'smoking',
                value: 'Only when i am drunk',
                icon: AboutMeSmoking,
            },
            {
                name: 'lookingFor',
                value: 'relationship',
                icon: AboutMeLookingFor,
            },
            {
                name: 'children',
                value: 'Someday',
                icon: AboutMeChildren,
            },
            {
                name: 'religion',
                value: 'Muslim',
                icon: AboutMeReligion,
            },
        ],
        interests: [
            {
                value: 'Coding',
                icon: InterestsCoding,
            },
            {
                value: 'Gym',
                icon: InterestsGym,
            },
            {
                value: 'Football',
                icon: InterestsFootball,
            },
            {
                value: 'Badminton',
                icon: InterestsBadminton,
            },
            {
                value: 'Betting',
                icon: InterestsBetting,
            },
        ],
        languages: [
            'English', 'French', 'Arabic', 'German'
        ],
    },
    {
        id: 10,
        mainPicture: zendaya1,
        allPictures: [
            {
                picture: zendaya1,
            },
            {
                picture: zendaya2,
            },
        ],
        fullName: 'Zendaya',
        age: 28,
        sex: 'f',
        location: 'California, USA',
        aboutMe: [
            {
                name: 'height',
                value: '179cm',
                icon: AboutMeHeight,
            },
            {
                name: 'sport',
                value: 'Active',
                icon: AboutMeSport,
            },
            {
                name: 'astroSign',
                value: 'Virgo',
                icon: AboutMeAstroSign,
            },
            {
                name: 'Element',
                value: 'Water',
                icon: AboutMeElement,
            },
            {
                name: 'degree',
                value: 'Masters',
                icon: AboutMeDegree,
            },
            {
                name: 'alcohol',
                value: 'On occasion',
                icon: AboutMeAlcohol
            },
            {
                name: 'smoking',
                value: 'Only when i am drunk',
                icon: AboutMeSmoking,
            },
            {
                name: 'lookingFor',
                value: 'relationship',
                icon: AboutMeLookingFor,
            },
            {
                name: 'children',
                value: 'Someday',
                icon: AboutMeChildren,
            },
            {
                name: 'religion',
                value: 'Muslim',
                icon: AboutMeReligion,
            },
        ],
        interests: [
            {
                value: 'Coding',
                icon: InterestsCoding,
            },
            {
                value: 'Gym',
                icon: InterestsGym,
            },
            {
                value: 'Football',
                icon: InterestsFootball,
            },
            {
                value: 'Badminton',
                icon: InterestsBadminton,
            },
            {
                value: 'Betting',
                icon: InterestsBetting,
            },
        ],
        languages: [
            'English', 'French', 'Arabic', 'German'
        ],
    },
    {
        id: 11,
        mainPicture: profile2,
        allPictures: [
            {
                picture: profile2,
            },
            {
                picture: rami1,
            },
            {
                picture: rami2,
            },
        ],
        fullName: 'Rami Ben Hadj Abdallah',
        age: 27,
        sex: 'm',
        location: 'Cologne, Germany',
        aboutMe: [
            {
                name: 'height',
                value: '179cm',
                icon: AboutMeHeight,
            },
            {
                name: 'sport',
                value: 'Active',
                icon: AboutMeSport,
            },
            {
                name: 'astroSign',
                value: 'Virgo',
                icon: AboutMeAstroSign,
            },
            {
                name: 'Element',
                value: 'Water',
                icon: AboutMeElement,
            },
            {
                name: 'degree',
                value: 'Masters',
                icon: AboutMeDegree,
            },
            {
                name: 'alcohol',
                value: 'On occasion',
                icon: AboutMeAlcohol
            },
            {
                name: 'smoking',
                value: 'Only when i am drunk',
                icon: AboutMeSmoking,
            },
            {
                name: 'lookingFor',
                value: 'relationship',
                icon: AboutMeLookingFor,
            },
            {
                name: 'children',
                value: 'Someday',
                icon: AboutMeChildren,
            },
            {
                name: 'religion',
                value: 'Muslim',
                icon: AboutMeReligion,
            },
        ],
        interests: [
            {
                value: 'Coding',
                icon: InterestsCoding,
            },
            {
                value: 'Gym',
                icon: InterestsGym,
            },
            {
                value: 'Football',
                icon: InterestsFootball,
            },
            {
                value: 'Badminton',
                icon: InterestsBadminton,
            },
            {
                value: 'Betting',
                icon: InterestsBetting,
            },
        ],
        languages: [
            'English', 'French', 'Arabic', 'German'
        ],
    },
];