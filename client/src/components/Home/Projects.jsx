"use client";
import { axiosInstance } from "@/utils/axiosConfig";
import React, { useEffect, useState } from "react";
import ProjectCard from "../ProjectCard";
import Link from "next/link";
import Loader from "../Loader";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const query = new URLSearchParams({
          limit: 2,
        }).toString();

        const res = await axiosInstance.get(`/project?${query}`);
        console.log(res.data);
        setLoading(false);
        setProjects(res.data.projects);
      } catch (error) {
        console.error(error);
        toast.error("Unable to get Projects");
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="lg:px-20 py-10 px-8">
      <div className="max-w-[300px]">
        <h1 className="font-semibold text-3xl">
          Let&apos;s have a look at my{" "}
          <span className="hello text-4xl font-normal text-orange-400">
            Projects
          </span>
        </h1>
      </div>
      <div className="pt-5 flex justify-center md:px-10">
        <h2 className="md:text-center text-justify">
          In this section, Each project showcases my ability to build responsive
          and user-friendly applications, utilizing technologies like the MERN
          stack and Next.js Through these project experiences, I aim to create
          innovative solutions that address real-world challenges and enhance
          user experiences.
        </h2>
      </div>
      {loading ? (
        <div className="">
          <Loader/>
        </div>
      ) : (
        <div className="py-10 flex flex-wrap justify-center">
          {projects.map((project, index) => {
            return (
              <div key={index}>
                <ProjectCard project={project} />
              </div>
            );
          })}
        </div>
      )}
      <div className="flex justify-center">
        <Link
          href={"/projects"}
          className="px-5 py-1 border-2 shadow-sm rounded-2xl text-sm"
        >
          Show More
        </Link>
      </div>
    </div>
  );
};

export default Projects;
