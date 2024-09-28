"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import LinkCard from "../LinkCard";
import { FaQuoteLeft } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";

const slides = [
  "Full stack developer",
  "Software Engineer",
  "Front end Developer",
  "Back end Developer",
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === slides.length - 1 ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);
  return (
    <div className="lg:px-20 px-8 min-h-[85vh] flex flex-col justify-center">
      <main className="grid lg:grid-cols-2">
        <section className="grid lg:grid-cols-5">
          <div className="h-full hidden lg:flex items-center">
            <LinkCard />
          </div>
          <div className="col-span-4">
            <img src="/hero.jpg" alt="" className="w-full mx-auto md:max-w-[500px]" />
          </div>
        </section>
        <section className=" flex flex-col justify-center">
          {/* <div className=""></div> */}
          <div className="lg:max-w-[500px]">
            <h1>Hi There , </h1>
            <h1 className="lg:text-4xl text-3xl font-semibold ">
              I&apos;m <span className="text-green-400">Sebe</span>
            </h1>
            <h3 className="font-semibold text-gray-400 lg:text-xl pt-1">
              Passionate{" "}
              <motion.span key={activeIndex} className="text-black">
                {slides[activeIndex].split("").map((el, i) => (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.25,
                      delay: i / 10,
                    }}
                    key={i}
                  >
                    {el}
                  </motion.span>
                ))}
              </motion.span>
            </h3>
            <h6 className="text-justify pt-2">
              From crafting intuitive user interfaces to architecting complex
              backend solutions, my full-stack skills cover the complete
              development cycle for modern web applications.
            </h6>
            <div className="flex gap-2 mt-5 items-center border-2 py-4 px-3 border-yellow-200 rounded-3xl backdrop-blur-md w-fit  shadow-red-300 shadow-inner">
              <section className="">
                <Link
                  href={"/"}
                  className="px-5 py-2 rounded-xl text-white bg-gradient-to-br from-yellow-500 to-rose-400 font-semibold"
                >
                  Hire Me
                </Link>
              </section>
              <section className="flex gap-5 px-2 bg-gradient-to-br from-yellow-500 to-rose-400 text-transparent bg-clip-text">
                <Link
                  href={"/"}
                  className="  font-semibold flex gap-2 items-center "
                >
                  <CgNotes className="text-red-300" />

                  <h1>Resume</h1>
                </Link>
              </section>
            </div>
          </div>

          {/* <div className="flex justify-end lg:py-0 py-10">
            <div className="bg-gradient-to-br from-green-400 to-yellow-300 rounded-xl">
              <div className="flex gap-2 font-semibold px-4 pb-1 pt-2 rounded-xl backdrop-blur-2xl border-2 text-white border-red-300">
                <FaQuoteLeft />
                <h1>Turning Innovation into Reality - Genrio !</h1>
              </div>
            </div>
          </div> */}
        </section>
      </main>
    </div>
  );
};

export default Hero;
