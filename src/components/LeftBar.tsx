import { useEffect, useState } from "react";
import "./Bars.css";
const LeftBar = () => {
  const [activeSection, setActiveSection] = useState(0);

  const handleScroll = () => {
    const sections = document.querySelectorAll(".sectionLeft");
    sections.forEach((section, index) => {
      // console.log(section);
      console.log(index);

      const rect = section.getBoundingClientRect();

      if (
        rect.top <= window.innerHeight / 2 &&
        rect.bottom >= window.innerHeight / 2
      ) {
        setActiveSection(index);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sidebar left-shift">
      {/* <button className="sidebar-button">REQUEST INFO</button> */}
      <div className="scroll-indicator">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className={`line ${activeSection === index ? "active" : ""}`}
          >
            <span>{`0${index + 1}`}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftBar;
