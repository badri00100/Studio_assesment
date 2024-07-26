// src/components/Footer.tsx
import React from "react";
import "./Footer.css";
import instaIcon from "../assets/images/icons/instagram-icon.svg";
import facebookIcon from "../assets/images/icons/facebook-icon.svg";
import twitterIcon from "../assets/images/icons/twitter-icon.svg";
import linkedinIcon from "../assets/images/icons/Linkedin-icon.svg";

const Footer: React.FC = () => {
  return (
    <footer className="footer-container sectionLeft">
      {/* for side bar */}
      <div key={5} className="sectionLeft"></div>
      <div className="footer-main">
        <div className="w-60p">
          <div className="footer-left-sections">
            <div className="footer-section">
              <h3>SECTION 1</h3>
              <ul>
                <li>Subsection</li>
                <li>Subsection</li>
                <li>Subsection</li>
                <li>Subsection</li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>SECTION 2</h3>
              <ul>
                <li>Subsection</li>
                <li>Subsection</li>
                <li>Subsection</li>
                <li>Subsection</li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>SECTION 3</h3>
              <ul>
                <li>Subsection</li>
                <li>Subsection</li>
                <li>Subsection</li>
                <li>Subsection</li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>SECTION 4</h3>
              <ul>
                <li>Subsection</li>
                <li>Subsection</li>
                <li>Subsection</li>
                <li>Subsection</li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>SECTION 5</h3>
              <ul>
                <li>Subsection</li>
                <li>Subsection</li>
                <li>Subsection</li>
                <li>Subsection</li>
              </ul>
            </div>
          </div>
          <p className="company-mark">
            2017. Company. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor .
          </p>
        </div>
        <div className="footer-bottom w-40p">
          <div className="footer-logo">
            <h4>
              THIS IS THE <span>LOGO</span>
            </h4>
          </div>
          <div className="social-icons">
            <a href="">
              <img src={facebookIcon} alt="" />
            </a>
            <a href="">
              <img src={twitterIcon} alt="" />
            </a>
            <a href="">
              <img src={instaIcon} alt="" />
            </a>
            <a href="">
              <img src={linkedinIcon} alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
