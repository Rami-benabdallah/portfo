import React from 'react';
import Image from 'next/image';

import PortfoLinkedIn from '@/app/assets/icons/portfoLinkedIn';
import PortfoLocation from '@/app/assets/icons/portfoLocation';
import PortfoMail from '@/app/assets/icons/portfoMail';
import PortfoPhone from '@/app/assets/icons/portfoPhone';
import cassie2 from '@/app/assets/images/cassie2.jpeg';

import ReactIcon from '@/app/assets/icons/React';
import Next from '@/app/assets/icons/Next';
import Vue from '@/app/assets/icons/Vue';
import JavaScript from '@/app/assets/icons/Javascript';
import Typescript from '@/app/assets/icons/Typescript';
import Html from '@/app/assets/icons/Html';
import Css from '@/app/assets/icons/Css';
import Tailwind from '@/app/assets/icons/Tailwind';
import MaterialUI from '@/app/assets/icons/MaterialUI';
import RuduxIcon from '@/app/assets/icons/VueX';
import NodeJs from '@/app/assets/icons/NodeJs';
import Php from '@/app/assets/icons/Php';
import Symfony from '@/app/assets/icons/Symfony';
import Git from '@/app/assets/icons/Git';
import Cypress from '@/app/assets/icons/Cypress';
import Storybook from '@/app/assets/icons/Storybook';
import Figma from '@/app/assets/icons/Figma';
import AdobeXD from '@/app/assets/icons/AdobeXD';
import Wordpress from '@/app/assets/icons/Wordpress';
import Shopify from '@/app/assets/icons/Shopify';
import PowerBi from '@/app/assets/icons/PowerBI';


const technologies = [
    {
        name: 'VueJS',
        icon: Vue,
    },
    {
        name: 'ReactJS',
        icon: ReactIcon,
    },
    {
        name: 'NextJS',
        icon: Next,
    },
    {
        name: 'JavaScript',
        icon: JavaScript,
    },
    {
        name: 'Typescript',
        icon: Typescript,
    },
    {
        name: 'VueX',
        icon: Vue,
    },
    {
        name: 'Redux',
        icon: RuduxIcon,
    },
    {
        name: 'Html',
        icon: Html,
    },
    {
        name: 'Css',
        icon: Css,
    },
    {
        name: 'Tailwind',
        icon: Tailwind,
    },
    {
        name: 'Material',
        icon: MaterialUI,
    },
    {
        name: 'NodeJS',
        icon: NodeJs,
    },
    {
        name: 'PHP',
        icon: Php,
    },
    {
        name: 'Symfony',
        icon: Symfony,
    },
    {
        name: 'Git',
        icon: Git,
    },
    {
        name: 'Cypress',
        icon: Cypress,
    },
    {
        name: 'Storybook',
        icon: Storybook,
    },
    {
        name: 'Figma',
        icon: Figma,
    },
    {
        name: 'AdobeXD',
        icon: AdobeXD,
    },
    {
        name: 'Wordpress',
        icon: Wordpress,
    },
    {
        name: 'Shopify',
        icon: Shopify,
    },
    {
        name: 'PowerBI',
        icon: PowerBi,
    },
]


