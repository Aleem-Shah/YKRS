
"use client"
import React from 'react'

import { HoverEffect } from '@/components/ui/card-hover-effect';
import AboutVideo from '@/app/(root)/(home)/AboutVideo';

const page = () => {
  return (
    <main>
        <AboutVideo/>
        <div className="xl:px-72">
        <h1 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl !uppercase font-bold  !ml-6'>What we do?</h1>
        <HoverEffect items={projects} />
        </div>
    </main>
  )
}

export const projects = [
 
    {
      title: "One-to-One Mentorship",
      description:
        "Deserving researchers will be provided with personal mentorship and guidance from one of the members of the mentorship committee, who are pioneers in their field of work. Such teams/individuals will get access to all of the exclusive resources for their research projects. For more information, refer to About Our Programs.",
      link: "#", // Add the relevant link if available
    },
    {
      title: "Answering queries",
      description:
        "Get answers to your questions about writing a research paper from our team of mentors on our Discord Server. Such queries can be technical in nature, or about specific academic areas as well.",
      link: "#", // Add the relevant link if available
    },
    {
      title: "Building community",
      description:
        "Facilitating discourse and dialogue amongst the members to ensure proliferation of ideas and collaboration on projects through a self-reinforcing cycle is one of the main priorities of our organization.",
      link: "#", // Add the relevant link if available
    },
    {
      title: "Providing teammates and forming super teams",
      description:
        "Like-minded candidates applying to our programs will be grouped together and assigned a mentor and a topic, if needed, to work on a research project under the constant guidance and support of the organization. Existing teams currently working on a project will be provided with additional manpower if they require more team members and approach the organization through our assistance program. See About Our Programs.",
      link: "#", // Add the relevant link if available
    },
    {
      title: "YKRS Kick-Start Manual",
      description:
        "The manual will assist you in your journey into the world of research. Crafted delicately by our team, it aims to provide an overview of conducting research and writing an academic paper on an introductory basis.",
      link: "#", // Add the relevant link if available
    },
    {
      title: "Providing online and offline resources",
      description:
        "Online learning material, research papers, and research opportunities will be regularly posted across all social media platforms, our Discord server, as well as updated on this guide. Offline resources such as a chance to experiment and intern in a physical lab, interaction with university professors, tour of science labs, or information on offline research programs will also be provided by the society, as and when available. Do check the Resources section of this guide as well as the server for regular updates!",
      link: "#", // Add the relevant link if available
    },
    {
      title: "Publishing your paper",
      description:
        "Publishing your research paper, especially in a renowned journal, can be a hard nut to crack! But through YKRS’s network of connections, we will help you get your paper published in reputed research journals and provide you with the platform that you deserve. See About Our Programs.",
      link: "#", // Add the relevant link if available
    },
    {
      title: "Providing financial support",
      description:
        "Deserving researchers will be provided with financial assistance by YKRS. If deemed necessary, you will be sponsored by our partners to complete your research using the best technology and guidance while covering the full costs of the project. However, such aid is very limited and we will be able to finance only a handful of teams under this program. Please contact the Admin at ykresearchsociety@gmail.com for more details.",
      link: "#", // Add the relevant link if available
    },
    {
      title: "Webinars/Seminars/Workshops",
      description:
        "We will be hosting reputed researchers, scholars, and professors of Kashmir Valley and elsewhere to speak on various topics and issues that concern the new generation of researchers in the contemporary era. We will also be hosting interactive workshops for our audience to understand the entire process of analysis and research. In our initial stages, such programs will be restricted to online mode; however, as we grow, we will organize offline versions of such programs as well.",
      link: "#", // Add the relevant link if available
    },
  ];
  
export default page