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
  const levels = [
    {
      label: "Basic",
      value: "basic",
    },
    {
      label: "Intermediate",
      value: "intermediate",
    },
    {
      label: "Advanced",
      value: "advanced",
    },
  ];

  const [name, setName] = useState("");
  const [provider, setProvider] = useState("");
  const [skills, setSkills] = useState([]);
  const [tech, setTech] = useState("");

  const [level, setLevel] = useState("basic");
  const [url, setUrl] = useState("");

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSkill = () => {
    setSkills([...skills, tech]);
    setTech("");
  };

  const handleDeleteSkill = (st) => {
    setSkills(skills.filter((skill) => skill !== st));
  };

  console.log(image);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("provider", provider);
    formdata.append("skills", skills);
    formdata.append("level", level);
    formdata.append("url", url);
    formdata.append("image", image);

    try {
      const res = await axiosInstance.post(`/certification`, formdata, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      console.log(res.data);
      setLoading(false);
      toast.success("Certification added successfully");
    } catch (error) {
      toast.error("Error creating Certification");
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

          <h1 className="text-xl font-semibold">Create Certification</h1>
        </div>
        <div className="flex justify-center lg:block pt-5 lg:pt-0">
          <Link
            href={"/admin/secure/certifications"}
            className="flex bg-black px-5 py-2 rounded-xl text-white items-center gap-2"
          >
            <FaBox />
            <h1>All Certifications</h1>
          </Link>
        </div>
      </div>
      <div className="">
        <form action="" className="grid gap-5 py-5" onSubmit={handleSubmit}>
          <div className="grid gap-3">
            <label className=" text-sm font-medium text-gray-700">
              Certification Name
            </label>
            <input
              type="text"
              required
              onChange={(e) => setName(e.target.value)}
              className=" w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-600 sm:text-sm"
            />
          </div>
          <div className="grid gap-3">
            <label className=" text-sm font-medium text-gray-700">
              Certification Provider
            </label>
            <input
              type="text"
              required
              onChange={(e) => setProvider(e.target.value)}
              className=" w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-600 sm:text-sm"
            />
          </div>
          <div className="relative z-[0] grid gap-3">
            <label className=" text-sm font-medium text-gray-700">
              Select Level
            </label>
            <Select
              required
              value={level}
              placeholder={"Select Level"}
              className="border-gray-300 capitalize focus:border-gray-600 focus:outline-none placeholder:text-gray-400 label:text-gray-300 focus:ring-0 "
            >
              {levels.map((level, index) => (
                <Option
                  onClick={() => setLevel(level.value)}
                  key={index}
                  value={level.value}
                >
                  {level.label}
                </Option>
              ))}
            </Select>
          </div>
          <div className="grid gap-3">
            <label className=" text-sm font-medium text-gray-700">Skills</label>
            <input
              type="text"
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
              Certification Image
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
              Url{" "}
              <span className="text-black">(Not Available - mention NA)</span>
            </label>
            <input
              type="text"
              required
              onChange={(e) => setUrl(e.target.value)}
              className=" w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-600 sm:text-sm"
            />
          </div>

          <div className="grid gap-3 pt-5">
            <input
              type="submit"
              required
              value={"Create Certification"}
              className=" w-full px-3 py-2 border border-gray-300 bg-black text-white rounded-md sm:text-sm"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