export const AboutMeTech = ({ }) => {

    return (
        <div className="w-screen relative flex items-center justify-center bg-portfoRedLightBG px-10 py-10 xl:px-0">
            <div className="w-full xl:w-[1200px] 2xl:w-[1500px] h-full flex flex-col items-center gap-8">
                <h3 className="text-5xl md:text-7xl font-extrabold xl:mt-16">
                    ABOUT ME
                </h3>
                <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
                    <div className="w-full bg-red-400 h-[22rem] md:h-[30rem] rounded-2xl border-4 border-gray-950 overflow-hidden">
                        <Image
                            src={cassie2}
                            alt="Picture of the author"
                            className="w-full h-full object-cover pointer-events-none"
                        />
                    </div>
                    <div className="w-full h-full flex flex-col gap-4">
                        <span>
                            Rami Ben Hadj Abdallah
                        </span>
                        <div className="w-full">
                            <span className="bg-portfoYellowBG px-4 py-2 border border-gray-950 rounded-full">
                                Fullstack developer
                            </span>
                        </div>
                        <p>
                            As a Computer Science graduate with over 4 years of experience in front-end development, I have contributed to diverse products and
                            SaaS solutions. My passion lies in delivering high-quality, user-centric solutions that exceed project expectations. I thrive on tackling
                            new challenges and continuously expanding my skills to drive innovation and exceptional results.
                        </p>
                        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 md:gap-0">
                            <div className="flex flex-col gap-4">
                                <div className="flex gap-4 items-center">
                                    <div className="bg-gray-950 rounded-full h-8 w-8 flex items-center justify-center">
                                        <PortfoLocation className="h-6 w-6 text-light" />
                                    </div>
                                    <span>Cologne, Germany</span>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <div className="bg-gray-950 rounded-full h-8 w-8 flex items-center justify-center">
                                        <PortfoPhone className="h-5 w-5 text-light" />
                                    </div>
                                    <span>+49 123456789</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
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
                <div className="w-full flex flex-col lg:flex-row gap-8">
                    <div className="flex-1 flex flex-col gap-8">
                        <div className="border border-gray-950 rounded-2xl overflow-hidden">
                            <div className="border-b border-gray-950 bg-portfoBlueCardBG py-6 px-6 flex items-center justify-center">
                                <span>
                                    Experience
                                </span>
                            </div>
                            <div>
                                <div className="flex flex-col gap-2 p-4">
                                    <span className="font-light text-xs">07/2023 – present</span>
                                    <span className="font-bold">VOCANTO Gruppe, Fullstack developer</span>
                                    <span className="text-xs">
                                        * Sustain the advancement and refinement of the Vocanto platform, placing a key emphasis on
                                        optimizing performance and strategically incorporating innovative features
                                    </span>
                                    <span className="text-xs">
                                        * Assisted in the modernization, enhancement and facelift of the legacy platform, prüfungs.tv
                                    </span>
                                    <span className="text-xs">
                                        <span className="font-bold mr-2">
                                            Keywords:
                                        </span>
                                        VueJs, Typescript, TailwindCss, Cypress, jest, Storybook, PHP , Symfony, Twig, Stimulus,
                                        PostgreSQL, Ruby...
                                    </span>
                                </div>
                                <div class="w-1/2 h-[1px] bg-gray-300 mx-auto"></div>
                                <div className="flex flex-col gap-2 p-4">
                                    <span className="font-light text-xs">02/2022 - 06/2023</span>
                                    <span className="font-bold">VAPA GmBH, Frontend Developer</span>
                                    <span className="text-xs">
                                        * Re-build the entire user interface using cutting-edge technologies and prioritizing scalability and
                                        stability as key objectives
                                    </span>
                                    <span className="text-xs">
                                        * Maintain ongoing development and optimization of the VAPA SaaS software, prioritizing bug fixing
                                        and implementing new features as key areas of focus
                                    </span>
                                    <span className="text-xs">
                                        <span className="font-bold mr-2">
                                            Keywords:
                                        </span>
                                        ReactJs, NextJs, Typescript, Material UI, Zustand, GraphQL, Prisma, Apollo, Cypress, jest,
                                        Storybook...
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="border border-gray-950 rounded-2xl overflow-hidden">
                            <div className="border-b border-gray-950 bg-portfoPurpleCardBG py-6 px-6 flex items-center justify-center">
                                <span>
                                    Skills
                                </span>
                            </div>
                            <div>
                                <div className="flex flex-col gap-2 p-4">
                                    <span className="font-bold">Frameworks</span>
                                    <div className="flex justify-between items-center">
                                        <span className="text-xs">* ReactJS, NextJS, VueJS</span>
                                        <span className="text-xs">++++-</span>
                                    </div>
                                </div>
                                <div class="w-1/2 h-[1px] bg-gray-300 mx-auto"></div>
                                <div className="flex flex-col gap-2 p-4">
                                    <span className="font-bold">Languages</span>
                                    <div className="flex justify-between items-center">
                                        <span className="text-xs">* TypeScript, JavaScript, HTML</span>
                                        <span className="text-xs">++++-</span>
                                    </div>
                                </div>
                                <div class="w-1/2 h-[1px] bg-gray-300 mx-auto"></div>
                                <div className="flex flex-col gap-2 p-4">
                                    <span className="font-bold">UI</span>
                                    <div className="flex justify-between items-center">
                                        <span className="text-xs">* Material UI, Joy UI, AntD, Bootstrap, Tailwind CSS</span>
                                        <span className="text-xs">++++-</span>
                                    </div>
                                </div>
                                <div class="w-1/2 h-[1px] bg-gray-300 mx-auto"></div>
                                <div className="flex flex-col gap-2 p-4">
                                    <span className="font-bold">Tests</span>
                                    <div className="flex justify-between items-center">
                                        <span className="text-xs">* Cypress, Jest, React Testing Library</span>
                                        <span className="text-xs">++++-</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 p-4">
                                    <span className="font-bold">Other</span>
                                    <div className="flex justify-between items-center">
                                        <span className="text-xs">* Redux, Jotai, Storybook, Apollo, GraphQL, Prisma..</span>
                                        <span className="text-xs">++++-</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col gap-8">
                        <div className="border border-gray-950 rounded-2xl overflow-hidden">
                            <div className="border-b border-gray-950 bg-portfoOrangeCardBG py-6 px-6 flex items-center justify-center">
                                <span>
                                    Education
                                </span>
                            </div>
                            <div>
                                <div className="flex flex-col gap-2 p-4">
                                    <span className="font-light text-xs">2019 / 2022</span>
                                    <span className="font-bold">Sousse Polytechnic School</span>
                                    <span className="text-xs">* Working on different framework and libraries</span>
                                    <span className="text-xs">* Learning software modeling and software lifecycles</span>
                                </div>
                                <div class="w-1/2 h-[1px] bg-gray-300 mx-auto"></div>
                                <div className="flex flex-col gap-2 p-4">
                                    <span className="font-light text-xs">2016 / 2018</span>
                                    <span className="font-bold">Higher Institute of technological studies</span>
                                    <span className="text-xs">* Database design and administration</span>
                                    <span className="text-xs">* Learning new programming languages and skills</span>
                                </div>
                            </div>
                        </div>
                        <div className="border border-gray-950 rounded-2xl overflow-hidden">
                            <div className="border-b border-gray-950 bg-portfoYellowCardBG py-6 px-6 flex items-center justify-center">
                                <span>
                                    Languages
                                </span>
                            </div>
                            <div>
                                <div className="flex flex-col gap-2 p-4">
                                    <span className="font-bold">English</span>
                                    <span className="text-xs">
                                        * Highly proficient in speaking and
                                        writing
                                    </span>
                                </div>
                                <div class="w-1/2 h-[1px] bg-gray-300 mx-auto"></div>
                                <div className="flex flex-col gap-2 p-4">
                                    <span className="font-bold">French</span>
                                    <span className="text-xs">
                                        * Highly proficient in speaking and
                                        writing
                                    </span>
                                </div>
                                <div class="w-1/2 h-[1px] bg-gray-300 mx-auto"></div>
                                <div className="flex flex-col gap-2 p-4">
                                    <span className="font-bold">Arabic</span>
                                    <span className="text-xs">
                                        * Native
                                    </span>
                                </div>
                                <div class="w-1/2 h-[1px] bg-gray-300 mx-auto"></div>
                                <div className="flex flex-col gap-2 p-4">
                                    <span className="font-bold">German</span>
                                    <span className="text-xs">
                                        * A1
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="border border-gray-950 rounded-2xl overflow-hidden">
                            <div className="border-b border-gray-950 bg-portfoPinkCardBG py-6 px-6 flex items-center justify-center">
                                <span>
                                    Organizations
                                </span>
                            </div>
                            <div>
                                <div className="flex flex-col gap-2 p-4">
                                    <span className="font-light text-xs">06/2021 – 01/2022</span>
                                    <span className="font-bold">AIESEC in Germany, International Relations Manager</span>
                                    <span className="text-xs">* Develop and implement strategies to enhance international relations between AIESEC entities
                                        worldwide
                                    </span>
                                </div>
                                <div class="w-1/2 h-[1px] bg-gray-300 mx-auto"></div>
                                <div className="flex flex-col gap-2 p-4">
                                    <span className="font-light text-xs">02/2018 – 01/2021</span>
                                    <span className="font-bold">AIESEC in Hadrumet, Local Committee Vice President</span>
                                    <span className="text-xs">* Lead a team of 20 individuals in executing strategies aimed at boosting B2C product sales rates while
                                        maintaining a strong focus on customer satisfaction
                                    </span>
                                </div>
                                <div class="w-1/2 h-[1px] bg-gray-300 mx-auto"></div>
                                <div className="flex flex-col gap-2 p-4">
                                    <span className="font-light text-xs">10/2020 – 07/2021</span>
                                    <span className="font-bold">AIESEC in Tunisia, Entity Control Board Manager</span>
                                    <span className="text-xs">* Conduct monthly audits to detect any violations, analyze the data collected, and prepare reports based
                                        on the findings
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12 gap-4">
                        {technologies.map((tech, index) => (
                            <div style={{ animation: 'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both' }}>
                                <div class={`w-full bg-dark duration-200 rounded-2xl cursor-pointer`}>
                                    <div
                                        class={`bg-light rounded-2xl py-4 px-8 flex items-center justify-center border-slate-900 border-2 duration-200 -translate-x-1 -translate-y-1 w-full`}
                                    >
                                        <div className='flex flex-col items-center justify-center gap-2'>
                                            <tech.icon className="w-6 h-6" />
                                            <span className="font-bold">
                                                {tech.name}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
