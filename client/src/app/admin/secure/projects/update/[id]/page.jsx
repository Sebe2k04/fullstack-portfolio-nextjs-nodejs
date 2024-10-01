"use client";
import Search from "@/components/Search";
import Link from "next/link";
import { FaCirclePlus } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { FaBox } from "react-icons/fa6";
import { Select, Option, Spinner } from "@material-tailwind/react";
import { Switch } from "@material-tailwind/react";
import { useEffect, useRef, useState } from "react";
import { axiosConfig } from "@/utils/axiosConfig";
import { toast } from "react-toastify";
import axios from "axios";
import { axiosInstance } from "@/utils/axiosConfig";
import { IoIosCloseCircle } from "react-icons/io";
import { useParams } from "next/navigation";
import Image from "next/image";

export default function Page() {
  const { id } = useParams();
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

  console.log(additionalImages);

  const [oldData, setOldData] = useState();
  useEffect(() => {
    const fetchProject = async () => {
      setLoading(true);
      try {
        const res = await axiosInstance.get(`/project/${id}`);
        setOldData(res.data);
        setLoading(false);
        console.log(res.data);
        setTitle(res.data.title);
        setSubtitle(res.data.subtitle);
        setSkills(res.data.skills);
        // setTech(res.data.tech);
        setDescription(res.data.description);
        setGithubUrl(res.data.githubUrl);
        setLiveUrl(res.data.liveUrl);
        // setImage(res.data.image);
        // setAdditionalImages(res.data.additionalImages);

        // setImage(res.data.image);
        // setAdditionalImages(res.data.additionalImages);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProject();
  }, []);
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
    for (let i = 0; i < skills.length; i++) {
      formdata.append("skills", skills[i]);
    }
    formdata.append("description", description);
    formdata.append("githubUrl", githubUrl);
    formdata.append("liveUrl", liveUrl);
    if (image) {
      formdata.append("image", image);
    }
    // let additionalImagesData = JSON.parse(additionalImages)
    // additionalImagesData.forEach((img) => formdata.append('additionalImages', img))

    if (additionalImages.length > 0) {
      for (let i = 0; i < additionalImages.length; i++) {
        formdata.append("additionalImages", additionalImages[i]);
      }
    }

    try {
      const res = await axiosInstance.put(`/project/${id}`, formdata, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      console.log(res.data);
      setLoading(false);
      toast.success("Product updated successfully");
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

          <h1 className="text-xl font-semibold">Update Project</h1>
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
      {oldData && (
        <div className="">
          <form action="" className="grid gap-5 py-5" onSubmit={handleSubmit}>
            <div className="grid gap-3">
              <label className=" text-sm font-medium text-gray-700">
                Project Title
              </label>
              <input
                type="text"
                required
                value={title}
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
                value={title}
                onChange={(e) => setSubtitle(e.target.value)}
                className=" w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-600 sm:text-sm"
              />
            </div>

            <div className="grid gap-3">
              <label className=" text-sm font-medium text-gray-700">
                Skills
              </label>
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
                Project Image
              </label>

              <input
                type="file"
                name="image"
                id="image"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
                className="file:bg-gray-50 file:px-5 file:py-2 file:rounded-md file:border file:border-gray-200 lg:file:mr-10 file:mr-5"
              />
            </div>
            <div className="">
              <h1>Image</h1>
              <div className="flex flex-wrap py-5">
                {/* <img src={URL.createObjectURL(image)} alt="" className="w-[300px]" /> */}
                <Image
                  src={image ? URL.createObjectURL(image) : oldData.image}
                  width="1000"
                  height="1000"
                  alt=""
                  className="w-[300px] rounded-xl"
                />
              </div>
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
                accept="image/*"
                ref={inputFile}
                onChange={handleAdditionalImages}
                className="file:bg-gray-50 file:px-5 file:py-2 file:rounded-md file:border file:border-gray-200 lg:file:mr-10 file:mr-5"
              />
            </div>
            <div className="">
              <h1>Additional image</h1>
              {additionalImages.length > 0 ? (
                <div className="flex flex-wrap py-5">
                  <Image
                    width="1000"
                    height="1000"
                    src={URL.createObjectURL(additionalImages[0])}
                    alt=""
                    className="w-[300px] rounded-xl aspect-square object-cover p-5"
                  />
                  {additionalImages[1] && (
                    <Image
                      width="1000"
                      height="1000"
                      src={URL.createObjectURL(additionalImages[1])}
                      alt=""
                      className="w-[300px] rounded-xl aspect-square object-cover p-5"
                    />
                  )}
                </div>
              ) : (
                <div className="flex flex-wrap py-5">
                  {oldData.additionalImages.map((image, index) => (
                    <div key={index} className="">
                      {/* <img src={URL.createObjectURL(image)} alt="" key={index} /> */}
                      <Image
                        width="1000"
                        height="1000"
                        src={image}
                        alt=""
                        className="w-[300px] rounded-xl aspect-square object-cover p-5"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="grid gap-3">
              <label className=" text-sm font-medium text-gray-700">
                Project Description
              </label>
              <textarea
                onChange={(e) => setDescription(e.target.value)}
                required
                value={description}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-600 sm:text-sm"
                rows="5"
              />
            </div>
            <div className="grid gap-3">
              <label className=" text-sm font-medium text-gray-700">
                Github Url{" "}
                <span className="text-black">(Not Available - mention NA)</span>
              </label>
              <input
                type="text"
                required
                value={githubUrl}
                onChange={(e) => setGithubUrl(e.target.value)}
                className=" w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-600 sm:text-sm"
              />
            </div>
            <div className="grid gap-3">
              <label className=" text-sm font-medium text-gray-700">
                Live Url{" "}
                <span className="text-black">(Not Available - mention NA)</span>
              </label>
              <input
                type="text"
                required
                value={liveUrl}
                onChange={(e) => setLiveUrl(e.target.value)}
                className=" w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-600 sm:text-sm"
              />
            </div>

            <div className="grid gap-3 pt-5">
              <input
                type="submit"
                required
                value={"Update Project"}
                className=" w-full px-3 py-2 border border-gray-300 bg-black text-white rounded-md sm:text-sm"
              />
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
