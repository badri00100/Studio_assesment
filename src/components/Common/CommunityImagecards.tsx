import { useEffect, useRef, useState } from "react";
import instaButton from "../../assets/images/icons/instagram-btn.svg";
import "./CommunityCard.css";

const CommunityImageCard = ({ cardData }: any) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Stop observing after the card has been animated
          }
        });
      },
      { threshold: 0.1 } // Adjust the threshold as needed
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
  return (
    <div ref={cardRef} className={`card ${isVisible ? "animate" : ""}`}>
      <div>
        <img src={instaButton} alt="not found" className="imgBtn" />
      </div>
      <div>
        <img
          src={cardData.Image}
          width={"230px"}
          height={"230px"}
          alt="not found"
        />
      </div>
    </div>
  );
};

export default CommunityImageCard;
