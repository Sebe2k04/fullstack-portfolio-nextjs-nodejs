"use client"
import Loader from "@/components/Loader";
import { axiosInstance } from "@/utils/axiosConfig";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Page() {
  const [resume, setResume] = useState("");
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    const fetchResume = async () => {
        setLoading(true)
      try {
        const res = await axiosInstance.get("/resume");
        setResume(res.data[0]);
        setLoading(false)
        console.log(res.data[0]);
      } catch (error) {
        console.error(error);
        toast.error("Error fetching Resume");
      }
    };

    fetchResume();
  }, []);
  return (
    <div className="lg:px-20 px-8 py-10">
      <div className="max-w-[300px]">
        <h1 className="font-semibold text-3xl">
          Let&apos;s have a look at my{" "}
          <span className="hello text-4xl font-normal text-orange-400">
            Resume
          </span>
        </h1>
      </div>
      <div className="py-10">
        {
loading ? (
    <Loader/>
) : (
    <div className="flex justify-center">
          <iframe
            src={resume.link}
            width="640"
            height="480"
            allow="autoplay"
          ></iframe>
        </div>
)
        }
      </div>
    </div>
  );
}
