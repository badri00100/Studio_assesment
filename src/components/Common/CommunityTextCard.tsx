import "./CommunityCard.css";
import likes from "../../assets/images/icons/like.svg";
import comment from "../../assets/images/icons/comment.svg";
import { useEffect, useRef, useState } from "react";

interface CardData {
  id: number;
  Image: string;
  heading: string;
  Text: string;
  like: string;
  comment: string;
}

const CommunityTextCard = ({ cardData }: any) => {
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
  return (
    <div ref={cardRef} className={`textcard ${isVisible ? "animate" : ""}`}>
      <div>
        <p className="text-heading">{cardData.heading}</p>
        <p className="text-para mt-20">{cardData.Text}</p>
      </div>
      <div className="flex-center-end">
        <img src={likes} alt="" />
        <p className="popularity-count">{cardData.like}</p>
        <img src={comment} alt="" />
        <p className="popularity-count">{cardData.comment}</p>
      </div>
    </div>
  );
};

export default CommunityTextCard;
