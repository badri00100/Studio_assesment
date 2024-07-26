import "./Menu.css";
import MenuData from "../Utils/menuCardData";
import MenuCard from "./Common/MenuCard";
import "./Common/MenuCards.css";

const Menu = () => {
  return (
    <div className="Menu sectionLeft" id="menu">
      {/* heading */}
      <div className="menu-div">
        <div className="absolute">
          <h2 className="menu-heading relative">OUR MENU</h2>
          <button className="know-more-button">KNOW MORE</button>
        </div>
      </div>
      {/* content */}
      <div className="all-courses">
        {MenuData.map((items, i) => {
          return <MenuCard cardData={items} index={i} />;
        })}
      </div>
    </div>
  );
};

export default Menu;
