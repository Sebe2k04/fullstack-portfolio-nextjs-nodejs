import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsGlobe2 } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div className="rounded-xl border-2 backdrop-blur-md max-w-[400px] pt-5 px-5">
      <Image
        src={project.image}
        width="500"
        height="500"
        alt={project.title}
        className="rounded-2xl"
      />
      <div className="pt-5 pb-2 flex justify-between items-center">
        <div className="">
          <h1>{project.title}</h1>
          <h1 className="text-gray-400 text-sm">{project.subtitle}</h1>
        </div>
        <div className="flex gap-2 text-xl">
          {project.liveUrl === "NA" ? (
            <div className="p-1 bg-gray-300 opacity-20 rounded-full">
              <BsGlobe2 />
            </div>
          ) : (
            <Link
            target="_blank"
              href={project.liveUrl}
              className="p-1 bg-gray-300 rounded-full"
            >
              <BsGlobe2 />
            </Link>
          )}
          {project.githubUrl === "NA" ? (
            <div className="p-1 bg-gray-300 opacity-20 rounded-full">
              <FaGithub />
            </div>
          ) : (
            <Link
            target="_blank"
              href={project.githubUrl}
              className="p-1 bg-gray-300 rounded-full"
            >
              <FaGithub />
            </Link>
          )}

        </div>
      </div>
      <div className="flex justify-center">
        <Link
          href={`/projects/${project._id}`}
          className="bg-gray-200 rounded-t-3xl p-2 px-5 shadow-inner shadow-gray-400"
        >
          <h1 className="text-center text-sm">Explore</h1>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
