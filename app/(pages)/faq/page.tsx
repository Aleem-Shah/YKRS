"use client";

import Accordion from "@/components/ui/Accordian";
import { PlaceholdersAndVanishInput } from "../../components/ui/placeholders-and-vanish-input";
import { useState } from "react";

export default function page() {
  const placeholders = [
    "What is YKRS?",
    "How can I get into YKRS?",
    "How can I become a YKRS member?",
    "How can I start my research with YKRS?",
    "Why YKRS?",
  ];

  const sampleFAQs = [
    { question: "What is YKRS?", answer: "YKRS is a research society focused on promoting scientific research and collaboration." },
    { question: "How can I get into YKRS?", answer: "You can apply through our official website by submitting your research proposal and credentials." },
    { question: "How can I become a YKRS member?", answer: "Membership is open to researchers and enthusiasts who meet our criteria. Apply online to get started." },
    { question: "How can I start my research with YKRS?", answer: "Once you're a member, you can start your research by accessing our resources and collaborating with other members." },
    { question: "Why YKRS?", answer: "YKRS provides a collaborative environment and extensive resources to support innovative research." },
  ];

  const [filteredFAQs, setFilteredFAQs] = useState(sampleFAQs);

  const handleChange = (e:any) => {
    const query = e.target.value.toLowerCase();
    const filtered = sampleFAQs.filter(faq =>
      faq.question.toLowerCase().includes(query) || faq.answer.toLowerCase().includes(query)
    );
    setFilteredFAQs(filtered);
  };

  const onSubmit = (e:any) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <div className="flex flex-col min-h-screen items-center ">
      <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
        FAQ's
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
      <div className="flex-grow mt-5">
        <Accordion faqs={filteredFAQs} />
      </div>
    </div>
  );
}
