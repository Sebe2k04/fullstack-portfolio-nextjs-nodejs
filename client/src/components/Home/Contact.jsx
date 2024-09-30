import React from "react";
import { FaStar } from "react-icons/fa";
import { IoCall, IoMail, IoSend } from "react-icons/io5";
import { GiStarMedal } from "react-icons/gi";
import { AiFillSafetyCertificate } from "react-icons/ai";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="lg:px-20 px-8 py-10">
      <div className="">
        <div className="flex justify-center">
          <h1 className="text-center max-w-[400px] font-semibold text-3xl">
            Have an Awesome Project Idea?{" "}
            <span className="text-orange-400 hello font-normal text-4xl">
              Let&apos;s Discuss
            </span>
          </h1>
        </div>
        <div className="">
          <div className="mt-5 flex justify-center">
            <div className="md:min-w-[450px] min-w-full  ">
              <div className="flex p-2 items-center border rounded-full justify-between">
                <div className="flex gap-3 items-center">
                  <IoMail className="text-orange-400 p-2 text-4xl bg-orange-200 rounded-full" />
                  <h1 className="font-semibold lg:text-md text-sm">
                    sebe2k04@gmail.com
                  </h1>
                </div>

                <Link href="mailto:sebe2k04@gmail.com">
                  <div className="">
                    <IoSend className="text-orange-400 p-2 text-4xl bg-orange-200 rounded-full" />
                  </div>
                </Link>
              </div>
              <div className="flex justify-between px-5 pt-1 text-[10px] lg:text-[12px] font-semibold">
                <div className="flex gap-1">
                  <FaStar className="m-auto" />
                  <p>Average Ratings</p>
                </div>
                <div className="flex gap-1">
                  <GiStarMedal className="m-auto" />
                  <p>Awards</p>
                </div>
                <div className="flex gap-1">
                  <AiFillSafetyCertificate className="m-auto" />
                  <p>Certified Developer</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center pt-8">
            <Link
              className="flex gap-2 items-center hover:text-white/70 duration-200 bg-orange-400 py-1 px-3 text-white border-2 border-white shadow-md shadow-orange-400 rounded-2xl"
              href={"tel:+919342764956"}
            >
              <IoCall />
              <h1> +91 9342764956</h1>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;