import React from "react";
import image2 from "../Images/mmmm-transformed.jpeg";
import image3 from "../Images/laptop.png";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleAllCategoriesClick = () => {
    navigate("/AllProducts");
  };
  return (
    <div>
      <div className="hero-section">
        <div className="logodiv">
          <img src={image2} alt="logo" className="logoimg" />
          <div className="yellowtext">Plug Into Possibilities</div>
          <div className="section3">
            <button className="shopnow" onClick={handleAllCategoriesClick}>
              SHOP NOW{" "}
            </button>
          </div>
        </div>

        <div className="hero2">
          <img src={image3} alt="laptop" className="hdiv2" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
