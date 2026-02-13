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
      title: "WareFeed",
      description:
        "An Artificial Intelligence-Base Management System for Bless Rice Mill. In Partial Fulfillment of the Requirements for the Degree of Bachelor of Science in Instrumentation and Control Engineering",
      tech: ["Objection Detection (Bounding Boxes), Python, Raspberry Pi 5"],
      image: WareFeedImage,
      github: "Not Saved",
      demo: "Not Saved"
    },
    {
      title: "What To Do",
      description: "A to-do list app made for educational purposes",
      tech: ["HTML, CSS, JavaScript, EJS"],
      image: SoonImage,
      github: "Soon...",
      demo: "Soon..."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(1);
  const highlightedProject = featuredProjects[activeIndex];

  return (
    <section className="hero" id="hero">
      <h1>Featured Projects</h1>
      <div className="hero-carousel-wrapper">
        <div className="hero-carousel-track">
          {featuredProjects.map((project, i) => (
            <div key={i} className={`hero-card ${i === activeIndex ? "active" : ""}`} onClick={() => setActiveIndex(i)}>
              <img src={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
      <div className="hero-details">
        <h2>{highlightedProject.title}</h2>
        <p>{highlightedProject.description}</p>
        <div className="hero-tech">{highlightedProject.tech.join(" • ")}</div>
        <div className="hero-links">
          <a href={highlightedProject.demo}>Demo</a>
          <a href={highlightedProject.github}>Github</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
