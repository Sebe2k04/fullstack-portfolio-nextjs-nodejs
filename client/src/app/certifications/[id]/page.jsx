"use client";

import Loader from "@/components/Loader";
import { axiosInstance } from "@/utils/axiosConfig";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { BsGlobe2 } from "react-icons/bs";
import { toast } from "react-toastify";

export default function Page() {
  const { id } = useParams();
  const [certification, setCertification] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCertification = async () => {
      setLoading(true);
      try {
        const res = await axiosInstance.get(`/certification/${id}`);
        console.log(res.data);
        setLoading(false);
        setCertification(res.data);
      } catch (error) {
        console.log(error);
        toast.error("Error fetching Certification");
      }
    };
    fetchCertification();
  }, []);
  return (
    <div className="lg:px-20 px-8 py-10">
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div className="grid gap-5">
            <div className="">
              <Image
                src={certification.image}
                width="1000"
                height="1000"
                alt={certification.name}
                className="m-auto rounded-2xl w-full md:max-w-[600px]  "
              />
            </div>
            <div className="py-5">
              <h1 className="text-2xl font-semibold">{certification.name}</h1>
              <h2 className="text-gray-400 ">{certification.provider}</h2>
              <h2 className="text-gray-400 pt-5 ">{certification.level}</h2>
              <div className="py-5">
                <div className="font-semibold pb-2">Skills</div>
                <div className="flex flex-wrap gap-3">
                  {certification.skills.map((skill, i) => {
                    return (
                      <div key={i} className="">
                        <div className="w-fit h-fit border border-b-4 text-3xl md:text-5xl rounded-2xl px-3 py-1 ">
                          <h1 className="text-center text-sm">{skill}</h1>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex justify-between md:justify-normal gap-5 py-5">
                {certification.url === "NA" ? (
                  <div className="flex items-center opacity-20 gap-2 bg-gray-200 rounded-xl px-5 py-2l">
                    <BsGlobe2 />
                    <h1>Url</h1>
                  </div>
                ) : (
                  <Link
                  target="_blank"
                    href={project.liveUrl}
                    className="flex items-center gap-2 bg-gray-200 rounded-xl px-5 py-2"
                  >
                    <BsGlobe2 />
                    <h1>Url</h1>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
