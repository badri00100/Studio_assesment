import { useEffect, useRef, useState } from "react";
import MenuItemCard from "./MenuItemCard";

const MenuCard = ({ cardData,index }: any) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  const animationClass = index % 2 === 0 ? "menu-animate" : "menu-animate-down";
  return (
    <div className="course-card">
      <div
        className={`animate-card ${isVisible ? animationClass : ""}`}
        ref={cardRef}
      >
        <h2 className="cardDtaHeading">{cardData.heading}</h2>
        <div className="menu-items">
          {cardData.items.map((data: any) => {
            return <MenuItemCard data={data} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
