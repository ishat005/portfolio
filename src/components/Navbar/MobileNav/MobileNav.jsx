import React from "react";
import "./MobileNav.css";
import resume from "../../../utils/Isha-Thakur-Resume.pdf";

const MobileNav = ({ isOpen, toggleMenu }) => {
  
  const handleScroll = (sectionId) => {
    if(isOpen) toggleMenu();
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <img className="logo" src="./assets/images/logo.svg" alt="" />

          <ul>
            <li>
              <a onClick={() => handleScroll("hero")} className="menu-item">
                Home
              </a>
            </li>

            <li>
              <a onClick={() => handleScroll("skills")} className="menu-item">
                Skills
              </a>
            </li>

            <li>
              <a onClick={() => handleScroll("work-exp")} className="menu-item">
                Work Experience
              </a>
            </li>

            <li>
              <a onClick={() => handleScroll("portfolio")} className="menu-item">
                Portfolio
              </a>
            </li>

            <li>
              <a onClick={() => handleScroll("contact")} className="menu-item">
                Contact Me
              </a>
            </li>

            <button className="contact-btn" onClick={() => {}}>
                <a href={resume} target="_blank"
                  rel="noreferrer">
                    Resume
                </a>
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
