import React from "react";
import { Link } from "react-router-dom";
import { SiAircanada } from "react-icons/si";
import { PiLinkedinLogo } from "react-icons/pi";
import { AiOutlineGithub } from "react-icons/ai";
import Background from "../components/Background";

export default function Home() {
  return (
    <section className="relative min-h-screen w-full ">
      <Background/>
      <div className="px-8 md:px-16 min-h-screen flex flex-col lg:flex-row text-center lg:items-center">
        <div className="hidden lg:flex flex-col w-fit ">
          <Link to="https://www.linkedin.com/in/heeyoung-yang/">
            <PiLinkedinLogo className="text-3xl my-2 opacity-70 hover:opacity-100" />
          </Link>
          <Link to="https://github.com/dev-heeyoung">
            <AiOutlineGithub className="text-3xl my-2 opacity-70 hover:opacity-100" />
          </Link>
        </div>
        <div className="justify-center lg:min-h-screen">
          <div className="relative h-full">
            <div className="flex flex-col ">
              <div className="w-full h-72 md:h-96 lg:h-128">
                <div className="">
                  <div className="absolute left-12 lg:left-28 w-full h-full scale-75 lg:scale-100 bg-mainSub bg-cover bg-top contrast-50 "></div>
                </div>
              </div>
              <div className="w-full text-left mt-10 xl:mt-20 z-20">
                <div className="w-full h-8 leading-6 relative flex items-center overflow-y-hidden">
                  <div class="w-full animate-textSlide absolute font-bold text-3xl p-0 uppercase text-point tracking-wide">
                    Heeyoung Yang
                    <br />
                    Front-end Developer
                    <br />
                    Software Developer
                  </div>
                </div>
                <p className="mt-5">
                I'm an enthusiastic junior front-end developer, ready to bring a dynamic edge to web development projects with my evolving skillset and dedication to creating exceptional user experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:w-4/5 flex flex-col text-left text-6xl sm:text-7xl xl:text-8xl 2xl:text-9xl lg:pl-20 mt-16 lg:mt-0 font-point uppercase z-30 mb-28 lg:mb-0">
          <Link
            to="/work"
            className="my-2 w-fit hover:animate-categorySlide hover:italic"
          >
            work
          </Link>
          <Link
            to="/about"
            className="my-2 w-fit hover:animate-categorySlide hover:italic"
          >
            about
          </Link>
          <Link
            to="/testimonials"
            className="my-2 w-fit hover:animate-categorySlide hover:italic"
          >
            testimonials
          </Link>
          <Link
            to="/contact"
            className="my-2 w-fit hover:animate-categorySlide hover:italic"
          >
            contact
          </Link>
        </div>
        <div className="absolute left-0 bottom-5 pl-8 md:pl-16 pr-5 py-3 flex items-center">
            <SiAircanada className="text-red-700 mr-2" />
            <p className="opacity-70">Located in Toronto, Canada</p>
        </div>
      </div>
    </section>
  );
}
