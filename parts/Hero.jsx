import React, { useState } from "react";
import WareFeedImage from "../assets/Warefeed.jpg";
import SoonImage from "../assets/Soon.jpg";

function Hero() {
  const featuredProjects = [
    {
      title: "Soon...",
      description: "Soon...",
      tech: ["Soon..."],
      image: SoonImage,
      github: "Soon...",
      demo: "Soon..."
    },
    {
      title: "What To Do",
      description: "A to-do list app made for educational purposes",
      tech: ["HTML, CSS, JavaScript, EJS"],
      image: SoonImage,
      github: "Soon...",
      demo: "Soon..."
    },
    {
      title: "WareFeed",
      description:
        "An Artificial Intelligence-Base Management System for Bless Rice Mill. In Partial Fulfillment of the Requirements for the Degree of Bachelor of Science in Instrumentation and Control Engineering",
      tech: ["Objection Detection (Bounding Boxes), Python, Raspberry Pi 5"],
      image: WareFeedImage,
      github: "Not Saved",
      demo: "Not Saved"
    }
  ];

  const [activeProject, setActiveProject] = useState(1);

  return (
    <section className="hero">
      <h1>Featured Projects</h1>
      <div className="hero-carousel">
        {featuredProjects.map((featuredProject, index) => (
          <div
            key={index}
            className={`hero-card ${index === activeProject ? "active" : ""}`}
            onClick={() => setActiveProject(index)}
          >
            <img src={featuredProject.image} alt={featuredProject.title} />
          </div>
        ))}
      </div>
      <div className="hero-details">
        <h2>{featuredProjects[activeProject].title}</h2>
        <p>{featuredProjects[activeProject].description}</p>
        <div className="hero-tech">{featuredProjects[activeProject].tech.join(" • ")}</div>
        <div className="hero-links">
          <a href={featuredProjects[activeProject].demo}>Demo</a>
          <a href={featuredProjects[activeProject].github}>Github</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
