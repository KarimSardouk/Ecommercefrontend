import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import cartimage from "../Images/cartimage.png";
import profileimage from "../Images/profileimage.png";
import mainimage from "../Images/mmmm-transformed.jpeg";
import "../styles/header.css";
import { Helmet } from "react-helmet";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [image, setImage] = useState([]);
  const [name, setName] = useState([]);

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
    navigate("/Profile");
  };

  const handleAllProducts = (e) => {
    e.preventDefault();
    navigate("/AllProducts");
  };

  const getAllCategories = async () => {
    try {
      const response = await axios.get("http://localhost:8000/categories/");
      console.log(response);
      setCategories(response.data);
      setImage(response.data);
      setName(response.data);
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
            </a>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
