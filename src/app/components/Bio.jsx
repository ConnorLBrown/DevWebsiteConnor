"use client";
import React, { useTransition, useState } from "react";
import BioPic from "./BioPicture";
import SkillsSection from "./SkillsSection";

const TAB_DATA = [
  {
    title: "Coding Languages",
    id: "languages",
    content: (
      <ul className="list-disc pl-5">
        <li>C#</li>
        <li>Java</li>
        <li>JavaScroipt</li>
        <li>TypeScript</li>
        <li>SQL</li>
        <li>PHP</li>
      </ul>
    ),
  },
  {
    title: "Software Technolgies",
    id: "software",
    content: (
      <ul className="list-disc pl-5">
        <li>AWS Lambda</li>
        <li>AWS S3</li>
        <li>AWS Amplify</li>
        <li>AJAX</li>
        <li>ASP.NET</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>TailwindCSS</li>
        <li>Node.js</li>
        <li>Next.js</li>
        <li>React.js</li>
        <li>Express.js</li>
      </ul>
    ),
  },
  {
    title: "Database Technologies",
    id: "database",
    content: (
      <ul className="list-disc pl-5">
        <li>MySQL</li>
        <li>MongoDB</li>
        <li>DynamoDB</li>
        <li>MariaDB</li>
        <li>Acess</li>
        <li>Excel</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <ui>University of North Alabama, (Florence, AL)</ui>
        <li>Master's, Concentration: Information Systems</li>
        <li>Bachelor's, Major: Computer Information Systems</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const Bio = () => {
  const [tab, setTab] = useState("languages");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="bg-slate-800 py-8 rounded-lg border-4 border-slate-400">
  <div className="md:flex md:items-start py-8 xl:px-16">
  <div className="md:flex md:flex-row md:items-start md:justify-center md:flex-1">
      <BioPic />
    </div>
    <div className="md:flex md:flex-row md:items-start md:justify-center md:flex-1 md:ml-8 text-center md:text-left mt-4 md:mt-0">
      <div className="flex flex-col">
        <h2 className="capitalize relative text-transparent font-sans mb-4 text-5xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold bg-clip-text" style={{ WebkitTextFillColor: "transparent" }}>About me</h2>
        <h3 className="text-xl text-white font-sans lg:text-lg mb-0">
        I'm Connor Brown, a motivated professional seeking new career opportunities. Armed with a Bachelor's in Computer Information Systems from the
        University of North Alabama and currently pursuing a Master's with a focus on Information Systems, I bring a strong educational foundation. 
        Through dedicated self-study and academic endeavors, I've cultivated a diverse skill set, including proficiency in JavaScript, AWS Lambda, MySQL, 
        and more. Passionate about coding, I thrive on challenges and continually strive to enhance my expertise in emerging technologies.
        </h3>
      </div>
    </div>
  </div>
</section>

  );
 
};
export default Bio;
