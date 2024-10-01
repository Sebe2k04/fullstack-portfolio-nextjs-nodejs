"use client";
import { axiosInstance } from "@/utils/axiosConfig";
import { Dialog, DialogBody, Option, Select } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import TestimonialCard from "../TestimonialCard";
import Marquee from "react-fast-marquee";

const Testimonials = () => {
  const ratings = [
    {
      label: "5",
      value: 5,
    },
    {
      label: "4",
      value: 4,
    },
    {
      label: "3",
      value: 3,
    },
    {
      label: "2",
      value: 2,
    },
    {
      label: "1",
      value: 1,
    },
  ];

  const [openTestimonial, setOpenTestimonial] = useState(false);
  const [testimonials, setTestimonials] = useState([]);
  const handleOpen = () => {
    setOpenTestimonial(!openTestimonial);
  };
  const [modified, setModified] = useState(false);
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [rating, setRating] = useState(5);
  const [recommendation, setRecommendation] = useState("");
  const [image, setImage] = useState("");
  console.log(name, rating, recommendation, designation);

  useEffect(() => {
    const fetchTestimonial = async () => {
      try {
        const res = await axiosInstance.get("/testimonial");
        console.log(res.data);
        setTestimonials(res.data.testimonials);
      } catch {
        console.log(error);
        toast.error("Error fetching testimonials");
      }
    };
    fetchTestimonial();
  }, [modified]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("designation", designation);
    formdata.append("rating", rating);
    formdata.append("recommendation", recommendation);
    if (image) {
      formdata.append("image", image);
    }

    try {
      const res = await axiosInstance.post(`/testimonial`, formdata, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      console.log(res.data);
      toast.success("Added Successfully");
      setModified(!modified);
    } catch (error) {
      console.log(error);
      toast.error("Error Addding Testimonial");
    }
  };

  return (
    <div className="">
      <Dialog
        className="bg-gray-100 w-[200px]"
        open={openTestimonial}
        handler={handleOpen}
        size="xs"
      >
        <DialogBody>
          <div className="cursor-pointer text-black min-w-[200px] relative overflow-scroll">
            <h1 className="text-center pb-5 "> Add Testimonial</h1>
            <div className="py-5">
              <form
                action=""
                onSubmit={handleSubmit}
                className="grid gap-5 w-full"
              >
                <div className=" gap-3 w-full">
                  <label className=" text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className=" w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-600 sm:text-sm"
                  />
                </div>
                <div className="grid gap-3">
                  <label className=" text-sm font-medium text-gray-700">
                    Designation
                  </label>
                  <input
                    type="text"
                    required
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                    className=" w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-600 sm:text-sm"
                  />
                </div>
                <div className="relative z-[0] grid gap-3">
                  <label className=" text-sm font-medium text-gray-700">
                    Select Rating
                  </label>
                  <Select
                    required
                    value={rating}
                    placeholder={"Select Level"}
                    className="border-gray-300 capitalize focus:border-gray-600 focus:outline-none placeholder:text-gray-400 label:text-gray-300 focus:ring-0 "
                  >
                    {ratings.map((rating, index) => (
                      <Option
                        onClick={() => setRating(rating.value)}
                        key={index}
                        value={rating.value}
                        className=""
                      >
                        {rating.label}
                      </Option>
                    ))}
                  </Select>
                </div>
                <div className="grid gap-3">
                  <label className=" text-sm font-medium text-gray-700">
                    Recommendation
                  </label>
                  <textarea
                    onChange={(e) => setRecommendation(e.target.value)}
                    required
                    maxLength={120}
                    minLength={90}
                    value={recommendation}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-600 sm:text-sm"
                    rows="5"
                  />
                </div>
                <div className="grid gap-3">
                  <label className=" text-sm font-medium text-gray-700">
                    Image (Optional)
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
                <div className="grid gap-3 pt-5">
                  <input
                    type="submit"
                    required
                    value={"Add Testimonial"}
                    className=" w-full px-3 py-2 border border-gray-300 bg-black text-white rounded-md sm:text-sm"
                  />
                </div>
              </form>
            </div>
          </div>
        </DialogBody>
      </Dialog>
      <div className="lg:px-10 px-5">
        <div className=" rounded-2xl bg-orange-300 p-6"></div>
      </div>
      <div className="bg-gradient-to-br from-yellow-100 to-red-100 rounded-3xl mt-[-35px]">
        <div className="lg:px-20 px-8  py-10 ">
          <div className="flex justify-center">
            <div className="">
              <h1 className="lg:text-3xl text-2xl text-center font-semibold">
                Testimonials that
              </h1>
              <h3 className="font-semibold lg:text-3xl text-2xl text-center  pt-1">
                Speak to{" "}
                <span className="text-orange-500 hello lg:text-4xl text-3xl font-normal">
                  My Results
                </span>
              </h3>
            </div>
          </div>
          <div className="flex justify-center py-5">
            <h3 className="lg:text-center text-justify max-w-[700px]">
              Testimonials that endorses my services and work based on every
              project by performing collaborative work on various fields ,
              Pleade describe your thoughts about me in the blow section . thank
              you !
            </h3>
          </div>
          <div className="flex justify-center">
            <div
              onClick={handleOpen}
              className="bg-orange-400 border-2 cursor-pointer border-white shadow-inner shadow-white rounded-2xl px-5 py-2 h-fit"
            >
              <h1 className="font-semibold text-white text-sm">Add Yours</h1>
            </div>
          </div>
        </div>
        <section className=" overflow-hidden w-full pb-14 text-center py-5 ">
          <Marquee pauseOnClick>
            {testimonials &&
              testimonials.map((testimonial, index) => {
                return (
                  <div key={index} className="px-8 flex items-start h-full">
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                );
              })}
          </Marquee>
        </section>
        {/* <div className="pb-10 flex gap-8 overflow-hidden"></div> */}
      </div>
    </div>
  );
};

export default Testimonials;
