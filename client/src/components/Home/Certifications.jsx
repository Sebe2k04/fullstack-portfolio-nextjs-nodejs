"use client";
import { axiosInstance } from "@/utils/axiosConfig";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import CertificationCard from "../CertificationCard";
import Loader from "../Loader";
import { motion } from "framer-motion";

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
        <motion.h1
          initial={{ opacity: 0, scale: 0.4, x: 100 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 50 }}
          viewport={{ once: true }}
          className="font-semibold text-3xl"
        >
          Let&apos;s have a look at my{" "}
          <span className="hello text-4xl font-normal text-orange-400">
            Certifications
          </span>
        </motion.h1>
      </div>
      {loading ? (
        <div className="">
          <Loader />
        </div>
      ) : (
        <div className="py-10 flex flex-wrap gap-8 justify-center">
          {certifications.map((certification, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 50,
                delay: index / 10,
              }}
              viewport={{ once: true }}
              key={index}
            >
              <CertificationCard certification={certification} />
            </motion.div>
          ))}
        </div>
      )}
      <div className="flex justify-center">
        <Link
          href={"/certifications"}
          className="px-5 py-1 border-2 shadow-sm rounded-2xl text-sm hover:bg-blue-gray-600 hover:text-white duration-200"
        >
          Show More
        </Link>
      </div>
    </div>
  );
};

export default Certifications;
