import React from "react";
import "./ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";

const ContactMe = () => {
  return (
    <section id="contact" className="contact-container">
      <h5>Contact Me</h5>

      <div className="contact-content">
        <div style={{flex: 1}}>
          <ContactInfoCard
            iconUrl="./assets/images/email-icon.svg"
            text="tisha8357@gmail.com"
          />

          <ContactInfoCard
            iconUrl="./assets/images/github-icon.svg"
            text="https://github.com/ishat005"
          />
        </div>

      </div>
    </section>
  );
};

export default ContactMe;
