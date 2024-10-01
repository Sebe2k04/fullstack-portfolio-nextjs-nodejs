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

export default function Page() {
  const {
    pagination,
    setPagination,
  } = useGlobalContext();

  const [testimonials,setTestimonials] = useState([]);
  const [project, setProject] = useState("");
  const [deleteId, setDeleteId] = useState("");
  const [openDelete, setOpenDelete] = useState(false);
  const [modified, setModified] = useState(false);

  const [PaginatedValue, SetPaginatedValue] = useState(1);

  const [loading, setLoading] = useState(true);


  const handleOpenDelete = (id) => {
    setDeleteId(id);
    setOpenDelete(!openDelete);
  };

  // console.log(product);

  const handleDelete = async () => {
    setOpenDelete(!openDelete);
    try {
      const res = await axiosInstance.delete(`/testimonial/${deleteId}`);
      console.log(res.data);
      toast.success("Testimonial Removed");
      setModified(true);
    } catch (error) {
      toast.error("Error Removing Testimonial");
      console.error(error);
    }
  };

  useEffect(() => {
    if (PaginatedValue == pagination.totalPages) {
    } else {
      setPagination({ ...pagination, totalPages: PaginatedValue });
    }
  }, [PaginatedValue]);

  const memoizedData = useMemo(() => {
    const fetchTestimonials = async () => {
      const query = new URLSearchParams({
        page: pagination.currentPage,
      }).toString();
      try {
        const res = await axiosInstance.get(`/testimonial?${query}`);
        console.log(res.data);

        setTestimonials(res.data.testimonials);
        SetPaginatedValue(res.data.totalPages);
        setLoading(false);
      } catch (error) {
        toast.error("Error fetching Testimonial");
        console.error(error);
      }
    };
    return async () => {
      setLoading(true);
      await fetchTestimonials();
    };
  }, [ modified, pagination]);

  console.log(testimonials);
  useEffect(() => {
    memoizedData();
  }, [memoizedData]);
  return (
    <div className="lg:px-10 px-8 py-8 lg:pt-8 pt-24">
     

      <Dialog
        className="bg-gray-100 w-[200px]"
        open={openDelete}
        handler={handleOpenDelete}
        size="xs"
      >
        <DialogBody>
          <div className="cursor-pointer text-black">
            <h1 className="text-center pb-5 ">
              {" "}
              Are you sure to delete this item?
            </h1>
            <div className="flex justify-between px-5">
              <div
                onClick={handleDelete}
                className="flex gap-2 items-center bg-black text-white px-3 py-1 rounded-md"
              >
                <RiDeleteBin5Line className="text-xl" />

                <h1>Delete</h1>
              </div>
              <div
                onClick={handleOpenDelete}
                className="flex gap-1 items-center border border-black px-3 py-1 rounded-md"
              >
                <TiCancel className="text-2xl" />

                <h1>Cancel</h1>
              </div>
            </div>
          </div>
        </DialogBody>
      </Dialog>

      <div className="lg:flex justify-between items-center ">
        <div className="flex gap-2 items-center">
          <Link href={"/admin/secure/home"}>
            <IoIosArrowBack />
          </Link>

          <h1 className="text-xl font-semibold">Testimonials</h1>
        </div>
      </div>
 
      {loading ? (
        <Loader />
      ) : (
        <div className="py-5">
          {testimonials && (
            <div className="w-full overflow-x-scroll pb-20">
              <table className="table-auto w-full">
                <thead>
                  <tr className="py-5 bg-gray-200 w-full ">
                    <th className="lg:px-8 px-5 py-5 ">Image</th>
                    <th className="lg:px-8 px-5 py-5 ">Name</th>
                    <th className="lg:px-8 px-5 py-5 ">Designation</th>
                    <th className="lg:px-8 px-5 py-5 ">Rating</th>
                    <th className="lg:px-8 px-5 py-5 ">Recommendation</th>
                    <th className="lg:px-8 px-5 py-5 ">Created At</th>
                    <th className="lg:px-8 px-5 py-5 ">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {testimonials.map((testimonial) => (
                    <tr key={project._id}>
                      <td className="px-5 text-center py-3 flex justify-center">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="max-w-[100px] max-h-[100px] aspect-square object-cover rounded-md"
                        />
                      </td>
                      <td className="px-5 text-center py-3">{testimonial.name}</td>
                      <td className="px-5 text-center py-3">
                        {testimonial.designation}
                      </td>
                      <td className="px-5 text-center py-3">
                        {testimonial.rating}
                      </td>
                      <td className="px-5 text-center py-3">
                        {testimonial.recommendation}
                      </td>
                      <td className="px-5 text-center py-3">
                        {new Date(testimonial.createdAt).toLocaleString()}
                      </td>
                      <td className="px-5 text-center py-3">
                        <div className="flex justify-center">
                          <div className="relative group">
                            <button className="hover:text-black hover:scale-125 duration-100 relative z-[1]">
                              ...
                            </button>
                            <div className="absolute right-0 pt-5 bg-white z-[10] text-gray-400 hidden group-hover:block hover:block">
                              <div className="container bg-white px-5 pt-3 pb-1 w-full shadow-lg rounded-xl ">
                                <div className=" min-w-fit text-sm bg-white">
                                  <ul>
                                    
                                    <li className="mb-2 hover:text-black">
                                      <h1
                                        onClick={() =>
                                          handleOpenDelete(testimonial._id)
                                        }
                                      >
                                        Delete
                                      </h1>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
