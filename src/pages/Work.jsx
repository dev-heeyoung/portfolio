import React from "react";
import ProjectCard from "../components/ProjectCard";

export default function Work() {
  return (
    <section className="h-screen w-full">
      <div class="lines absolute w-screen h-screen z-0">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <div className="pt-32 px-16 w-full">
        <h1 className="uppercase text-8xl mb-5 font-point">portfolio</h1>
        <p className="text-lg mb-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          <br /> Ratione iure repellat voluptatum sit eos dolor exercitationem,
          eaque natus voluptates, hic quam vitae, error libero facilis fugiat
          voluptatibus non aspernatur odio!
        </p>
      </div>
      <div className="w-full grid grid-cols-4 gap-16 border-t px-8 py-10">
        <ProjectCard
          name="projectName"
          client="client"
          location="location"
          date="date"
          des="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
          skillSet={["react", "html", "css"]}
        />
        <ProjectCard
          name="projectName"
          client="client"
          location="location"
          date="date"
          des="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
          skillSet={["react", "html", "css"]}
        />
        <ProjectCard
          name="Coming Soon"
          client="client"
          location="location"
          date="date"
          des="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
          skillSet={["react", "html", "css"]}
        />
        <ProjectCard
          name="Coming Soon"
          client="client"
          location="location"
          date="date"
          des="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
          skillSet={["react", "html", "css"]}
        />
      </div>
    </section>
  );
}
