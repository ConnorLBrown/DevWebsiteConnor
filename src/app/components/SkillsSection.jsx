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
      <ul className="text-white border-primary-500">
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
      <ul className="text-white border-primary-500">
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
      <ul className="text-white border-primary-500">
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
      <h2 className="text-center text-4xl font-bold text-white mt-12 mb-8 md:mb-6">
        Skills
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

      {/* Display selected skills */}
      <div>
        {selectedTag && (
          <div className="text-white border-primary-500">
            {/* Sort the list items alphabetically */}
            {selectedTag.skills.type === "ul" ? (
              <ul className={selectedTag.skills.props.className}>
                {sortListItems(selectedTag.skills)}
              </ul>
            ) : (
              selectedTag.skills
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default SkillsSection;
