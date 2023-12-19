import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import cartimage from     "../images/cart123.png";
import profileimage from  "../images/profileimage.png";
import AdminDash from "../images/icons8-dashboard-90.png";
import SellerDash from "../images/icons8-dashboard-100.png"
import "../App.css";
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
  const   handleNavigate = (e) => {
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
  }
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
  const handleDashboard= (e) => {
    e.preventDefault();
    navigate("/Dashboard");
  };
  const handleAdminDash = (e) => {
    e.preventDefault();
    navigate("/AdminDash");
  }
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
        <img src={AdminDash} alt='this is an image' className="adm-dash" onClick={handleAdminDash}/>
          <a href="/" className="a">
            <li>Home</li>
          </a>
          <a href="/category" className="a">
            <li>Categories</li>
          </a>
          <a href="/AllProducts" className="a">
            <li>All Products</li>
          </a>
          <a href="#" className="a" onClick={handleNavigate}>
          <li>About</li>
          </a>
          <a href="/contact" className="a">
            <li>Contact</li>
          </a>
          
          <div className="images12">
            <a href="" className="a" onClick={handleCart}>
              <img src={cartimage} alt="" />
            </a>
            <a href="" className="a" onClick={handleProfile}>
              <img className="image-profile" src={profileimage} alt="" />
            </a>
            
            <img src={SellerDash} alt='img' className="dashboard-img" onClick={handleDashboard}/>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;