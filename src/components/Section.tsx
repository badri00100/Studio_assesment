// src/components/Section.tsx
import "./Section.css";
import stamp from "../assets/images/icons/stamp.svg";

const Section = () => {
  return (
    <main className="app-main flex-center-center sectionLeft" id="COMMUNITY">
      <div className="section-content">
        <img src={stamp} alt="" className="stamp" />
        <h2 className="section-text">
          <div className="startingText">THE BEST FOODIE</div> EXPERIENCE
        </h2>
        <p className="section-content-para">NOW IN LONDON</p>
      </div>
    </main>
  );
};

export default Section;
