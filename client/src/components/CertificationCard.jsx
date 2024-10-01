import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsGlobe2 } from "react-icons/bs";

const CertificationCard = ({ certification }) => {
  return (
    <div className="p-1 rounded-xl bg-gray-200">
      <div className="rounded-xl backdrop-blur-md bg-white border max-w-[400px] pt-5">
        <div className="px-5">
          <Image
            src={certification.image}
            width="500"
            height="500"
            alt={certification.name}
            className="rounded-2xl"
          />
          <div className="py-5">
            <h1 className="font-semibold truncate">{certification.name}</h1>
            <h2 className="text-gray-400 text-sm">{certification.provider}</h2>
          </div>
        </div>
        <div className="flex justify-between">
          {certification.url === "NA" ? (
            <div className="bg-gray-200 px-3 py-2 rounded-tr-xl text-xl rounded-bl-xl shadow-inner ">
              <BsGlobe2 className="opacity-20" />
            </div>
          ) : (
            <Link
              target="_blank"
              href={certification.url}
              className="bg-gray-200 px-3 py-2 rounded-tr-xl text-xl rounded-bl-xl shadow-inner "
            >
              <BsGlobe2 />
            </Link>
          )}
          <Link
            href={`/certifications/${certification._id}`}
            className="bg-gray-200 px-3 py-2 text-sm rounded-tl-xl rounded-br-xl shadow-inner"
          >
            Know More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CertificationCard;
