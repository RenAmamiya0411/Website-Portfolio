import React, { useEffect, useState } from "react";
import Portrait from "../assets/Portrait.png";
import GradPic from "../assets/Grad-pic.png";
import { ReactComponent as DownloadButton } from "../assets/logos/downloadbutton.svg";

function About() {
  const images = [GradPic, Portrait];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="about-part">
      <div className="about-container">
        <div className="carousel">
          {images.map((img, index) => (
            <img
              key="index"
              src={img}
              alt="Profile"
              className={`carousel-image ${index === currentIndex ? "active" : ""}`}
            />
          ))}
        </div>
        <div className="about-details">
          <h2>Who am I?</h2>
          <p>
            Hi! I'm Steven Ray Harvey C. Falcon, an aspiring full-stack developer. I am an Instrumentation and Control
            Engineering graduate with a growing interest in web development, focusing on front-end development such as
            HTML, CSS, and JavaScript, and basic knowledge to back-end development such as Node.js. Engineering
            background helped grow my logical thinking, and problem-solving. Actively improving programming skills
            through hands-on practice and self-learning. I am eager to learn and contribute towards a development team.
          </p>
          <a href="/CV.pdf" className="cv-button" download>
            <DownloadButton className="cv-icon" />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
