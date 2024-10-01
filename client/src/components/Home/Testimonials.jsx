"use client"
import React from "react";

const Testimonials = () => {
  return (
    <div className="">
      <div className="lg:px-10 px-5">
      <div className=" rounded-2xl bg-orange-300 p-6"></div>
      </div>
      <div className="lg:px-20 px-8 bg-gradient-to-br from-yellow-100 to-red-100 py-10 rounded-3xl mt-[-35px]">
        <div className="flex justify-center">
          <div className="">
            <h1 className="lg:text-3xl text-2xl text-center font-semibold">
              Testimonials that
            </h1>
            <h3 className="font-semibold lg:text-3xl text-2xl text-center  pt-1">
              Speak to{" "}
              <span className="text-orange-500 hello lg:text-4xl text-3xl font-normal">
                My Results
              </span>
            </h3>
          </div>
        </div>
        <div className="flex justify-center py-5">
          <h3 className="lg:text-center text-justify max-w-[700px]">
            Testimonials that endorses my services and work based on every
            project by performing collaborative work on various fields , Pleade
            describe your thoughts about me in the blow section . thank you !
          </h3>
        </div>
        <div className="flex justify-center">
          <div className="bg-orange-400 border-2 border-white shadow-inner shadow-white rounded-2xl px-5 py-2 h-fit">
            <h1 className="font-semibold text-white text-sm">Add Yours</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
