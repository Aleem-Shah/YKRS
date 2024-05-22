import Image from "next/image";
import React from "react";
import { IoIosCheckmark } from "react-icons/io";

const Card = ({
  title,
  description,
  image,
  points,
  badge,
}: {
  badge: string;
  title: string;
  description: string;
  image: string;
  points: string[];
}) => {
  return (
    <div className=" bg-[#fbfbfc] xl:h-[500px] xl:w-full lg:w-[90%] lg:h-full  mt-5 p-4 xl:p-6 rounded-xl border-2 border-gray-200 shadow-2xl xl:grid xl:grid-cols-2">
      
      <div className="w-full">
        <span className="badging !px-3 !font-semibold">{badge}</span>

        <h1 className="text-3xl font-semibold mt-3 mb-3 xl:text-[36px] xl:font-bold xl:mb-6 xl:mt-6">{title}</h1>
        <p className="text-[#6c6c6d] text-sm w-[95%]  mb-5">{description}</p>

        {/* mapping of points */}

        <div className="grid grid-cols-2 gap-4 w-full xl:w-[90%]">
          <div className="space-y-2">
            {points.slice(0, 3).map((item, i) => (
              <p
                className="flex  text-[#6c6c6d] text-sm xl:text-md font-semibold"
                key={i}
              >
                <span className="flex  justify-center">
                  <IoIosCheckmark className="text-xl" />
                </span>
                {item}
              </p>
            ))}
          </div>
          <div className="space-y-2">
            {points.slice(3, 6).map((item, i) => (
              <p
                className="flex items-center text-[#6c6c6d] lg:text-xs xl:text-md font-semibold"
                key={i}
              >
                <span className="flex items-center justify-center">
                  <IoIosCheckmark className="text-xl" />
                </span>
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className=" justify-center items-center flex">

        <Image
        src={image}
        width={400}
        height={400}
        alt=""
        className=""
        />
      </div>
    </div>
  );
};

export default Card;
