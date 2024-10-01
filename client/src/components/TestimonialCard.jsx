import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

const TestimonialCard = ({ testimonial }) => {
  const elements = Array.from(
    { length: testimonial.rating },
    (_, index) => index + 1
  );

  return (
    <div className="backdrop-blur-md border-2 border-b-8 border-r-4 border-white rounded-xl text-black p-5 w-[320px] h-[200px]">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="">
            <Image
              src={testimonial.image}
              width="100"
              height="100"
              alt={testimonial.name}
              className="w-[30px] h-[30px] rounded-full"
            />
          </div>
          <div className="">
            <h1 className="font-semibold text-sm truncate">{testimonial.name}</h1>
            <h3 className="text-sm truncate">{testimonial.designation}</h3>
          </div>
        </div>
        <div className="text-3xl text-white">
          <FaQuoteRight />
        </div>
      </div>
      <div className="py-3">
        <div className="flex gap-1">
          {elements.map((star, index) => (
            <FaStar key={index} className="text-orange-500" />
          ))}
        </div>
      </div>
      <div className="">
        <h1 className="text-sm">{testimonial.recommendation}</h1>
      </div>
    </div>
  );
};

export default TestimonialCard;
