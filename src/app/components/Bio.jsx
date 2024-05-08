"use client";
import React, { useTransition, useState } from "react";
import BioPic from "./BioPic";
import SkillsSection from "./SkillsSection";

const Bio = () => {
  const [tab, setTab] = useState("languages");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="border-2 border-black border-opacity-100 bg-transparent">
    <div className="border-2 border-black border-opacity-100 bg-transparent flex flex-wrap">
  <div className="w-full lg:w-1/2 order-2 lg:order-1 flex items-center justify-center" style={{ paddingRight: '4rem' }}>
    <BioPic className='Object-cover=h-full w-full object-cover' style={{ width: '100%', maxWidth: '400px', fit:'cover' }} />
  </div>
  <div className="w-full lg:w-1/2 order-1 lg:order-2">
    <h2 className="text-8xl font-sans font-bold text-black mt-8 mb-4 px-4 xl:px-16">Bio:</h2>
    <p className="text-2xl font-sans lg:text-lg mb-8 px-4 xl:px-16 text-black">
      Hi, my name is Connor Brown. I'm looking for a new opportunity to start my career.
      I graduated with a Bachelor's of Computer Information Systems from the University
      of North Alabama, and I'm currently enrolled in the master's program with a concentration
      in Information Systems. During my time in school and in my own free time, I have learned
      and taught myself a variety of skills like JavaScript, AWS Lambda, MySQL, and others that are 
      listed in my "Skills" section. I have a passion for coding, and I am always looking to challenge 
      myself with new technologies and improve my skills.
      <SkillsSection />  
    </p>
  </div>
</div>


    </section>

  );
 
};
export default Bio;
