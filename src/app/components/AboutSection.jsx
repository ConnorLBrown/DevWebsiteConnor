"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

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

const AboutSection = () => {
  const [tab, setTab] = useState("languages");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("languages")}
              active={tab === "languages"}
            >
              {" "}
              Coding Languages{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("software")}
              active={tab === "software"}
            >
              {" "}
              Software Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("database")}
              active={tab === "database"}
            >
              {" "}
              Database Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
