import React from "react";
import ProjectCard from "./ProjectCard";
import WareFeedImage from "../assets/Warefeed.jpg";
import SoonImage from "../assets/Soon.jpg";
import "./Projects.css";

const projectsDone = [
  {
    title: "Soon...",
    description: "Soon...",
    tech: ["Soon..."],
    image: SoonImage,
    date: "2026",
    github: "Soon...",
    demo: "Soon..."
  },
  {
    title: "What To Do",
    description: "A to-do list app made for educational purposes",
    tech: ["HTML, CSS, JavaScript, EJS"],
    image: SoonImage,
    date: "2026",

    github: "Soon...",
    demo: "Soon..."
  },
  {
    title: "WareFeed",
    description:
      "An Artificial Intelligence-Base Management System for Bless Rice Mill. In Partial Fulfillment of the Requirements for the Degree of Bachelor of Science in Instrumentation and Control Engineering",
    tech: ["Objection Detection (Bounding Boxes), Python, Raspberry Pi 5"],
    image: WareFeedImage,
    date: "2025-2026",
    github: "https://github.com/RenAmamiya0411/WareFeed",
    demo: "https://www.youtube.com/watch?v=pA8ZL1sHOxg"
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
