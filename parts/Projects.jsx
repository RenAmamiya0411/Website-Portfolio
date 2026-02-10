import React from "react";
import ProjectCard from "./ProjectCard";
import WareFeedImage from "../assets/Warefeed.jpg";

const projectsDone = [
  {
    title: "WareFeed",
    description: "",
    tech: [""],
    image: WareFeedImage,
    github: "Not Saved",
    demo: "Not Saved"
  }
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projectsDone.map((proj, index) => (
          <ProjectCard key={index} {...proj} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
