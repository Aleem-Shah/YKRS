"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function TestimonialCard() {
  return (
    <div className="h-[40rem]  rounded-md flex flex-col antialiased bg-transparent dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
    {
      quote:
        "Participating in the research program was a transformative experience. It allowed me to delve deeply into my interests, collaborate with like-minded peers, and gain invaluable skills that have set a solid foundation for my future academic pursuits.",
      name: "Aisha Ahmed",
      title: "Biochemistry Major",
    },
    {
      quote:
        "The opportunity to publish my findings in a recognized journal as an undergraduate was beyond my expectations. The mentorship and resources provided were instrumental in honing my research abilities and confidence.",
      name: "Omar Hussain",
      title: "Physics Student",
    },
    {
      quote:
        "This platform has been a cornerstone of my academic journey. It encouraged critical thinking, creativity, and scientific rigor, which have been crucial in my growth as a researcher.",
      name: "Fatima Khan",
      title: "Environmental Science Scholar",
    },
    {
      quote:
        "Being part of this research community has been incredibly rewarding. It fostered a collaborative environment where I could explore innovative ideas and contribute to meaningful scientific discussions.",
      name: "Zayd Malik",
      title: "Computer Science Enthusiast",
    },
    {
      quote:
        "The support and guidance I received from the organization were unparalleled. It opened doors to new research opportunities and helped me build a network with professionals in my field.",
      name: "Layla Siddiqui",
      title: "Chemistry Researcher",
    },
  ];
  