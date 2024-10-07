"use client";
import { axiosInstance } from "@/utils/axiosConfig";
import React, { useEffect, useState } from "react";
import ProjectCard from "../ProjectCard";
import Link from "next/link";
import Loader from "../Loader";
import { motion } from "framer-motion";

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
        <motion.h1
          initial={{ opacity: 0, scale: 0.4, x: 100 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 50 }}
          viewport={{ once: true }}
          className="font-semibold text-3xl"
        >
          Let&apos;s have a look at my{" "}
          <span className="hello text-4xl font-normal text-orange-400">
            Projects
          </span>
        </motion.h1>
      </div>
      <div className="pt-5 flex justify-center md:px-10">
        <motion.h2
          initial={{ opacity: 0, scale: 0.4, y: 100 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 50 }}
          viewport={{ once: true }}
          className="md:text-center text-justify"
        >
          In this section, Each project showcases my ability to build responsive
          and user-friendly applications, utilizing technologies like the MERN
          stack and Next.js Through these project experiences, I aim to create
          innovative solutions that address real-world challenges and enhance
          user experiences.
        </motion.h2>
      </div>
      {loading ? (
        <div className="">
          <Loader />
        </div>
      ) : (
        <div className="py-10 flex flex-wrap gap-8 justify-center">
          {projects.map((project, index) => {
            return (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 50 , delay:index/10 }}
                viewport={{once:true}}
                key={index}
              >
                <ProjectCard project={project} />
              </motion.div>
            );
          })}
        </div>
      )}
      <div className="flex justify-center">
        <Link
          href={"/projects"}
          className="px-5 py-1 border-2 shadow-sm rounded-2xl text-sm hover:bg-blue-gray-600 hover:text-white duration-200"
        >
          Show More
        </Link>
      </div>
    </div>
  );
};

export default Projects;
