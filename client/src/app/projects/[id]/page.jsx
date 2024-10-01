"use client";

import Loader from "@/components/Loader";
import { axiosInstance } from "@/utils/axiosConfig";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";
import { toast } from "react-toastify";

export default function Page() {
  const { id } = useParams();
  const [project, setProject] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState("");

  useEffect(() => {
    const fetchProject = async () => {
      setLoading(true);
      try {
        const res = await axiosInstance.get(`/project/${id}`);
        console.log(res.data);
        setLoading(false);
        setProject(res.data);
        setCurrentImage(res.data.image);
      } catch (error) {
        console.log(error);
        toast.error("Error fetching Project");
      }
    };
    fetchProject();
  }, []);
  return (
    <div className="lg:px-20 px-8 py-10">
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="">
              <Image
                src={currentImage}
                width="1000"
                height="1000"
                alt={project.title}
                className="m-auto rounded-2xl w-full max-h-[400px]"
              />
            </div>
            <div className="py-5">
              <h1 className="text-2xl font-semibold">{project.title}</h1>
              <h2 className="text-gray-400 ">{project.subtitle}</h2>
              <div className="py-5 flex flex-wrap gap-3">
                {project.skills.map((skill, i) => {
                  return (
                    <div key={i}>
                      <div className="w-fit h-fit border border-b-4 text-3xl md:text-5xl rounded-2xl px-3 py-1 ">
                        <h1 className="text-center text-sm ">{skill}</h1>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-between md:justify-normal gap-5 py-5">
                {project.liveUrl === "NA" ? (
                  <div className="flex items-center opacity-20 gap-2 bg-gray-200 rounded-xl px-5 py-2l">
                    <BsGlobe2 />
                    <h1>Live Url</h1>
                  </div>
                ) : (
                  <Link
                  target="_blank"
                    href={project.liveUrl}
                    className="flex items-center gap-2 bg-gray-200 rounded-xl px-5 py-2"
                  >
                    <BsGlobe2 />
                    <h1>Live Url</h1>
                  </Link>
                )}
                {project.githubUrl === "NA" ? (
                  <div className="flex items-center opacity-20 gap-2 bg-gray-200 rounded-xl px-5 py-2l">
                    <FaGithub />
                    <h1>Github</h1>
                  </div>
                ) : (
                  <Link
                  target="_blank"
                    href={project.githubUrl}
                    className="flex items-center gap-2 bg-gray-200 rounded-xl px-5 py-2"
                  >
                    <FaGithub />
                    <h1>Github</h1>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-8 py-5">
            {project?.additionalImages.map((image, index) => (
              <div
                onClick={() => setCurrentImage(image)}
                key={index}
                className="  max-h-[100px] relative"
              >
                <Image
                  src={image}
                  width="500"
                  height="500"
                  alt="project image"
                  priority={false}
                  placeholder="blur"
                  blurDataURL={image}
                  className="rounded-md w-fit  max-h-[200px] aspect-square object-contain "
                />
              </div>
            ))}
            <Image
              src={project.image}
              width="500"
              height="500"
              onClick={() => setCurrentImage(project.image)}
              alt="product image"
              priority={false}
              placeholder="blur"
              blurDataURL={project.image}
              className="rounded-md  object-contain w-fit max-h-[200px]  aspect-square"
            />
          </div>
          <div className="py-5">
            <h1 className="text-xl font-semibold ">Description</h1>
            <p className="text-sm text-justify pt-2">{project.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
