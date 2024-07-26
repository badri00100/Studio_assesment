// src/components/Section.tsx
import "./Section.css";
import stamp from "../assets/images/icons/stamp.svg";

const Section = () => {
  return (
    <main className="app-main flex-center-center sectionLeft" id="COMMUNITY">
      <div className="section-content">
        <img src={stamp} alt="" className="stamp" />
        <p className="section-text">
          <div className="startingText">THE BEST FOODIE</div> EXPERIENCE
        </p>
        <p className="section-content-para">NOW IN LONDON</p>
      </div>
    </main>
  );
};

export default Section;
