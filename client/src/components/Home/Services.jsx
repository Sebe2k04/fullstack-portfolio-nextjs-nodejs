"use client";
import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="p-3 my-10 ">
      <div className="flex justify-end  w-full">
        <div className="bg-[#FDC474] w-[100px] p-5 rounded-t-2xl"></div>
      </div>
      <div className="bg-gradient-to-br text-white from-red-300 to-yellow-300 lg:px-20 px-8 py-10 rounded-tl-2xl rounded-br-2xl relative ">
        <div className="lg:flex justify-between">
          <motion.h1
            initial={{ opacity: 0, scale: 0.4, x: 100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 50 }}
            viewport={{ once: true }}
            className="text-5xl  hello"
          >
            My <span className="text-red-500">Services</span>
          </motion.h1>
          <motion.h3
            initial={{ opacity: 0, scale: 0.4, y: 100 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 50 }}
            viewport={{ once: true }}
            className="lg:max-w-[600px] lg:pt-0 pt-5"
          >
            As a developer and software enginner , i provide various services
            based on my skills which i showcase below to provide scalable and
            flexible solutions
          </motion.h3>
        </div>

        <div className="grid lg:grid-cols-3 mt-10 gap-8 text-center">
          <div className="">
            <div className="px-5 ">
              <div className="rounded-2xl bg-white/50 border border-white p-5"></div>
            </div>
            <div className="backdrop-blur-2xl border border-white p-5 rounded-2xl bg-white/10 mt-[-25px]">
              <motion.h3
            initial={{ opacity: 0, scale: 0.4, y: 100 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 50 }}
            viewport={{ once: true }} className="font-semibold text-2xl ">Full stack</motion.h3>
            </div>
          </div>
          <div className="">
            <div className="px-5 ">
              <div className="rounded-2xl bg-white/50 border border-white p-5"></div>
            </div>
            <div className="backdrop-blur-2xl border border-white p-5 rounded-2xl bg-white/10 mt-[-25px]">
              <motion.h3
            initial={{ opacity: 0, scale: 0.4, y: 100 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 50 }}
            viewport={{ once: true }} className="font-semibold text-2xl ">Front End</motion.h3>
            </div>
          </div>
          <div className="">
            <div className="px-5 ">
              <div className="rounded-2xl bg-white/50 border border-white p-5"></div>
            </div>
            <div className="backdrop-blur-2xl border border-white p-5 rounded-2xl bg-white/10 mt-[-25px]">
              <motion.h3
            initial={{ opacity: 0, scale: 0.4, y: 100 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 50 }}
            viewport={{ once: true }} className="font-semibold text-2xl ">Back End</motion.h3>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100px] bg-[#FCC178] p-5 rounded-b-2xl"></div>
    </div>
  );
};

export default Services;
