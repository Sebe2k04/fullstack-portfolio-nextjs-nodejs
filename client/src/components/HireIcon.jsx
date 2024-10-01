import Link from "next/link";
import React from "react";

const HireIcon = () => {
  return (
    <div>
      <div className="fixed z-[100] bottom-[30px] right-[20px]  lg:right-[50px] lg:scale-75 scale-50">
        <img src="/crtxt.png" alt="" className="w-[145px] animate-round relative z-[50]" />

        <Link href={"/#contact"} className="flex justify-center relative z-[60]">
          <div className="w-[90px] h-[90px] border mt-[-117px] flex justify-center items-center bg-black text-white hover: rounded-full">
            <div className="text-center">
              <h1 className="hello text-2xl">Hire </h1>
              <h1 className="hello text-2xl">Me </h1>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HireIcon;