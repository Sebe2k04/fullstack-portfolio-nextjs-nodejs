"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="lg:px-20 px-8 py-10 ">
      <motion.h1
        initial={{ opacity: 0.5, scale: 0.4, x: 50 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 50 }}
        viewport={{ once: true }}
        className="text-5xl  hello"
      >
        About <span className="text-orange-500">Myself</span>
      </motion.h1>
      <div className="pt-8 grid gap-5 lg:grid-cols-2">
        <div className="lg:order-1 order-2 my-auto ">
          <motion.h3
            initial={{ opacity: 0.2 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 100 }}
            className="text-justify "
          >
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
          </motion.h3>
          {/* <div className="">
            <h1 className="font-semibold text-2xl py-5">Current Position</h1>
            <div className="border  p-5 rounded-xl shadow-inner  border-l-8">
              <h3 className="font-semibold md:text-xl">Full Stack Developer Intern</h3>
              <div className="flex justify-between text-sm pt-1">
              <p>Axolotron</p>
              <p>April 2024 - Present</p>
              </div>
            </div>
          </div> */}
          <motion.div
            initial={{ opacity: 0.5, scale: 0.8, x: 0, rotateZ: 10 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, rotateZ: 0 }}
            transition={{  duration: 1 }}
            viewport={{ once: true }}
            className="flex gap-2 mt-5 items-center bg-gradient-to-br from-yellow-500 to-red-400 text-white border-2 py-2 px-3 border-yellow-200 rounded-3xl backdrop-blur-md w-fit  shadow-red-300 shadow-inner"
          >
            <section className="flex gap-5 px-2 ">
              <Link
                href={"/#contact"}
                className="  font-semibold flex gap-2 items-center "
              >
                <h1>Contact Me</h1>
              </Link>
            </section>
          </motion.div>
        </div>
        <div className="lg:order-2 order-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.4, y: -100 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 50 }}
            viewport={{ once: true }}
            className=""
          >
            <Image
              src="/profile.png"
              width="1000"
              height="1000"
              alt=""
              className="md:max-w-[400px] rounded-2xl mx-auto border-r-8 border-b-8"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
