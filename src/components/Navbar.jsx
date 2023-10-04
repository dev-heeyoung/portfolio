import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineGithub } from "react-icons/ai";
import { CiSquareRemove } from "react-icons/ci";
import { PiLinkedinLogo } from "react-icons/pi";

export default function Navbar() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [isMenuHovered, setIsMenuHovered] = useState([
    false,
    false,
    false,
    false,
  ]);

  const handleMenuClick = () => setIsMenuClicked((prev) => !prev);
  const handleMenuHover = (e) => {
    switch (e.target.innerText) {
      case "WORK":
        setIsMenuHovered((prev) =>
          prev.map((status, index) => index === 0 && !status),
        );
        break;
      case "ABOUT":
        setIsMenuHovered((prev) =>
          prev.map((status, index) => index === 1 && !status),
        );
        break;
      case "TESTIMONIALS":
        setIsMenuHovered((prev) =>
          prev.map((status, index) => index === 2 && !status),
        );
        break;
      case "CONTACT":
        setIsMenuHovered((prev) =>
          prev.map((status, index) => index === 3 && !status),
        );
        break;
      default:
    }
  };

  return (
    <header className="absolute w-full z-50">
      <div className="relative flex justify-between mx-auto px-16 py-10 ">
        <Link to="/" className="">
          H
        </Link>
        <div>
          <div>
            <AiOutlineMenu
              onClick={handleMenuClick}
              className="block text-2xl cursor-pointer "
            />
          </div>
          <div
            className={`${
              isMenuClicked
                ? "transition-all 3s ease-in top-0 right-0 "
                : "-right-1/4 top-0"
            } transition-all 5s ease-in absolute flex flex-col justify-between py-10 px-16 h-screen w-1/4 text-left font-title text-bgBasic bg-textBasic`}
          >
            <div className="w-full flex justify-end">
              <CiSquareRemove
                onClick={handleMenuClick}
                className="text-3xl cursor-pointer"
              />
            </div>
            <div className="border-b border-bgBasic py-3 text-sm opacity-70">
              NAVIGATION
            </div>
            <nav className="flex flex-col text-3xl font-title uppercase">
              <Link
                to="/work"
                className="my-3 flex items-center hover:animate-bounce"
              >
                <div
                  className={`h-2 w-2 bg-bgBasic rounded-full opacity-0 ${
                    isMenuHovered[0] && "animate-ping opacity-100"
                  }`}
                />
                <p
                  onMouseEnter={handleMenuHover}
                  onMouseLeave={handleMenuHover}
                  className="pl-5 opacity-80 hover:opacity-100"
                >
                  work
                </p>
              </Link>
              <Link
                to="/about"
                className="my-3 flex items-center hover:animate-bounce"
              >
                <div
                  className={`h-2 w-2 bg-bgBasic rounded-full opacity-0 ${
                    isMenuHovered[1] && "animate-ping opacity-100"
                  }`}
                />
                <p
                  onMouseEnter={handleMenuHover}
                  onMouseLeave={handleMenuHover}
                  className="pl-5 opacity-80 hover:opacity-100"
                >
                  about
                </p>
              </Link>
              <Link
                to="/testimonials"
                className="my-3 flex items-center hover:animate-bounce"
              >
                <div
                  className={`h-2 w-2 bg-bgBasic rounded-full opacity-0 ${
                    isMenuHovered[2] && "animate-ping opacity-100"
                  }`}
                />
                <p
                  onMouseEnter={handleMenuHover}
                  onMouseLeave={handleMenuHover}
                  className="pl-5 opacity-80 hover:opacity-100"
                >
                  testimonials
                </p>
              </Link>
              <Link
                to="/contact"
                className="my-3 flex items-center hover:animate-bounce"
              >
                <div
                  className={`h-2 w-2 bg-bgBasic rounded-full opacity-0 ${
                    isMenuHovered[3] && "animate-ping opacity-100"
                  }`}
                />
                <p
                  onMouseEnter={handleMenuHover}
                  onMouseLeave={handleMenuHover}
                  className="pl-5 opacity-80 hover:opacity-100"
                >
                  contact
                </p>
              </Link>
            </nav>
            <div className="flex w-full border-t border-bgBasic py-5 justify-items-end">
              <Link to="" className="flex mr-4">
                <PiLinkedinLogo className="text-2xl mr-1 opacity-70 hover:opacity-100" />
                LinkedIn
              </Link>
              <Link to="" className="flex">
                <AiOutlineGithub className="text-2xl mr-1 opacity-70 hover:opacity-100" />
                Github
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
