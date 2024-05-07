'use client';
import React, { useState, useRef } from "react";
import SkillsTag from "./SkillsTag";
import { useInView } from "framer-motion";

const skillsData= [
  {
    title: "Coding Languages",
    id: "languages",
    skills: (
      <ul className="list-disc pl-5">
        <li>C#</li>
        <li>Java</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>SQL</li>
        <li>PHP</li>
      </ul>
    ),
  },
  {
    title: "Software Technologies",
    id: "software",
    skills: (
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
    skills: (
      <ul className="list-disc pl-5">
        <li>MySQL</li>
        <li>MongoDB</li>
        <li>DynamoDB</li>
        <li>MariaDB</li>
        <li>Access</li>
        <li>Excel</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    skills: (
      <ul className="list-disc pl-5">
        <li>University of North Alabama, Florence, AL</li>
        <li>Master's, Concentration: Information Systems</li>
        <li>Bachelor's, Major: Computer Information Systems</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    skills: (
      <ul className="list-disc pl-5">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const SkillsSection = () => {
  const [tag, setTag] = useState("Software Development");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  // Find the selected tag from skillsData
  const selectedTag = skillsData.find((skill) => skill.title === tag);

  // Function to sort list items alphabetically
  const sortListItems = (list) => {
    return React.Children.toArray(list.props.children).sort((a, b) => {
      return a.props.children.localeCompare(b.props.children);
    });
  };

  return (
    <section id="projects">
    <h2 className="text-center text-6xl font-bold font-sans text-white mt-12 mb-8 md:mb-6">
      My Skills
    </h2>
    <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
      {skillsData.map((skill) => (
        <SkillsTag
          key={skill.id}
          onClick={handleTagChange}
          name={skill.title}
          isSelected={tag === skill.title}
        />
      ))}
    </div>
  
    {/* Grid of buttons */}
    {selectedTag && (
      <div className="w-full bg-gray-700 rounded-lg shadow-lg p-4 mt-4 outline-white">
        {selectedTag.skills.type === "buttons" && (
          <div className="grid grid-cols-4 gap-4">
            {selectedTag.skills.data.map((skill, index) => (
              <button
                key={index}
                className="bg-gradient-to-r from-blue-500 to-pink-500 text-white font-sans text-xl py-2 px-4 rounded-lg border-2 border-white outline-none focus:outline-none"
                onClick={() => handleButtonClick(skill)}
              >
                {skill}
              </button>
            ))}
          </div>
        )}
  
        {selectedTag.skills.type === "ul" && (
          <ul className={`${selectedTag.skills.props.className} mt-4`}>
            {sortListItems(selectedTag.skills)}
          </ul>
        )}
  
        {/* Add other cases as needed */}
      </div>
    )}
  </section>
  );
};

export default SkillsSection;
