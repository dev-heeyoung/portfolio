import React from 'react';
import { Link } from "react-router-dom";
import { SiAircanada } from "react-icons/si";
import { PiLinkedinLogo } from "react-icons/pi";
import { AiOutlineGithub, AiOutlineMail } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { IoMdTime } from "react-icons/io"
import Clock from '../components/Clock';

export default function Contact() {
    



    return (
        <section className='relative w-screen h-screen flex flex-col items-end overflow-hidden'>
            <div class="lines absolute w-screen h-screen z-0">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <div className='absolute top-0 left-36 bg-bgSkill w-1/2 h-4/5 bg-cover bg-center opacity-90'></div>
            <div className='relative grid grid-cols-2 grid-rows-2 gap-10 max-w-screen-md my-32 mr-64'>
              <div className='col-span-2 '>
                  <p className='uppercase font-semibold opacity-80 font-title'>Contact</p>
                  <h1 className='uppercase text-8xl mt-3 mb-5 font-point'>Let's<br/>work<br/> togeter</h1>
                  <p className='text-lg opacity-70'>Ratione iure repellat voluptatum sit eos dolor exercitationem, eaque natus voluptates, <br/> error libero facilis fugiat voluptatibus non aspernatur odio!</p>              
                </div>
              <div >
                <p className='text-xl font-title'>Heeyoung Yang</p>
                <p className=''>Software Developer</p>
                <p className='w-fit py-1 text-xl my-5 flex items-center font-title'>Get in touch
                  <BsArrowRight className='ml-1 animate-textMoving '/>
                </p>
              </div>
              <div className='w-full text-left z-50'>
                <div>
                  <p className='opacity-70 uppercase font-title'>Contact Details</p>
                  <Link to="" className='flex items-center mt-1'>
                    <AiOutlineMail className="text-xl hover:opacity-80 mr-1" />
                    <p className='font-semibold'>dev.heeyoung@gmail.com</p>
                  </Link>
                </div>
                <div>
                  <p className='opacity-70 uppercase mt-5 font-title'>Socials</p>
                  <div className="flex w-fit mt-1">
                    <Link to="">
                      <PiLinkedinLogo className="text-2xl mr-1 hover:opacity-80" />
                    </Link>
                    <Link to="">
                      <AiOutlineGithub className="text-2xl hover:opacity-80" />
                    </Link>
                  </div>
                </div>
                <div>
                  <p className='opacity-70 uppercase mt-5 font-title'>Location / Local Time</p>
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


/*
name

location 
local time

email
linkedIn
github

*/