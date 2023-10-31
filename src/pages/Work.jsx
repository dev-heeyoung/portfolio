import React from "react";
import ProjectCard from "../components/ProjectCard";
import Background from "../components/Background";

export default function Work() {
  return (
    <section className="h-full w-screen relative">
      <Background/>
      <div className="pt-32 px-8 md:px-16 w-full">
        <h1 className="uppercase text-6xl md:text-8xl mb-5 font-point">portfolio</h1>
        <p className="text-lg mb-10">
        Welcome to my work page, where I showcase a curated selection of projects that reflect my passion for innovation and commitment to excellence.<br/> Explore these endeavors to gain insight into my expertise and creative approach.
        </p>
      </div>
      <div className="w-full flex flex-wrap border-t py-10 relative">
        <ProjectCard
          name="Heepify"
          location="Toronto, Canada"
          date="2023"
          des="Designed and developed an e-commerce website that incorporates functionality for user authentication as well as a shopping cart feature."
          skillSet={["react", "html", "tailwindCSS", "firebase"]}
          link='https://zippy-sopapillas-7db6b2.netlify.app'
        />
        <ProjectCard
          name="Dwitter"
          location="Toronto, Canada"
          date="2022"
          des="Developed the chat application utilizes a secure authentication system to safeguard user access and employs a RESTful API for real-time messaging and interaction, enhancing privacy and responsiveness."
          skillSet={["html", "css", "javascript", "nodejs", "restapi", "mysql"]}
          link='https://dwitterclone.netlify.app/'
        />
        {/* <ProjectCard
          name="Coming Soon"
          location="location"
          date="date"
          des="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
          skillSet={[]}
        />
        <ProjectCard
          name="Coming Soon"
          location="location"
          date="date"
          des="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
          skillSet={[]}
        /> */}
      </div>
    </section>
  );
}
