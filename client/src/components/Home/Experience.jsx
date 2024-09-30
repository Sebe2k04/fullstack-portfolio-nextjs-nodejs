import React from "react";
import { IoReader } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { MdWork } from "react-icons/md";

const Experience = () => {
  return (
    <div className="lg:px-20 px-8 py-10">
      <h1 className="font-semibold text-3xl">
        My{" "}
        <span className="text-4xl hello font-normal text-orange-400">
          Experience
        </span>
      </h1>
      <div className="flex flex-col pt-8 lg:px-10 ">
        <div className="">
          <div className="flex gap-3 md:items-center">
            <div className="bg-gradient-to-br h-fit w-fit from-yellow-500 to-red-400 text-xl p-2 rounded-full text-white">
              <MdWork className="" />
            </div>
            <div className="md:flex justify-between w-full items-center">
              <h1 className="font-semibold text-xl">
                Full Stack Developer Intern
              </h1>
              <h1 className="text-gray-400">Apr 2024 - Current</h1>
            </div>
          </div>
          <div className="px-5 pl-7 pt-2 pb-5  ml-[18px]">
            <div className="flex items-center gap-2">
              <HiBuildingOffice2 />

              <h1>Axolotron</h1>
            </div>
            <div className="flex items-center gap-2">
              <IoLocationSharp />

              <h2>Remote, TN</h2>
            </div>
          </div>
        </div>
        

        
      </div>
    </div>
  );
};

export default Experience;
