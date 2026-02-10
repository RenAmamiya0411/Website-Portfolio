import React from "react";
import "./Projects.css";

function ProjectCard({ title, description, tech, image, github, demo }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-info">
        <h3>{title}</h3>
        <p className="project-desc">{description}</p>
        <p className="tech-used">{tech.join(".")}</p>
        <div className="project-links">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              Github
            </a>
          )}
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
