"use client";
import Search from "@/components/Search";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { toast } from "react-toastify";
import { axiosInstance } from "@/utils/axiosConfig";
import { useGlobalContext } from "@/context/GlobalProvider";
import Pagination from "@/components/Pagination";
import Loader from "@/components/Loader";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";
export default function Page() {
  const {
    projects,
    setProjects,
    searchTerm,
    setSearchTerm,
    pagination,
    setPagination,
  } = useGlobalContext();

  const [modified, setModified] = useState(false);

  const [PaginatedValue, SetPaginatedValue] = useState(1);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (PaginatedValue == pagination.totalPages) {
    } else {
      setPagination({ ...pagination, totalPages: PaginatedValue });
    }
  }, [PaginatedValue]);

  const memoizedData = useMemo(() => {
    const fetchProducts = async () => {
      const query = new URLSearchParams({
        search: searchTerm,
        page: pagination.currentPage,
      }).toString();
      try {
        const res = await axiosInstance.get(`/project?${query}`);
        console.log(res.data);

        setProjects(res.data.projects);
        SetPaginatedValue(res.data.totalPages);
        setLoading(false);
      } catch (error) {
        toast.error("Error fetching Product");
        console.error(error);
      }
    };
    return async () => {
      setLoading(true);
      await fetchProducts();
    };
  }, [searchTerm, modified, pagination]);

  console.log(projects);
  useEffect(() => {
    memoizedData();
  }, [memoizedData]);
  return (
    <div className="lg:px-20 px-8 py-8 lg:pt-8 pt-5">
      <div className="lg:flex justify-between items-center pb-5 ">
        <div className="flex gap-2 items-center">
          <Link href={"/"}>
            <IoIosArrowBack />
          </Link>

          <h1 className="text-2xl font-semibold">
            All{" "}
            <span className="font-normal text-3xl hello text-orange-400">
              Projects
            </span>
          </h1>
        </div>
        <div className="flex justify-center lg:block pt-5 lg:pt-0">
          <Search />
        </div>
      </div>

      {loading ? (
        <Loader />
      ) : (
        <div className="py-10">
          {projects && (
            <div className="flex flex-wrap gap-8 justify-center">
              {projects.map((project, index) => (
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
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      )}
      <div className="flex justify-center py-5">
        <Pagination />
      </div>
    </div>
  );
}
