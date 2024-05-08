"use client";
import React, { useTransition, useState } from "react";
import BioPic from "./BioPic";

const Bio = () => {
  const [tab, setTab] = useState("languages");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="border-2 border-black border-opacity-100 bg-indigo-400">
      <div className="border-2 border-black border-opacity-100 bg-black">
        <h2 className="text-5xl font-sans font-bold text-white mt-8 mb-4 px-4 xl:px-16">Bio:</h2>
        <p className="text-base font-sans lg:text-lg mb-8 px-4 xl:px-16 text-white">
          Hi, my name is Connor Brown. I'm looking for a new opportunity to start my career.
          I graduated with a Bachelor's of Computer Information Systems from the University
          of North Alabama, and I'm currently enrolled in the master's program with a concentration
          in Information Systems. During my time in school and in my own free time, I have learned
          and taught myself a variety of skills like JavaScript, AWS Lambda, MySQL, and others that are 
          listed in my "Skills" section. I have a passion for coding, and I am always looking to challenge 
          myself with new technologies and improve my skills.  
        </p>
      </div>
      <div className="border-2 border-black border-opacity-100 bg-black">
        <BioPic />
      </div>
    </section>

  );
 
};
export default Bio;
