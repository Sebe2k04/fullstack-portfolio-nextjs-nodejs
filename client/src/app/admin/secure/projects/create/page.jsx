"use client";
import Search from "@/components/Search";
import Link from "next/link";
import { FaCirclePlus } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { FaBox } from "react-icons/fa6";
import { Select, Option, Spinner } from "@material-tailwind/react";
import { Switch } from "@material-tailwind/react";
import { useRef, useState } from "react";
import { axiosConfig } from "@/utils/axiosConfig";
import { toast } from "react-toastify";
import axios from "axios";
import { axiosInstance } from "@/utils/axiosConfig";
import { IoIosCloseCircle } from "react-icons/io";

export default function Page() {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [skills, setSkills] = useState([]);
  const [tech, setTech] = useState("");

  const [description, setDescription] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [liveUrl, setLiveUrl] = useState("");
  const [image, setImage] = useState(null);
  const [additionalImages, setAdditionalImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const inputFile = useRef(null);

  const handleSkill = () => {
    setSkills([...skills, tech]);
    setTech("");
  };

  const handleDeleteSkill = (st) => {
    setSkills(skills.filter((skill) => skill !== st));
  };

  console.log(image);
  console.log(additionalImages);
  const MAX_LENGTH = 2;
  const handleReset = () => {
    if (inputFile.current) {
      inputFile.current.value = "";
      inputFile.current.type = "text";
      inputFile.current.type = "file";
    }
  };
  const handleAdditionalImages = (e) => {
    if (Array.from(e.target.files).length > MAX_LENGTH) {
      e.preventDefault();
      toast.error(`Cannot upload files more than ${MAX_LENGTH}`);
      // e.target.files = null;
      handleReset();
      return;
    } else {
      setAdditionalImages(e.target.files);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formdata = new FormData();
    formdata.append("title", title);
    formdata.append("subtitle", subtitle);
    formdata.append("skills", skills);
    formdata.append("description", description);
    formdata.append("githubUrl", githubUrl);
    formdata.append("liveUrl", liveUrl);
    formdata.append("image", image);
    formdata.append("additionalImages", additionalImages);

    for (let i = 0; i < additionalImages.length; i++) {
      formdata.append("additionalImages", additionalImages[i]);
    }

    try {
      const res = await axiosInstance.post(`/project`, formdata, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      console.log(res.data);
      setLoading(false);
      toast.success("Product added successfully");
    } catch (error) {
      toast.error("Error creating product");
      setLoading(false);
      console.error(error);
    }
  };

  return (
    <div className="lg:px-10 px-8 py-8 lg:pt-8 pt-24 ">
      <div
        className={
          loading ? "fixed z-[50] lg:left-[55%] top-[45%] left-[45%]" : "hidden"
        }
      >
        <div className="flex justify-center items-center bg-white p-5 rounded-xl">
          <div className="">
            <Spinner className="h-10 w-10" />
          </div>
        </div>
      </div>
      <div className="lg:flex justify-between items-center ">
        <div className="flex gap-2 items-center">
          <Link href={"/admin/secure/projects"}>
            <IoIosArrowBack />
          </Link>

          <h1 className="text-xl font-semibold">Create Project</h1>
        </div>
        <div className="flex justify-center lg:block pt-5 lg:pt-0">
          <Link
            href={"/admin/secure/projects"}
            className="flex bg-black px-5 py-2 rounded-xl text-white items-center gap-2"
          >
            <FaBox />
            <h1>All Projects</h1>
          </Link>
        </div>
      </div>
      <div className="">
        <form action="" className="grid gap-5 py-5" onSubmit={handleSubmit}>
          <div className="grid gap-3">
            <label className=" text-sm font-medium text-gray-700">
              Project Title
            </label>
            <input
              type="text"
              required
              onChange={(e) => setTitle(e.target.value)}
              className=" w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-600 sm:text-sm"
            />
          </div>
          <div className="grid gap-3">
            <label className=" text-sm font-medium text-gray-700">
              Project Subtitle
            </label>
            <input
              type="text"
              required
              onChange={(e) => setSubtitle(e.target.value)}
              className=" w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-600 sm:text-sm"
            />
          </div>

          <div className="grid gap-3">
            <label className=" text-sm font-medium text-gray-700">Skills</label>
            <input
              type="text"
              required
              value={tech}
              onChange={(e) => setTech(e.target.value)}
              className=" w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-600 sm:text-sm"
            />
            <div
              onClick={handleSkill}
              className="px-3 py-1 rounded-md text-white bg-black w-fit cursor-pointer"
            >
              Add
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, i) => {
                return (
                  <div
                    key={i}
                    className="flex items-center rounded-xl bg-gray-400 w-fit px-3 py-1 justify-center gap-2"
                  >
                    <h1>{skill}</h1>
                    <div
                      onClick={() => handleDeleteSkill(skill)}
                      className="cursor-pointer"
                    >
                      <IoIosCloseCircle />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid gap-3">
            <label className=" text-sm font-medium text-gray-700">
              Project Image
            </label>

            <input
              type="file"
              name="image"
              id="image"
              required
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="file:bg-gray-50 file:px-5 file:py-2 file:rounded-md file:border file:border-gray-200 lg:file:mr-10 file:mr-5"
            />
          </div>
          <div className="grid gap-3">
            <label className=" text-sm font-medium text-gray-700">
              Additional Images -{" "}
              <span className="text-red-400">Max 2 images</span>
            </label>

            <input
              type="file"
              name="additionalImages"
              id="additionalImages"
              multiple
              required
              accept="image/*"
              ref={inputFile}
              onChange={handleAdditionalImages}
              className="file:bg-gray-50 file:px-5 file:py-2 file:rounded-md file:border file:border-gray-200 lg:file:mr-10 file:mr-5"
            />
          </div>

          <div className="grid gap-3">
            <label className=" text-sm font-medium text-gray-700">
              Project Description
            </label>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-600 sm:text-sm"
              rows="5"
            />
          </div>
          <div className="grid gap-3">
            <label className=" text-sm font-medium text-gray-700">
              Github Url <span className="text-black">(Not Available - mention NA)</span>
            </label>
            <input
              type="text"
              required
              onChange={(e) => setGithubUrl(e.target.value)}
              className=" w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-600 sm:text-sm"
            />
          </div>
          <div className="grid gap-3">
            <label className=" text-sm font-medium text-gray-700">
              Live Url <span className="text-black">(Not Available - mention NA)</span>
            </label>
            <input
              type="text"
              required
              onChange={(e) => setLiveUrl(e.target.value)}
              className=" w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-600 sm:text-sm"
            />
          </div>

          <div className="grid gap-3 pt-5">
            <input
              type="submit"
              required
              value={"Create Project"}
              className=" w-full px-3 py-2 border border-gray-300 bg-black text-white rounded-md sm:text-sm"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
