import React from "react";
import { Link } from "react-router-dom";
import { GoLinkExternal } from 'react-icons/go'

export default function ProjectCard({
  name,
  location,
  date,
  des,
  skillSet,
  link
}) {
  return (
    <Link to={link} className="z-20 h-128 sm:w-1/2 lg:w-1/3 xl:w-1/4">
      <div className="relative flex justify-center h-full">
        <div className="group relative border p-5 m-5 rounded-lg cursor-pointer bg-textBasic text-bgBasic transform transition-transform hover:translate-x-3 hover:-translate-y-3">
          <div className="flex flex-col w-full h-full justify-between relative z-20">
            <p className="text-sm opacity-70 uppercase ">
              web design & development
            </p>
            <div className="flex items-center">
              <h3 className="text-3xl font-title font-semibold text-bgBasic uppercase">
                {name}
              </h3>
              <Link to={link}><GoLinkExternal className='mx-2 text-xl cursor-pointer'/></Link>
            </div>
            <div>
              <div className="text-sm opacity-70 italic">
                <p>{location}</p>
                <p>{date}</p>
              </div>
            </div>
            <p className="flex flex-wrap ">{des}</p>
            <ul className="flex flex-wrap h-16 mt-2 border-t border-bgBasic py-2">
              {skillSet.map((skill) => (
                <li className="border-bgBasic bg-bgSkill rounded-full h-fit px-2.5 py-1 my-0.5 text-white text-sm font-title mr-1 uppercase">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className="absolute w-full h-full left-0 top-0 border border-textBasic rounded-lg bg-transparent transform transition-transform group-hover:-translate-x-3 group-hover:translate-y-3 z-0" />
        </div>
      </div>
    </Link>
  );
}
