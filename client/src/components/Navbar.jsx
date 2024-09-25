"use client"
import { Drawer } from "@material-tailwind/react";
import Link from "next/link";
import React, { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

const Navbar = () => {
  const [open,setOpen] = useState(false)

  const toggleDrawer = (fn) => {
    setOpen(fn)
  }
  return (
    <div className="">
      <div className="fixed lg:p-5 w-full lg:px-20 p-3 ">
      <main className="p-5 border flex justify-between items-center rounded-2xl backdrop-blur-xl ">
        <section className="lg:pl-5">
          <div className="flex items-center relative border">
            <h1 className="text-4xl hello absolute top-[-15px]">Sebe</h1>
          </div>
        </section>
        <section className="lg:flex hidden gap-8 font-semibold  rounded-2xl">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Services</Link>
          <Link href={"/"}>Skills</Link>
          <Link href={"/"}>Projects</Link>
          <Link href={"/"}>Experience</Link>
        </section>
        <section className="lg:block hidden">
          <Link
            href={"/"}
            className="px-5 py-2 rounded-xl text-white bg-black font-semibold"
          >
            Hire Me
          </Link>
        </section>
        <section className="text-2xl lg:hidden">
          <HiOutlineMenuAlt4 onClick={()=>toggleDrawer(true)} />
        </section>
      </main>
    </div>
    <div className="pt-[120px]"></div>
    <Drawer open={open} onClose={()=>toggleDrawer(false)} className="p-">

    </Drawer>
    </div>
  );
};

export default Navbar;
