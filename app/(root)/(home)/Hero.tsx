"use client";
import Image from "next/image";
import { TypewriterEffect } from "../../../components/ui/typewriter-effect";
import { FaArrowTurnDown } from "react-icons/fa6";
import Featured from "./Featured";

//  Kashmir's first ever high-school centric research society,
export function Hero() {
  const words = [
    {
      text: "Kashmir's",
    },
    {
      text: "First ",
    },
    {
      text: "Ever",
    },
    {
      text: "High-School",
    },
    {
      text: "Centric",
    },
    {
      text: "Research",
      className: "text-[#4e548e] dark:text-blue-500",
    },
    {
      text: " Society.",
      className: "text-[#4e548e] dark:text-blue-500",
    },
  ];
  return (
    <section className="h-[80vh] flex flex-col  items-center  justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className=" badging">We Represent The Young Of Our Generation</div>
        <div className=" flex flex-col text-center items-center justify-center mb-5">
          <TypewriterEffect words={words} className=" mb-2" />
          <p className="w-[90%] text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto,
            necessitatibus sit,{" "}
          </p>
        </div>
        <div className=" flex flex-col mt-4 md:flex-row md:gap-4 ">
          <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-pink-600 mb-5 w-[250px] px-8 py-2 bg-primary-crimson rounded-md text-white font-semibold transition duration-200 ease-linear">
            Sign Up
          </button>
          <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-gray-100 mb-5 w-[250px] px-8 py-2 border-2 rounded-md border-[#c7c6c6] text-black bg-white  font-semibold transition duration-200 ease-linear">
            Contact Us
          </button>

        
        </div>
      </div>
    </section>
  );
}
