import React from "react";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const LinkCard = () => {
  return (
    <div className="flex flex-col gap-5 p-5 text-xl items-center">
      <div className="flex justify-center h-full min-h-[100px]">
        <div className="w-1 bg-black"></div>
      </div>
      <Link target="_blank" href={"mailto:sebe2k04@gmail.com"}>
        <SiGmail />
      </Link>
      <Link target="_blank" href={"https://github.com/Sebe2k04"}>
        <FaGithub />
      </Link>
      <Link target="_blank" href={"https://www.linkedin.com/in/sebe2k04/"}>
        <FaLinkedin />
      </Link>
    </div>
  );
};

export default LinkCard;
