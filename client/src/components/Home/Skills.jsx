"use client";
import React from "react";
import { FaHtml5 } from "react-icons/fa6";
import { IoIosArrowDown, IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { SiReact } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { PiFramerLogoFill } from "react-icons/pi";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiCloudinary } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { TbApi } from "react-icons/tb";
import { SiPostman } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const skills = [
  {
    color: "text-red-600",
    icon: <FaHtml5 />,
    name: "HTML",
  },
  {
    color: "text-blue-400",
    icon: <IoLogoCss3 />,
    name: "CSS",
  },
  {
    color: "text-yellow-400",
    icon: <IoLogoJavascript />,
    name: "JavaScript",
  },
  {
    color: "text-black",
    icon: <RiNextjsFill />,
    name: "NextJS",
  },
  {
    color: "text-blue-400",
    icon: <SiReact />,
    name: "ReactJS",
  },
  {
    color: "text-blue-400",
    icon: <SiTailwindcss />,
    name: "TailwindCSS",
  },
  {
    color: "text-blue-600",
    icon: <SiMui />,
    name: "Material-UI",
  },
  {
    color: "text-yellow-600",
    icon: <PiFramerLogoFill />,
    name: "Framer",
  },
  {
    color: "text-green-600",
    icon: <FaNodeJs />,
    name: "Node JS",
  },
  {
    color: "text-gray-600",
    icon: <SiExpress />,
    name: "Express",
  },
  {
    color: "text-blue-600",
    icon: <SiCloudinary />,
    name: "Cloudinary",
  },
  {
    color: "text-green-600",
    icon: <SiMongodb />,
    name: "MongoDB",
  },
  {
    color: "text-red-600",
    icon: <FaJava />,
    name: "Java",
  },
  {
    color: "text-red-600",
    icon: <TbApi />,
    name: "API Development",
  },
  {
    color: "text-orange-600",
    icon: <SiPostman />,
    name: "Postman",
  },
  {
    color: "text-black",
    icon: <FaGithub />,
    name: "Github",
  },

  {
    color: "text-orange-400",
    icon: <FaGitAlt />,
    name: "Git",
  },
];

const Skills = () => {
  return (
    <div className="lg:px-20 px-8 py-10">
      <div className="">
        <motion.h1
          initial={{ opacity: 0, scale: 0.4, x: 100 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 50 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold"
        >
          <span className="text-4xl font-normal hello text-orange-400">
            Skills
          </span>{" "}
          that I know
        </motion.h1>
        <div className="flex justify-center md:px-10">
          <motion.h5
            initial={{ opacity: 0, scale: 0.4, y: 100 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 50 }}
            viewport={{ once: true }}
            className="py-5 md:text-center text-justify"
          >
            I am an enthusiastic, self-motivated, reliable, responsible and hard
            working person. I am a good team worker and adaptable to all
            challenging situations. I am able to work well both in a team
            environment as well as using own initiative. I am able to work well
            under pressure and adhere to strict deadlines.
          </motion.h5>
        </div>{" "}
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-3 text-center md:flex flex-wrap justify-center items-center gap-5 lg:gap-10 py-8 max-w-[900px]">
          {skills.map((skill, i) => {
            return (
              <motion.div
                initial={{ opacity: 0, scale: 0.4, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 50,
                  delay: i / 10,
                }}
                viewport={{ once: true }}
                key={i}
                className={`${skill.color}`}
              >
                <div className="flex justify-center">
                <div className="w-fit h-fit border border-b-4 text-3xl md:text-5xl rounded-full  p-5 ">
                  {skill.icon}
                </div>
                </div>
                <div className="flex justify-center">
                <h1 className="text-center text-sm pt-2">{skill.name}</h1>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
