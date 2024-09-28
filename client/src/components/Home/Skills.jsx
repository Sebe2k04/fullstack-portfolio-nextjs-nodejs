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

const Skills = () => {
  return (
    <div className="lg:px-20 px-8 py-10">
    <div className="">
          <h1 className="text-3xl font-semibold">
            <span className="text-4xl font-normal hello text-orange-400">
              Skills
            </span>{" "}
            that I know
          </h1>
        </div>
      <div className="flex justify-center">
        
        <div className="grid grid-cols-3 text-center md:flex flex-wrap justify-center items-center gap-10 py-8 max-w-[900px]">
          <div className="text-red-600">
            <div className="w-fit h-fit border border-b-4  rounded-full p-5 ">
              <FaHtml5 className="text-3xl md:text-5xl  " />
            </div>
            <h1 className="text-center text-sm pt-2">HTML</h1>
          </div>
          <div className="text-blue-400">
            <div className="w-fit h-fit border border-b-4  rounded-full p-5 ">
              <IoLogoCss3 className="text-3xl md:text-5xl  " />
            </div>
            <h1 className="text-center text-sm pt-2">CSS</h1>
          </div>
          <div className="text-yellow-400">
            <div className="w-fit h-fit border border-b-4  rounded-full p-5 ">
              <IoLogoJavascript className="text-3xl md:text-5xl " />
            </div>
            <h1 className="text-center text-sm pt-2">Javascript</h1>
          </div>
          <div className="text-blue-300">
            <div className="w-fit h-fit border border-b-4  rounded-full p-5 ">
              <SiReact className="text-3xl md:text-5xl  " />
            </div>
            <h1 className="text-center text-sm pt-2">React</h1>
          </div>
          <div className="text-blue-40">
            <div className="w-fit h-fit border border-b-4  rounded-full p-5 ">
              <SiTailwindcss className="text-3xl md:text-5xl 0 " />
            </div>
            <h1 className="text-center text-sm pt-2">Tailwindcss</h1>
          </div>
          <div className="text-blue-400">
            <div className="w-fit h-fit border border-b-4  rounded-full p-5 ">
              <SiMui className="text-3xl md:text-5xl  " />
            </div>
            <h1 className="text-center text-sm pt-2">Material UI</h1>
          </div>
          <div className="text-yellow-400">
            <div className="w-fit h-fit border border-b-4  rounded-full p-5 ">
              <PiFramerLogoFill className="text-3xl md:text-5xl  " />
            </div>
            <h1 className="text-center text-sm pt-2">Framer Motion</h1>
          </div>
          <div className="text-green-600">
            <div className="w-fit h-fit border border-b-4  rounded-full p-5">
              <FaNodeJs className="text-3xl md:text-5xl  " />
            </div>
            <h1 className="text-center text-sm pt-2">Node JS</h1>
          </div>
          <div className="text-gray-600">
            <div className="w-fit h-fit border border-b-4  rounded-full p-5 ">
              <SiExpress className="text-3xl md:text-5xl  " />
            </div>
            <h1 className="text-center text-sm pt-2">Express JS</h1>
          </div>
          <div className="text-blue-600">
            <div className="w-fit h-fit border border-b-4  rounded-full p-5 ">
              <SiCloudinary className="text-3xl md:text-5xl  " />
            </div>
            <h1 className="text-center text-sm pt-2">Cloudinary</h1>
          </div>
          <div className="text-green-600">
            <div className="w-fit h-fit border border-b-4  rounded-full p-5 h">
              <SiMongodb className="text-3xl md:text-5xl  " />
            </div>
            <h1 className="text-center text-sm pt-2">Mongo DB</h1>
          </div>

          <div className="text-red-600">
            <div className="w-fit h-fit border border-b-4  rounded-full p-5">
              <TbApi className="text-3xl md:text-5xl  " />
            </div>
            <h1 className="text-center text-sm pt-2">API</h1>
          </div>
          <div className="text-orange-600">
            <div className="w-fit h-fit border border-b-4  rounded-full p-5">
              <SiPostman className="text-3xl md:text-5xl  " />
            </div>
            <h1 className="text-center text-sm pt-2">Postman</h1>
          </div>

          {/* <div className="text-yellow-400">
            <div className="w-fit h-fit border border-b-4  rounded-full p-5">
              <IoLogoFirebase className="text-3xl md:text-5xl  " />
            </div>
            <h1 className="text-center text-sm pt-2">Firebase</h1>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
