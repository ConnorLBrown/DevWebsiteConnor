"use client";
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
    return React.Children.toArray(list).sort((a, b) => {
      return a.props.children.localeCompare(b.props.children);
    });
  };

  return (
    <section id="projects" className="rounded-lg bg-slate-400 border-indigo-600 justify-center" style={{ borderWidth: '4px' }}>
    <p className="capitalize text-center text-6xl font-bold font-sans text-white mt-12 mb-8 md:mb-6" style={{ textShadow: '3px 3px 3px black', borderBottom: '3pt solid #6366f1' }}>
  My Skills
</p>
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
        <div className="w-full bg-gray-200 rounded-lg p-4 mt-3 border border-gray-300">
          {selectedTag.skills.type === "buttons" && (
            <div className="flex bg-white flex-wrap gap-4">
              {selectedTag.skills.data.map((skill, index) => (
                <button
                key={index}
                onClick={() => handleButtonClick(skill)}>
                {skill}
              </button>
              ))}
            </div>
          )}

          {selectedTag.skills.type === "ul" && (
            <div>
              {sortListItems(selectedTag.skills.props.children).map((item, index) => (
                <button
                key={index}
                style={{
                  backgroundColor: "#4a90e2",
                  color: "white",
                  fontSize: "1.5rem",
                  padding: "0.5rem 1rem",
                  border: "none",
                  borderRadius: "0.5rem",
                  cursor: "pointer",
                  marginBottom: "0.5rem",
                  marginBottom: "0.5rem",
                    marginRight: "0.5rem",
                }}
              >
                  {item.props.children}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default SkillsSection;
