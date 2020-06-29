import React from "react";
import "./About.css";
import Heading from "../../Components/Heading/Heading";
import AboutMain from "../../Components/AboutMain/AboutMain";
import OurTeam from "../../Components/OurTeam/OurTeam";
import Paragraph from "../../Components/Paragraph/Paragraph";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
const About = () => {
  return (
    <div className="">
        <div className="about-container">
      <div className="about-header-pic">
        <Heading
          style={{ background: "white", height: "7rem" }}
          fontSize="30"
          className="flex-center"
        >
          ABOUT US
        </Heading>
      </div>
      <div className="about-main">
        <AboutMain />
      </div>
      <div className="a-team">
        <OurTeam />
      </div>
      <div className="a-shop">
        <div className="shop-pic1"></div>
        <div className="shop-text">
          <Heading fontSize="25" style={{paddingBottom:"5px",borderBottom:"1px solid black",alignSelf:"flex-start"}}>VISIT OUR SHOP</Heading>
          <Paragraph>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
            optio ratione inventore. Obcaecati ipsum unde vitae voluptatum?
            Maxime, nesciunt aperiam aspernatur suscipit accusamus maiores
            atque, laboriosam tenetur ipsa neque cupiditate.
          </Paragraph>
        </div>
        <div className="shop-pic2"></div>
        <div className="shop-pic3"></div>
      </div>
    </div>
    <NewsLetter/>
    </div>
  );
};

export default About;
