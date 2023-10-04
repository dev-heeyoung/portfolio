import React from "react";
import { BiSolidQuoteAltLeft } from 'react-icons/bi'

export default function TestimonialCard({ testimonial: {img, des, name, company, position, by} }) {
  return (
    <div className="relative flex flex-col w-96 h-fit border rounded-2xl text-center px-10 pt-20 pb-10 my-16 mx-8 bg-textBasic text-bgBasic shadow-lg break-inside-avoid ">
      <BiSolidQuoteAltLeft className='absolute top-10 left-5 text-9xl opacity-30 z-10'/>
      <div className={`absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/3 rounded-full bg-${img} bg-cover w-20 h-20 shadow-lg`} />
      <div className="relative block z-20">
        <div className="mb-10 text-lg">
          <p className="font-title">{des}</p>
        </div>
        <h1 className="text-2xl">{name}</h1>
        <div className="flex justify-center opacity-70">
          <p>{company}</p>
          <p className="mx-1 ">/</p>
          <p>{position}</p>
        </div>
        <p className="opacity-70 mt-5">{by}</p>
      </div>
    </div>
  );
}
