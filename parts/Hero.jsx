import React, { useEffect, useState } from "react";
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

  const [projects, setProjects] = useState(featuredProjects);
  const [sliding, setSliding] = useState(false);

  const cardWidth = 240;
  const gap = 32;
  const slideWidth = cardWidth + gap;

  const slideNext = () => {
    setSliding(true);
    setTimeout(() => {
      setProjects(prev => [...prev.slice(1), prev[0]]);
      setSliding(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      slideNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [projects]);

  return (
    <section className="hero">
      <h1>Featured Projects</h1>
      <div className="hero-carousel-wrapper">
        <div
          className={`hero-carousel-track ${sliding ? "slide" : ""}`}
          style={{ transform: `translateX(-${slideWidth}px)`, transition: sliding ? "transform 0.5s ease" : "none" }}
        >
          {projects.concat(projects[0]).map((project, i) => (
            <div key={i} className={`hero-card ${i === 1 ? "active" : ""}`}>
              <img src={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
      <div className="hero-details">
        <h2>{projects[1].title}</h2>
        <p>{projects[1].description}</p>
        <div className="hero-tech">{projects[1].tech.join(" • ")}</div>
        <div className="hero-links">
          <a href={projects[1].demo}>Demo</a>
          <a href={projects[1].github}>Github</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
