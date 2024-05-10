"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "UNA Mobile Dining App Proposal",
    description: "Provided redesign for enhanced usability mobile dining app using HTML, CSS, JavaScript, and React.js",
    image: "/images/projects/1.png",
    tag: ["All", "javaScript"],
    gitUrl: "https://github.com/ConnorLBrown/June-Juliette",
    previewUrl: "https://github.com/ConnorLBrown/June-Juliette",
  },
  {
    id: 2,
    title: "UNA Faculty Full Stack Devlopment Project",
    description: "Agile Full Stack Development Project for UNA Faculty game using MongoDB, HTML, CSS, JavaScript, and Express.js",
    image: "https://github.com/errorless-stone/name-game-thing",
    tag: ["All", "JavaScript"],
    gitUrl: "https://github.com/errorless-stone/name-game-thing",
    previewUrl: "https://alabamanewscenter.com/wp-content/uploads/2017/08/UNA-LOGO.jpg",
  },
  {
    id: 3,
    title: "Java Customer Project",
    description: "This project is practicing the implementation of a program that using Java methods and classes for a customer.",
    image: "/images/projects/3.png",
    tag: ["All", "Java"],
    gitUrl: "https://github.com/ConnorLBrown/Java-Customer-Project",
    previewUrl: "https://github.com/ConnorLBrown/Java-Customer-Project",
  },
  {
    id: 4,
    title: "System Analysis & Design Proposal",
    description: "Analysis & Design for new advising system at North Alabama",
    image: "/images/projects/4.png",
    tag: ["All", "Reviews"],
    gitUrl: "https://www.linkedin.com/in/connor-brown-32591a269/details/projects/",
    previewUrl: "https://www.linkedin.com/in/connor-brown-32591a269/details/projects/",
  },
  {
    id: 5,
    title: "Basketball Team CRUD Application",
    description: "CRUD application for Basketball team using PHP, MySQL, and HTML",
    image: "/images/projects/5.png",
    tag: ["All", "PHP"],
    gitUrl: "https://github.com/ConnorLBrown/Basketball-CRUD",
    previewUrl: "https://github.com/ConnorLBrown/Basketball-CRUD",
  },
  {
    id: 6,
    title: "AWS Lambda Project",
    description: "Presentation for Software Architecture course / Python Function I used during the demo",
    image: "/images/projects/6.png",
    tag: ["All", "Python"],
    gitUrl: "https://github.com/ConnorLBrown/AWSLambda-Presentation",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="mx-auto text-center">
  <h2 className="capitalize relative text-transparent font-sans mb-4 text-5xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold bg-clip-text" style={{ WebkitTextFillColor: "transparent" }}>Projects</h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="JavaScript"
          isSelected={tag === "JavaScript"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Java"
          isSelected={tag === "Java"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Python"
          isSelected={tag === "Python"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="PHP"
          isSelected={tag === "PHP"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Reviews"
          isSelected={tag === "Reviews"}
        />
      </div>
      
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
