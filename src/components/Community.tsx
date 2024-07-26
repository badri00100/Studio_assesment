import "./Community.css";
import card1Image from "../assets/images/card1.png";
import card2Image from "../assets/images/card2.png";
import card3Image from "../assets/images/card3.png";
import CommunityTextCard from "./Common/CommunityTextCard";
import CommunityImageCard from "./Common/CommunityImagecards";

const Community = () => {
  let cardData = [
    {
      id: 1,
      Image: card1Image,
      heading: "@love_food",
      Text: "Waffle sticks in Copenhagen! 🇩🇰😍 Milk chocolate with sprinkles, dark chocolate with coconut and milk chocolate with peanuts! [📷: @foodwithmichel] #lovefood",
      like: "789",
      comment: "99.7k",
    },
    {
      id: 2,
      Image: card2Image,
      heading: "@buzzfeedfood",
      Text: "It's taco Tuesday! These tacos from @jesseszewczyk have no added sugars and are SO good 🌮. Find the recipe from the link in our bio! 📸: @taylormillerphoto",
      like: "68",
      comment: "14.7k",
    },
    {
      id: 3,
      Image: card3Image,
      heading: "@buzzfeedfood",
      Text: "Getting into long weekend mode like 🍤 #pancitpalabok (📷 @jeepneynyc)",
      like: "152",
      comment: "18.2k",
    },
  ];
  return (
    <div className="community-container sectionLeft" id="community">
      {/* for side bar */}
      <div className="community-left-content">
        {/* Header with text button and heading */}
        <div className="community-header">
          <div className="community-header-main">
            <h4>
              MEET OUR <span>COMMUNITY</span>
              <button className="know-more-button">KNOW MORE</button>
            </h4>
            <p className="community-para mt-30">
              LOREM IPSUM DOLOR SIT AMET ERNUT TEMPARTERO SERTU PER NABORE EN
              TORNA ENTALTO
            </p>
          </div>
        </div>
        {/* card -> text and image */}
        <div className="flex-center-end mt-70">
          <CommunityTextCard cardData={cardData[0]} />
          <div className="ml-2">
            <CommunityImageCard cardData={cardData[0]} />
          </div>
        </div>
        {/* Text  */}
        <div className="text-center flex-center-center">
          <p className="community-lorem-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
            aute irure.
          </p>
        </div>
      </div>
      <div className="community-right-content">
        {/* card -> text and image */}
        <div className="flex-center-start mt-20">
          <CommunityImageCard cardData={cardData[1]} />
          <div className="ml-2">
            <CommunityTextCard cardData={cardData[1]} />
          </div>
        </div>
        {/* card -> text and image */}
        <div className="flex-center-start mt-300">
          <CommunityTextCard cardData={cardData[2]} />
          <div className="ml-2">
            <CommunityImageCard cardData={cardData[2]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
