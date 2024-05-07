"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";
import AboutPic from "./AboutPic";

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
    <section className="text-white" id="about">
  <div className="md:flex md:items-start py-8 px-4 xl:px-16">
    <div className="md:flex md:flex-row md:items-start md:justify-center md:flex-1">
      <AboutPic />
    </div>
    <div className="md:flex md:flex-row md:items-start md:justify-center md:flex-1 md:ml-8 text-center md:text-left mt-4 md:mt-0">
      <div className="flex flex-col">
        <h2 className="text-5xl font-sans font-bold text-white mt-0 mb-4">Bio:</h2>
        <p className="text-base font-sans lg:text-lg mb-0">
          Hi, my name is Connor Brown. I'm looking for a new opportunity to start my career.
          I graduated with a Bachelor's of Computer Information Systems from the University
          of North Alabama, and I'm currently enrolled in the master's program with a concentration
          in Information Systems. During my time in school and in my own free time, I have learned
          and taught myself a variety of skills like JavaScript, AWS Lambda, MySQL, and others that are 
          listed in my "Skills" section. I have a passion for coding, and I am always looking to challenge 
          myself with new technologies and improve my skills.  
        </p>
      </div>
    </div>
  </div>
</section>

  );
 
};
export default Bio;
