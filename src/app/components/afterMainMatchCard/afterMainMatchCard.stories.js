import { fn } from '@storybook/test';

import { AfterMainMatchCard } from './AfterMainMatchCard';
import profile2 from '../../assets/images/profile2.jpeg';
import rami1 from '../../assets/images/rami1.jpeg';
import rami2 from '../../assets/images/rami2.jpeg';

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

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/AfterMainMatchCard',
  component: AfterMainMatchCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Simple = {
  args: {
    userCard: {
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
  },
};
