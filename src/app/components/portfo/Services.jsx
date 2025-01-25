import React from 'react';

export const Services = ({ }) => {

    return (
        <div className="w-screen relative flex items-center justify-center flex-col bg-portfoRedLightBG">
            <div className='w-full h-full bg-portfoYellowDirtyCardBG flex items-center justify-center'>
                <div className="w-full xl:w-[1200px] 2xl:w-[1500px] h-full flex flex-col items-center gap-8 px-10 xl:px-0 xl:py-0">
                    <div class="w-fit mx-auto flex flex-col space-y-8 pb-4 my-8">
                        <div class="sticky top-4 flex-none w-52 md:w-96 border-2 border-solarized-red rounded-lg overflow-hidden shadow-lg">
                            <div class="p-4 bg-portfoYellowDirtyCardBG ">
                                <h3 class="text-lg font-serif font-semibold mb-2 text-solarized-red">Web Development</h3>
                                <p class="font-mono text-xs tracking-tight leading-relaxed">Building fast, secure, and visually stunning websites, from interactive landing pages to fully functional web applications. I specialize in modern frameworks and scalable architectures to ensure top-notch performance and reliability</p>
                            </div>
                        </div>
                        <div class="translate-x-1/3 rotate-6 sticky top-8 flex-none w-52 md:w-96 border-2 border-solarized-blue rounded-lg overflow-hidden shadow-lg">
                            <div class="p-4 bg-portfoYellowDirtyCardBG ">
                                <h3 class="text-lg font-serif font-semibold mb-2 text-solarized-blue">SaaS Solutions</h3>
                                <p class="font-mono text-xs tracking-tight leading-relaxed">Developing software-as-a-service platforms tailored to your business needs. Whether it's task management or e-commerce, I create scalable and efficient solutions that grow with your business</p>
                            </div>
                        </div>
                        <div class="-translate-x-1/3 -rotate-6 sticky top-12 flex-none w-52 md:w-96 border-2 border-solarized-green rounded-lg overflow-hidden shadow-lg">
                            <div class="p-4 bg-portfoYellowDirtyCardBG ">
                                <h3 class="text-lg font-serif font-semibold mb-2 text-solarized-green">Technical Support</h3>
                                <p class="font-mono text-xs tracking-tight leading-relaxed">Offering reliable technical support to keep your applications running smoothly. From troubleshooting to maintenance, I ensure your systems stay secure and up-to-date</p>
                            </div>
                        </div>
                        <div class="translate-x-1/3 rotate-12 sticky top-16 flex-none w-52 md:w-96 border-2 border-solarized-magenta rounded-lg overflow-hidden shadow-lg">
                            <div class="p-4 bg-portfoYellowDirtyCardBG ">
                                <h3 class="text-lg font-serif font-semibold mb-2 text-solarized-magenta">Mobile Development</h3>
                                <p class="font-mono text-xs tracking-tight leading-relaxed">Creating user-friendly mobile applications for iOS and Android. Whether it's native or cross-platform development, I bring your ideas to life with a seamless user experience</p>
                            </div>
                        </div>
                        <div class="-translate-x-1/3 -rotate-12 sticky top-20 flex-none w-52 md:w-96 border-2 border-solarized-yellow rounded-lg overflow-hidden shadow-lg">
                            <div class="p-4 bg-portfoYellowDirtyCardBG ">
                                <h3 class="text-lg font-serif font-semibold mb-2 text-solarized-yellow">Digital Marketing</h3>
                                <p class="font-mono text-xs tracking-tight leading-relaxed">Boosting your online presence with data-driven marketing strategies. From SEO to social media campaigns, I help you connect with your target audience and achieve measurable results</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
