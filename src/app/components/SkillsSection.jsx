"use client";
import React, { useState, useRef } from "react";
import SkillsTag from "./SkillsTag";
import { useInView } from "framer-motion";

const skillsData= [
  {
    title: "Languages",
    id: "languages",
    skills: (
      <ul className="list-disc pl-5">
        <li>C#,</li>
        <li>Java,</li>
        <li>JavaScript,</li>
        <li>TypeScript</li>
        <li>SQL,</li>
        <li>PHP,</li>
      </ul>
    ),
  },
  {
    title: "Software / Web",
    id: "software",
    skills: (
      <ul className="list-disc pl-5">
        <li>AWS Lambda,</li>
        <li>AWS S3,</li>
        <li>AWS Amplify,</li>
        <li>AJAX,</li>
        <li>ASP.NET,</li>
        <li>HTML,</li>
        <li>CSS,</li>
        <li>TailwindCSS</li>
        <li>Node.js,</li>
        <li>Next.js,</li>
        <li>React.js,</li>
        <li>Express.js,</li>
      </ul>
    ),
  },
  {
    title: "Database",
    id: "database",
    skills: (
      <ul className="list-disc pl-5">
        <li>MySQL</li>
        <li>MongoDB,</li>
        <li>DynamoDB,</li>
        <li>MariaDB,</li>
        <li>Access,</li>
        <li>Excel,</li>
      </ul>
    ),
  },
];

const SkillsSection = () => {
  const [tag, setTag] = useState("Languages");
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
    <section id="projects" className="rounded-lg grid place-items-center">
  <h2 className="capitalize relative text-transparent font-sans mb-4 text-5xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold bg-clip-text" style={{ WebkitTextFillColor: "transparent" }}>SKILLS</h2>
  <div className="text- flex flex-row justify-center items-center gap-2 py-6">

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
        <div className="w-100% bg-white rounded-lg p-4 mt-3 text-black ">
          {selectedTag.skills.type === "buttons" && (
            <div className="w-65%">
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
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  color: "black",
                  fontSize: "1.5rem",
                  padding: "0.5rem 1rem",
                  border: "none",
                  borderRadius: "0.5rem",
                  cursor: "pointer",
                  marginBottom: "0.5rem",
                  marginBottom: "0.5rem",
                    marginRight: "0.5rem",
                    font:"sans-serif",
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
