import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import cartimage from "../Images/cartimage.png";
import profileimage from "../Images/profileimage.png";
import mainimage from "../Images/mmmm-transformed.jpeg";
import "../styles/header.css";
import { Helmet } from "react-helmet";

const Accordion = ({ handleClick }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.removeItem("authToken");
    navigate("/");
  };
  const handleloginmini = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  return (
    <div className="accordion">
      <div className="accordion-section" onClick={() => handleClick("login")}>
        <p onClick={handleloginmini}>Login/Register</p>
      </div>
      <div className="accordion-section" onClick={() => handleClick("logout")}>
        <p onClick={handleLogout}>Logout</p>
      </div>
    </div>
  );
};

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [accordionOpen, setAccordionOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getAllCategories();
  }, []);

  const handleNavigate = (e) => {
    e.preventDefault();
    scrollToSection("about");
  };

  const handleContact = (e) => {
    e.preventDefault();
    navigate("/ContactUsPage");
  };

  const handleCart = (e) => {
    e.preventDefault();
    navigate("/Cart");
  };

  const handleMainImage = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const handleProfile = (e) => {
    e.preventDefault();
    setAccordionOpen(!accordionOpen);
  };

  const handleAllProducts = (e) => {
    e.preventDefault();
    navigate("/AllProducts");
  };

  const handleAccordionClick = (section) => {
    if (section === "login") {
      // Handle login/register action
      console.log("Login/Register clicked");
    } else if (section === "logout") {
      // Handle logout action
      console.log("Logout clicked");
    }
    setAccordionOpen(false);
  };

  const getAllCategories = async () => {
    try {
      const response = await axios.get("http://localhost:8000/categories/");
      setCategories(response.data);
    } catch (error) {
      console.log("error fetching categories", error);
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;500;700&family=Montserrat:wght@300;400;700&family=Open+Sans:wght@300;400;700&family=Teko:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div className="header">
        <ul className="header-ul">
          <img
            className="mainimage"
            src={mainimage}
            onClick={handleMainImage}
            alt=""
          />
          <a href="/" className="a" id="homea">
            <li>Home</li>
          </a>
          <a href="#" className="a" onClick={(e) => handleNavigate(e)}>
            <li>About</li>
          </a>
          <a
            href="/contact"
            className="a"
            id="contacta"
            onClick={handleContact}
          >
            <li>Contact</li>
          </a>
          <a href="/category" className="a" id="categorya">
            <li>Category</li>
          </a>
          <a href="/AllProducts" className="a" onClick={handleAllProducts}>
            <li>AllProducts</li>
          </a>
          <div className="images12">
            <a href="" className="a" onClick={handleCart}>
              <img src={cartimage} alt="" />
            </a>
            <a href="" className="a" onClick={handleProfile}>
              <img className="image-profile" src={profileimage} alt="" />
              {accordionOpen && (
                <Accordion handleClick={handleAccordionClick} />
              )}
            </a>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
