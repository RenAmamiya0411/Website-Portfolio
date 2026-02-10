import React from "react";
// import Portrait from "../assets/Portrait.png";
import GradPic from "../assets/Grad-pic.png";

function About() {
  return (
    <section id="about" className="about-part">
      <div className="about-container">
        <img src={GradPic} alt="Graduation Picture" className="graduation-picture" />
        <div className="about-details">
          <h2>Who am I?</h2>
          <p>
            Hi! I'm Steven Ray Harvey C. Falcon, an aspiring full-stack developer. I am an Instrumentation and Control
            Engineering graduate with a growing interest in web development, focusing on front-end development such as
            HTML, CSS, and JavaScript, and basic knowledge to back-end development such as Node.js. Engineering
            background helped grow my logical thinking, and problem-solving. Actively improving programming skills
            through hands-on practice and self-learning. I am eager to learn and contribute towards a development team.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
