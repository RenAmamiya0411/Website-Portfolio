import React from "react";
import GmailIcon from "../assets/logos/gmail.svg";
import GithubIcon from "../assets/logos/github.svg";
import LinkedInIcon from "../assets/logos/linkedin.svg";
import PhoneIcon from "../assets/logos/phone.svg";
import "../App.css";

function Contacts() {
  return (
    <section id="contacts">
      <div className="contacts">
        <h2>Contact Me In:</h2>
        <div className="contact-details">
          <p>
            <img src={GmailIcon} alt="Gmail" className="contact-icons" />
            Gmail:
          </p>
          <p>
            <img src={LinkedInIcon} alt="LinkedIn" className="contact-icons" />
            LinkedIn:
          </p>
          <p>
            <img src={GithubIcon} alt="Github" className="contact-icons" />
            Github:
          </p>
          <p>
            <img src={PhoneIcon} alt="Phone" className="contact-icons" />
            Phone Number:
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
