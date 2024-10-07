"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import LinkCard from "../LinkCard";
import { FaGithub, FaLinkedin, FaQuoteLeft } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { SiGmail } from "react-icons/si";
import { ImQuotesRight } from "react-icons/im";
import Image from "next/image";


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
          <motion.div
            initial={{ opacity: 0, scale: 0.4, y: -100 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 50 }}
            viewport={{ once: true }}
            className="h-full hidden lg:flex items-center"
          >
            <LinkCard />
          </motion.div>
          <div className="col-span-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.4, y: 100 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 50 }}
              viewport={{ once: true }}
              className=""
            >
             
              <Image
              src="/hero.jpg"
              width="1000"
              height="1000"
              alt=""
              className="w-full mx-auto md:max-w-[500px]"
            />
              {/* <div className="flex justify-center ">
                <div className="px-5 py-2 rounded-xl bg-white shadow-md mt-[-50px] relative z-[10] h-fit">
                  <h1>Certified Developer</h1>
                </div>
              </div> */}
            </motion.div>
          </div>
        </section>
        <section className=" flex flex-col justify-between">
          {/* <div className=""></div> */}
          <div className="flex justify-end">
            <div className="flex max-w-[300px]  items-start">
            <ImQuotesRight className="lg:text-4xl text-xl"/>
            </div>
          </div>
          <div className="lg:max-w-[500px]">
            <motion.h1
              initial={{ opacity: 0, scale: 0.4, x: 100 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 50 }}
              viewport={{ once: true }}
            >
              Hi There ,{" "}
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, scale: 0.4, x: 100 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 50 }}
              viewport={{ once: true }}
              className="lg:text-4xl text-3xl font-semibold "
            >
              I&apos;m <span className="text-green-400">Sebe</span>
            </motion.h1>
            <motion.h3
              initial={{ opacity: 0, scale: 0.4, x: 100 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 50 }}
              viewport={{ once: true }}
              className="font-semibold text-gray-400 lg:text-xl pt-1"
            >
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
            </motion.h3>
            <motion.h6
              initial={{ opacity: 0, scale: 0.4, x: 100 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              viewport={{ once: true }}
              className="text-justify pt-2"
            >
              From crafting intuitive user interfaces to architecting complex
              backend solutions, my full-stack skills cover the complete
              development cycle for modern web applications.
            </motion.h6>
            <motion.div
              initial={{ opacity: 0, scale: 0.4, x: 100 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.5,
              }}
              viewport={{ once: true }}
              className="flex gap-2 mt-5 items-center border-2 py-4 px-3 border-yellow-200 rounded-3xl backdrop-blur-md w-fit  shadow-red-300 shadow-inner"
            >
              <section className="">
                <Link
                  href={"/#contact"}
                  className="px-5 py-2 rounded-xl text-white bg-gradient-to-br from-yellow-500 to-red-400 font-semibold"
                >
                  Hire Me
                </Link>
              </section>
              <section className="flex gap-5 px-2 bg-gradient-to-br from-yellow-500 to-red-400 text-transparent bg-clip-text">
                <Link
                  href={"/resume"}
                  className="  font-semibold flex gap-2 items-center "
                >
                  <CgNotes className="text-red-300" />

                  <h1>Resume</h1>
                </Link>
              </section>
            </motion.div>
          </div>
          <div className=""></div>
          <motion.div
            initial={{ opacity: 0.5, scale: 0.4, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 50 }}
            viewport={{ once: true }}
            className="flex lg:hidden justify-center gap-8 pt-10 text-2xl"
          >
            <Link
              target="_blank"
              className="hover:text-orange-400 duration-200"
              href={"mailto:sebe2k04@gmail.com"}
            >
              <SiGmail />
            </Link>
            <Link
              target="_blank"
              className="hover:text-orange-400 duration-200"
              href={"https://github.com/Sebe2k04"}
            >
              <FaGithub />
            </Link>
            <Link
              target="_blank"
              className="hover:text-orange-400 duration-200"
              href={"https://www.linkedin.com/in/sebe2k04/"}
            >
              <FaLinkedin />
            </Link>
          </motion.div>

        </section>
      </main>
    </div>
  );
};

export default Hero;
