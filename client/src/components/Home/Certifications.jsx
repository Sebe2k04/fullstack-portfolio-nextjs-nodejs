"use client";
import { axiosInstance } from "@/utils/axiosConfig";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import CertificationCard from "../CertificationCard";
import Loader from "../Loader";

const Certifications = () => {
  const [certifications, setCertifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const query = new URLSearchParams({
          limit: 2,
        }).toString();

        const res = await axiosInstance.get(`/certification?${query}`);
        console.log(res.data);
        setLoading(false);
        setCertifications(res.data.certifications);
      } catch (error) {
        console.error(error);
        toast.error("Unable to get Certifications");
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
            Certifications
          </span>
        </h1>
      </div>
      {loading ? (
        <div className="">
          <Loader />
        </div>
      ) : (
        <div className="py-10 flex flex-wrap justify-center">
          {certifications.map((certification, index) => (
            <div key={index}>
              <CertificationCard certification={certification} />
            </div>
          ))}
        </div>
      )}
      <div className="flex justify-center">
        <Link
          href={"/certifications"}
          className="px-5 py-1 border-2 shadow-sm rounded-2xl text-sm"
        >
          Show More
        </Link>
      </div>
    </div>
  );
};

export default Certifications;
