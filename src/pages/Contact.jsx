import React from 'react';
import { Link } from "react-router-dom";
import { SiAircanada } from "react-icons/si";
import { PiLinkedinLogo } from "react-icons/pi";
import { AiOutlineGithub, AiOutlineMail } from "react-icons/ai";
import { BsArrowRight, BsArrowDown } from "react-icons/bs";
import { IoMdTime } from "react-icons/io"
import Clock from '../components/Clock';
import Background from '../components/Background';

export default function Contact() {
    return (
        <section className='flex relative sm:h-screen z-10'>
            <Background/>
            {/* <div className='absolute top-0 left-36 bg-gradient-to-r to-bgBasic from-bgSkill w-1/2 h-4/5 opacity-100'></div> */}
            <div className='relative flex lg:flex-row flex-col py-28 px-8 md:px-16 h-full'>
              <div className='lg:w-1/2 flex flex-col justify-center'>
                  <p className='uppercase font-semibold opacity-80 font-title'>Contact</p>
                  <h1 className='uppercase text-7xl lg:text-8xl mt-3 mb-5 font-point'>Let's<br/>work<br/> togeter</h1>
                  <p className='text-lg opacity-70'>I'm a dedicated front-end developer with a passion for creating exceptional web experiences. I'm eager to collaborate, learn, and contribute to your team's success. Feel free to reach out, and let's build something great together!</p>              
              </div>
              <div className='grid grid-flow-col grid-rows-5 sm:grid-cols-2 sm:grid-rows-3 lg:place-self-center my-10 lg:my-0 lg:mx-5'>       
                  <div className='w-full'>
                    <p className='text-xl font-title'>Heeyoung Yang</p>
                    <p className=''>Front-end Developer</p>
                  </div>
                  <div className='w-fit row-span-1 sm:row-span-2 items-start text-xl font-title'>
                    <div className='flex items-center'>Get in touch
                      <BsArrowRight className='hidden ml-1 animate-textMoving sm:flex items-center'/>
                      <BsArrowDown className='ml-1 animate-bounce flex sm:hidden items-center'/>
                    </div>
                  </div>
                  <div>
                    <p className='opacity-70 uppercase font-title'>Contact Details</p>
                    <Link 
                      to="#" 
                      className='flex items-center mt-1'
                      onClick={(e) => {
                        window.location.href = 'mailto:dev.heeyoung@gmail.com';
                        e.preventDefault();
                      }}
                      >
                      <AiOutlineMail className="text-xl hover:opacity-80 mr-1" />
                      <p className='font-semibold'>dev.heeyoung@gmail.com</p>
                    </Link>
                  </div>
                  <div>
                    <p className='opacity-70 uppercase font-title'>Socials</p>
                    <div className="flex w-fit mt-1">
                      <Link to="https://www.linkedin.com/in/heeyoung-yang/">
                        <PiLinkedinLogo className="text-2xl mr-1 hover:opacity-80" />
                      </Link>
                      <Link to="https://github.com/dev-heeyoung">
                        <AiOutlineGithub className="text-2xl hover:opacity-80" />
                      </Link>
                    </div>
                  </div>
                  <div>
                    <p className='opacity-70 uppercase font-title'>Location / Local Time</p>
                    <div className='flex items-center mt-1'>
                      <SiAircanada className="text-xl mr-1" />
                      <p className='font-semibold'>Toronto, Canada</p>
                    </div>
                    <div className='flex items-center'>
                      <IoMdTime className="text-xl mr-1"/>
                      <Clock />
                    </div>
                  </div>
                
              </div>
            </div>
        </section>
    );
}

