import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import cartimage from "../images/cartimage.png";
import profileimage from "../images/profileimage.png";
import "../App.css";
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
    navigate("/About");
  };
  const handleCart = (e) => {
    e.preventDefault();
    navigate("/Cart");
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
  const handleDashboard = (e) => {
    e.preventDefault();
    navigate("/Dashboard");
  };
  const handleAdminDash = (e) => {
    e.preventDefault();
    navigate("/AdminDash");
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
            src="icons8-dashboard-90.png"
            alt="this is an image"
            className="adm-dash"
            onClick={handleAdminDash}
          />
          <a href="/" className="a">
            <li>Home</li>
          </a>
          <a href="#" className="a" onClick={handleNavigate}>
            <li>About</li>
          </a>
          <a href="/contact" className="a">
            <li>Contact</li>
          </a>
          <a href="/category" className="a">
            <li>Category</li>
          </a>
          <a href="/AllProducts" className="a">
            <li>AllProducts</li>
          </a>
          <div className="images12">
            <a href="" className="a" onClick={handleCart}>
              <img src={cartimage} alt="" />
            </a>
            <a href="" className="a" onClick={handleProfile}>
              {" "}
              <img className="image-profile" src={profileimage} alt="" />
            </a>

            <img
              src="icons8-dashboard-100.png"
              alt="img"
              className="dashboard-img"
              onClick={handleDashboard}
            />
          </div>
        </ul>
      </div>
      <div className="box-container">
        {categories &&
          categories.map((category, index) => (
            <div className="box-1" key={index}>
              <img
                src={category.category_image}
                alt={"image"}
                className="box-1-image"
              />
              <h2 className="box-1-name" onClick={handleAllProducts}>
                {category.categoryName}
              </h2>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Header;
