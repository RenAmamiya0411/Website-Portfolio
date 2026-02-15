import React from "react";
import { ReactComponent as GmailIcon } from "../assets/logos/gmail.svg";
import { ReactComponent as GithubIcon } from "../assets/logos/github.svg";
import { ReactComponent as LinkedInIcon } from "../assets/logos/linkedin.svg";
import { ReactComponent as PhoneIcon } from "../assets/logos/phone.svg";
import "../App.css";

function Contacts() {
  return (
    <section id="contacts">
      <div className="contacts">
        <h2>Contact Me In:</h2>
        <div className="contact-details">
          <p>
            <GmailIcon className="contact-icons" />
            Gmail:
          </p>
          <p>
            <LinkedInIcon className="contact-icons" />
            LinkedIn:
          </p>
          <p>
            <GithubIcon className="contact-icons" />
            Github:
          </p>
          <p>
            <PhoneIcon className="contact-icons" />
            Phone Number:
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
