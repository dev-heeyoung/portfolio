import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineGithub } from "react-icons/ai";
import { CiSquareRemove } from "react-icons/ci";
import { PiLinkedinLogo } from "react-icons/pi";

export default function Navbar() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50">
      <div className=" flex justify-between mx-auto px-8 md:px-16 py-10 ">
        <Link to="/" className="">
          H
        </Link>
        <div>
          <div>
            <AiOutlineMenu
              onClick={()=>setIsMenuClicked(true)}
              className="block text-2xl cursor-pointer "
            />
          </div>
          <div
            className={`${
              isMenuClicked
                ? "transition-all 3s ease-in w-96 2xl:w-1/4"
                : "w-0 "
            } transition-all 5s ease-in fixed text-left font-title h-screen text-bgBasic bg-textBasic top-0 right-0 `}
          >
            <div 
              onMouseLeave={()=>setIsMenuClicked(false)}
              className="flex flex-col justify-between h-full py-10 px-16 w-full z-50">
              <div className="w-full flex justify-end">
                <CiSquareRemove
                  onClick={()=>setIsMenuClicked(false)}
                  className="text-3xl cursor-pointer"
                />
              </div>
              <div className="border-b border-bgBasic py-3 text-sm opacity-70">
                NAVIGATION
              </div>
              <nav className="flex flex-col text-3xl font-title uppercase">
                <Link
                  to="/"
                  className="group my-3 flex items-center hover:animate-bounce"
                  onClick={()=>setIsMenuClicked(false)}
                >
                  <div className='h-2 w-2 bg-bgBasic rounded-full opacity-0 group-hover:animate-ping group-hover:opacity-100'/>
                  <p className="pl-5 opacity-80 hover:opacity-100">
                    home
                  </p>
                </Link>
                <Link
                  to="/work"
                  className="group my-3 flex items-center hover:animate-bounce"
                  onClick={()=>setIsMenuClicked(false)}
                >
                  <div className='h-2 w-2 bg-bgBasic rounded-full opacity-0 group-hover:animate-ping group-hover:opacity-100'/>
                  <p className="pl-5 opacity-80 hover:opacity-100">
                    work
                  </p>
                </Link>
                <Link
                  to="/about"
                  className="group my-3 flex items-center hover:animate-bounce"
                  onClick={()=>setIsMenuClicked(false)}
                >
                  <div className='h-2 w-2 bg-bgBasic rounded-full opacity-0 group-hover:animate-ping group-hover:opacity-100'/>
                  <p className="pl-5 opacity-80 hover:opacity-100">
                    about
                  </p>
                </Link>
                <Link
                  to="/testimonials"
                  className="group my-3 flex items-center hover:animate-bounce"
                  onClick={()=>setIsMenuClicked(false)}
                >
                  <div className='h-2 w-2 bg-bgBasic rounded-full opacity-0 group-hover:animate-ping group-hover:opacity-100'/>
                  <p className="pl-5 opacity-80 hover:opacity-100">
                    testimonials
                  </p>
                </Link>
                <Link
                  to="/contact"
                  className="group my-3 flex items-center hover:animate-bounce"
                  onClick={()=>setIsMenuClicked(false)}
                >
                  <div className='h-2 w-2 bg-bgBasic rounded-full opacity-0 group-hover:animate-ping group-hover:opacity-100'/>
                  <p className="pl-5 opacity-80 hover:opacity-100">
                    contact
                  </p>
                </Link>
              </nav>
              <div className="flex w-full border-t border-bgBasic py-5 justify-items-end">
                <Link to="https://www.linkedin.com/in/heeyoung-yang/" className="flex mr-4 opacity-70 hover:opacity-100">
                  <PiLinkedinLogo className="text-2xl mr-1" />
                  LinkedIn
                </Link>
                <Link to="https://github.com/dev-heeyoung" className="flex opacity-70 hover:opacity-100">
                  <AiOutlineGithub className="text-2xl mr-1" />
                  Github
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
