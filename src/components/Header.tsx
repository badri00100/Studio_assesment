// src/components/Header.tsx
import React from "react";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="app-header">
      <div className="app-header-container">
        <nav className="flex-between-center">
          <div className="logo flex-between-center">
            <h1 className="Logo-heading">LOGO</h1>
            <ul className="ml-2">
              <li>
                <a href="#">ABOUT</a>
              </li>
              <li>
                <a href="#community">COMMUNITY</a>
              </li>
              <li>
                <a href="#location">LOCATION</a>
              </li>
              <li>
                <a href="#menu">OUR MENU</a>
              </li>
            </ul>
          </div>
          <ul>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
            <li>
              <a href="#">LOGIN</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
