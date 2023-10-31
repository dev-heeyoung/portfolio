import React from 'react';

export default function Background() {
  return (
    <div className="absolute w-screen h-full z-0">
      <div className="hidden md:block w-screen">
        <div className="h-full w-[1px] bg-opacity-10 bg-white absolute top-0 left-1/4 overflow-hidden">
          <div className="animate-dropDelay1 block absolute h-[15vh] w-full left-0 -top-1/2 bg-gradient-to-b from-transparent via-white to-white "></div>
        </div>
      </div>
      <div className="w-screen ">
        <div className="h-full w-[1px] bg-opacity-10 bg-white absolute top-0 left-1/2 overflow-hidden">
          <div className="animate-drop block absolute h-[15vh] w-full left-0 -top-1/2 bg-gradient-to-b from-transparent via-white to-white"></div>
        </div>
      </div>
      <div className="hidden md:block  w-screen ">
        <div className="h-full w-[1px] bg-opacity-10 bg-white absolute top-0 right-1/4 ml-1/4 overflow-hidden">
          <div className="animate-dropDelay2 block absolute h-[15vh] w-full left-0 -top-1/2 bg-gradient-to-b from-transparent via-white to-white"></div>
        </div>
      </div>
    </div>
  );
}
