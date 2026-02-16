import React from "react";
import { ReactComponent as GmailIcon } from "../assets/logos/gmail.svg";
import { ReactComponent as GithubIcon } from "../assets/logos/github.svg";
import { ReactComponent as LinkedInIcon } from "../assets/logos/linkedin.svg";
import { ReactComponent as PhoneIcon } from "../assets/logos/phone.svg";
import "../App.css";

function Contacts() {
  return (
    <section id="contacts" className="contacts">
      <h2>Let's Connect</h2>
      <p className="contacts-subtext">Feel free to reach out for collaborations, or just to say hi.</p>
      <div className="contact-details">
        <a href="mailto:falconsteven25@gmail.com" className="contact-card">
          <GmailIcon className="contact-icons" />
          <span>falconsteven25@gmail.com</span>
        </a>
        <a href="https://www.linkedin.com/in/steven-ray-harvey-falcon-62479b35b/" className="contact-card">
          <LinkedInIcon className="contact-icons" />
          <span>LinkedIn</span>
        </a>
        <a href="https://github.com/RenAmamiya0411" className="contact-card">
          <GithubIcon className="contact-icons" />
          <span>GitHub</span>
        </a>
        <div className="contact-card">
          <PhoneIcon className="contact-icons" />
          <span>+639295410786</span>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
