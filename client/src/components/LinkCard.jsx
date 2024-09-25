import React from "react";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const LinkCard = () => {
  return (
    <div className="flex flex-col gap-5 p-5 text-xl items-center">
      <div className="flex justify-center h-full min-h-[100px]">
        <div className="w-1 bg-black"></div>
      </div>
      <SiGmail />
      <FaGithub />
      <FaLinkedin />
    </div>
  );
};

export default LinkCard;
