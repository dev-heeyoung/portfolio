import React from "react";

export default function ProjectCard({
  name,
  client,
  location,
  date,
  des,
  skillSet,
}) {
  return (
    <section className="h-128 z-20">
      <div className="relative w-full h-full flex flex-wrap justify-center">
        <div className="relative border p-5 m-5 rounded-lg cursor-pointer bg-textBasic text-bgBasic transform transition-transform hover:translate-x-3 hover:-translate-y-3">
          <div className="grid grid-rows-5 w-full h-full">
            <p className="text-sm opacity-70 uppercase">
              web design & development
            </p>
            <h3 className="text-3xl font-title font-semibold text-bgBasic">
              {name}
            </h3>
            <div>
              <p className="text-sm">{client}</p>
              <div className="flex text-sm">
                <p>{location}/</p>
                <p>{date}</p>
              </div>
            </div>
            <p className="flex flex-wrap">{des}</p>
            <ul className="flex flex-wrap h-fit border-t border-bgBasic py-2">
              {skillSet.map((skill) => (
                <li className="border-bgBasic bg-bgSkill rounded-full px-2.5 py-1 my-0.5 text-white text-sm font-title mr-1 uppercase">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className="absolute w-full h-full left-0 top-0 border rounded-lg transform transition-transform hover:-translate-x-3 hover:translate-y-3" />
        </div>
      </div>
    </section>
  );
}
