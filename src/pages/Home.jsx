import React from 'react';
import { Link } from 'react-router-dom'
import { SiAircanada } from 'react-icons/si' 
import { PiLinkedinLogo } from 'react-icons/pi' 
import { AiOutlineGithub } from 'react-icons/ai' 

export default function Home() {

    return (
        <section className='h-screen w-full flex text-center items-center'>
            <div class="lines absolute w-screen h-screen">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>

            <div className='flex flex-col w-fit mx-16'>
                <Link to=''><PiLinkedinLogo className='text-3xl my-2 opacity-70 hover:opacity-100' /></Link>
                <Link to=''><AiOutlineGithub className='text-3xl my-2 opacity-70 hover:opacity-100'/></Link>
            </div>
            <div className='w-1/3 justify-center'>
                <div className='relative max-w-screen-lg'>
                    <div className='flex flex-col'>
                        <div className='w-full h-128'>
                            <div className='w-full'>
                                <div className='transition-all 5s ease-linear absolute w-full h-full left-28 cursor-pointer bg-mainSub bg-cover bg-top contrast-50 hover:contrast-75'></div>
                            </div>
                        </div>
                        <div className='relative w-full text-left z-20'>
                            <div className='w-full h-8 leading-6 relative flex items-center overflow-hidden'>
                                <div class="animate-textSlide absolute top-0 font-bold text-3xl p-0 uppercase text-point tracking-wide">Heeyoung Yang<br/>Web Developer<br/>Software Developer</div>
                            </div>
                            <p className='mt-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia quibusdam soluta quaerat corporis, vitae maxime vero, modi eius animi quos aliquid voluptas? Ipsa nobis, numquam quis aliquid enim pariatur voluptates.</p>
                        </div>
                    </div>
                </div>
        
                <div className='absolute left-0 bottom-5 pl-16 pr-5 py-3 flex items-center'>
                    <SiAircanada className='text-red-700 mr-2'/>
                    <p className='opacity-70'>Located in Toronto, Canada</p>
                </div>
            </div>
            <div className='w-4/5 flex flex-col text-left text-9xl pl-20 font-point uppercase z-20'>
                <Link to='' className='my-2 w-fit hover:animate-categorySlide hover:italic'>work</Link>
                <Link to='' className='my-2 w-fit hover:animate-categorySlide hover:italic'>about</Link>
                <Link to='' className='my-2 w-fit hover:animate-categorySlide hover:italic'>testimonials</Link>
                <Link to='' className='my-2 w-fit hover:animate-categorySlide hover:italic'>contact</Link>
            </div>
        </section>
    );
}

