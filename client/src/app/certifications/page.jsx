"use client";
import Search from "@/components/Search";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { toast } from "react-toastify";
import { RiDeleteBin5Line } from "react-icons/ri";
import { TiCancel } from "react-icons/ti";
import { axiosInstance } from "@/utils/axiosConfig";
import { useGlobalContext } from "@/context/GlobalProvider";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { GiShoppingCart } from "react-icons/gi";
import { BiSolidOffer } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Pagination from "@/components/Pagination";
import Loader from "@/components/Loader";
import Projects from "@/components/Home/Projects";
import ProjectCard from "@/components/ProjectCard";
import CertificationCard from "@/components/CertificationCard";

export default function Page() {
  const {
    certifications,
    setCertifications,
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
        const res = await axiosInstance.get(`/certification?${query}`);
        console.log(res.data);

        setCertifications(res.data.certifications);
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

  console.log(certifications);
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

          <h1 className="text-2xl font-semibold">All <span className="font-normal text-3xl hello text-orange-400">Certifications</span></h1>
        </div>
        <div className="flex justify-center lg:block pt-5 lg:pt-0">
          <Search />
        </div>
      </div>

      {loading ? (
        <Loader />
      ) : (
        <div className="py-10">
          {certifications && (
            <div className="flex flex-wrap justify-center">
              {certifications.map((certification, index) => (
                <div key={index} className="">
                  <CertificationCard certification={certification} />
                </div>
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
