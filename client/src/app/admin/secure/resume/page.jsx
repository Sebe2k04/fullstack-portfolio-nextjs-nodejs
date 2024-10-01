"use client";
import Loader from "@/components/Loader";
import { axiosInstance } from "@/utils/axiosConfig";
import { Dialog, DialogBody, Spinner } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { TiCancel } from "react-icons/ti";
import { toast } from "react-toastify";

export default function Page() {
  const [fetch, setFetch] = useState(false);
  const [resumeAvail, setResumeAvail] = useState(false);
  const [modified, setModified] = useState(false);
  const [resume, setResume] = useState("");
  const [resumeLink, setResumeLink] = useState("");
  const [name, setName] = useState("");
  const [openUpdate, setOpenUpdate] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleOpenUpdate = () => {
    setOpenUpdate(!openUpdate);
  };
  useEffect(() => {
    const fetchResume = async () => {
      setFetch(false);
      try {
        const res = await axiosInstance.get("/resume");
        console.log(res.data);
        setFetch(true);
        if (res.data.length > 0) {
          setResumeAvail(true);
          setResume(res.data);
          setResumeLink(res.data[0].link);
          setName(res.data[0].name);
        } else {
          setResumeAvail(false);
        }
      } catch (error) {
        toast.error("Resume not Available");
      }
    };
    fetchResume();
  }, [modified]);

  const handleCreateResume = async () => {
    try {
      const res = await axiosInstance.post("/resume");
      console.log(res.data);
      setModified(!modified);
      toast.success("Resume created successfully");
    } catch (error) {
      console.log(error);
      toast.error("Unable to create Resume");
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const regex = /\/d\/(.*?)(\/|$)/;
    const match = resumeLink.match(regex);

    if (match) {
      // Extract the FILE_ID
      const fileId = match[1];
      // Create the embeddable link
      const embedLink = `https://drive.google.com/file/d/${fileId}/preview`;
      handleSubmit(embedLink);
    } else {
      toast.error("Invalid Google Drive link");
      return "Invalid Google Drive link";
    }
  };

  const handleSubmit = async (embedLink) => {
    setLoading(true);
    try {
      const res = await axiosInstance.put(`/resume/${resume[0]._id}`, {
        name,
        link: embedLink,
      });
      console.log(res.data);
      setModified(!modified);
      toast.success("Resume updated successfully");
      setOpenUpdate(!openUpdate);
      setLoading(false);
    } catch (error) {
      console.error(error);
      toast.error("Unable to update Resume");
      setLoading(false);
    }
  };

  return (
    <div className="lg:px-10 px-8 py-10">
      <Dialog
        className="bg-gray-100 w-[200px]"
        open={openUpdate}
        handler={handleOpenUpdate}
        size="xs"
      >
        <DialogBody>
          <div className="cursor-pointer text-black">
            <h1 className="text-center pb-5 "> Update</h1>
            <div className="py-5">
              <form action="" onSubmit={handleUpdate} className="grid gap-5">
                <div className="grid gap-3">
                  <label className=" text-sm font-medium text-gray-700">
                    Resume Name
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
                    Google Drive Link
                  </label>
                  <input
                    type="text"
                    required
                    onChange={(e) => setResumeLink(e.target.value)}
                    className=" w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-600 sm:text-sm"
                  />
                </div>
                <div className="grid gap-3 pt-5">
                  <input
                    type="submit"
                    required
                    value={"Update Resume"}
                    className=" w-full px-3 py-2 border border-gray-300 bg-black text-white rounded-md sm:text-sm"
                  />
                </div>
              </form>
            </div>
          </div>
        </DialogBody>
      </Dialog>
      <h1 className="text-2xl font-semibold">Resume</h1>
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
      {fetch ? (
        <div className="pt-10">
          {resumeAvail ? (
            <div className="">
              <div className="flex justify-end">
                <div
                  onClick={handleOpenUpdate}
                  className="px-5 py-2 rounded-xl  bg-black text-white font-semibold"
                >
                  Update
                </div>
              </div>
              <div className="py-10">
                {resumeLink === "NA" ? (
                  <div className="">
                    <h1 className="text-center font-semibold">
                      Provide resume link through Update Resume option
                    </h1>
                  </div>
                ) : (
                  <div className="">
                    <div className="flex justify-center">
                      <iframe
                        src={resumeLink}
                        width="640"
                        height="480"
                        allow="autoplay"
                      ></iframe>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="flex justify-center">
              <div
                onClick={handleCreateResume}
                className="px-5 py-2 bg-black text-white rounded-xl"
              >
                Create Resume
              </div>
            </div>
          )}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}
