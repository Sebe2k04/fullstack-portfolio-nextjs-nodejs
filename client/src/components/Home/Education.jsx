import React from "react";
import { IoReader } from "react-icons/io5";

const Education = () => {
  return (
    <div className="lg:px-20 px-8 py-10">
      <h1 className="font-semibold text-3xl">
        My{" "}
        <span className="text-4xl hello font-normal text-orange-400">
          Education
        </span>
      </h1>
      <div className="flex flex-col pt-8 lg:px-10 ">
        <div className="">
          <div className="flex gap-3 md:items-center">
            <div className="bg-gradient-to-br h-fit w-fit from-yellow-500 to-red-400 text-xl p-2 rounded-full text-white">
              <IoReader className="" />
            </div>
            <div className="md:flex justify-between w-full items-center">
                <h1 className="font-semibold text-xl">B.E -  Computer Science and Engineering</h1>
                <h1 className="text-gray-400">Sep 2021 - May 2025</h1>
            </div>
          </div>
          <div className="border-l-2 px-5 pl-7 pt-2 pb-5  ml-[18px]">
            <h1>CGPA : 8.25 / 10</h1>
            <h2>Nandha College of Technology , Erode , TN</h2>
          </div>
        </div>
        <div className="">
          <div className="flex gap-3 md:items-center">
            <div className="bg-gradient-to-br h-fit w-fit from-yellow-500 to-red-400 text-xl p-2 rounded-full text-white">
              <IoReader className="" />
            </div>
            <div className="md:flex justify-between w-full items-center">
                <h1 className="font-semibold text-xl">HSC - Maths & Computer Science</h1>
                <h1 className="text-gray-400">Jul 2019 - Apr 2021</h1>
            </div>
          </div>
          <div className="border-l-2 px-5 pl-7 pt-2 pb-5  ml-[18px]">
            <h1>Percentage : 91.48 %</h1>
            <h2>The Sengunthar Hr.Sec School, Erode , TN</h2>
          </div>
        </div>
        <div className="">
          <div className="flex gap-3 md:items-center">
            <div className="bg-gradient-to-br h-fit w-fit from-yellow-500 to-red-400 text-xl p-2 rounded-full text-white">
              <IoReader className="" />
            </div>
            <div className="md:flex justify-between w-full items-center">
                <h1 className="font-semibold text-xl">SSLC</h1>
                <h1 className="text-gray-400">Apr 2019</h1>
            </div>
          </div>
          <div className=" px-5 pl-7 pt-2 pb-5  ml-[18px]">
            <h1>Percentage : 84.8 %</h1>
            <h2>Sri Vasavi Matriculation Hr.Sec School, Erode , TN</h2>
          </div>
        </div>
        
        {/* <div className="">
          <div className="flex gap-3 items-center">
            <div className="bg-gradient-to-br from-yellow-500 to-red-400 text-xl p-2 rounded-full text-white">
              <IoReader className="" />
            </div>
            <div className="">
                <h1 className="font-semibold text-xl">HSC - Maths & Computer Science</h1>
            </div>
          </div>
          <div className="border-l-2 p-5 ml-[18px]">
            
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Education;
