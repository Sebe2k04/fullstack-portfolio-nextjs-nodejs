"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const HireIcon = () => {
  const path = usePathname();
  return (
    <div>
      {path.startsWith("/admin") ? (
        ""
      ) : (
        <div className="fixed z-[100] lg:bottom-[30px] bottom-[20px] right-[10px]  lg:right-[50px] lg:scale-75 scale-50">
          <Image

            src="/crtxt.png"
            alt=""
            width={100}
            height={100}
            priority
            className="w-[145px] animate-round relative z-[50]"
          />

          <Link
            href={"/#contact"}
            className="flex justify-center relative z-[60]"
          >
            <div className="w-[90px] h-[90px] border mt-[-117px] flex justify-center items-center bg-black text-white hover: rounded-full">
              <div className="text-center">
                <h1 className="hello text-2xl">Hire </h1>
                <h1 className="hello text-2xl">Me </h1>
              </div>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default HireIcon;
