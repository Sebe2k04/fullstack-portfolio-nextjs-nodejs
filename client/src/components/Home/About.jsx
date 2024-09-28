import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="lg:px-20 px-8 py-10 ">
      <h1 className="text-5xl  hello">
        About <span className="text-orange-500">Myself</span>
      </h1>
      <div className="pt-8 grid gap-5 lg:grid-cols-2">
        <div className="lg:order-1 order-2">
          <h3 className="text-justify">
            I am a Computer Science Enginnering graduate with expertise in
            fullstack web development, specializing in the MERN stack (MongoDB,
            Express, React, Node.js). My skills include building dynamic,
            responsive web applications, integrating both frontend and backend
            seamlessly. I have hands-on experience with Next.js for server-side
            rendering, enhancing performance, and scalability. Additionally, I
            am proficient in creating user-friendly interfaces, managing
            databases, and developing RESTful APIs. My education in computer
            science has provided me with a strong foundation in programming,
            algorithms, and software development practices, enabling me to build
            efficient, scalable, and user-focused web applications.
          </h3>
          <div className="">
            <h1 className="font-semibold text-2xl py-5">Current Position</h1>
            <div className="border  p-5 rounded-xl shadow-inner  border-l-8">
              <h3 className="font-semibold md:text-xl">Full Stack Developer Intern</h3>
              <div className="flex justify-between text-sm pt-1">
              <p>Axolotron</p>
              <p>April 2024 - Present</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:order-2 order-1">
          <Image src="/profile.png" width="1000" height="1000" alt="" className="md:max-w-[400px] rounded-2xl mx-auto border-r-8 border-b-8" />
        </div>
      </div>
    </div>
  );
};

export default About;
