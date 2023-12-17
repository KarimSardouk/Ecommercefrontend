import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import cartimage from "../images/cartimage.png";
import profileimage from "../images/profileimage.png";
import "../styles/Header.css";
import { Helmet } from "react-helmet";
const Header = () => {
  const [categories, setCategories] = useState([]);
  const [image, setImage] = useState([]);
  const [name, setName] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();
  useEffect(() => {
    getAllCategories();
  }, []);
  const handleNavigate = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById("About"); // Use the correct ID

    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("#About");
    }
  };
  const handleContact = (e) => {
    e.preventDefault();
    navigate("/Contact1");
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
  const handleHome = (e) => {
    e.preventDefault();
    navigate("/");
  }
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
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
      {/* <div className="header">
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
          <a href="/contact" className="a" onClick={handleContact}>
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
      </div> */}
      <div className={`topnav ${isOpen ? "responsive" : ""}`} id="myTopnav">
      <img
            src="icons8-dashboard-90.png"
            alt="this is an image"
            className="adm-dash"
            onClick={handleAdminDash}
          />
                      <img
              src="icons8-dashboard-100.png"
              alt="img"
              className="dashboard-img"
              onClick={handleDashboard}
            />
        <a onClick={handleHome} className="active">
          Home
        </a>
        <a className="a" href="#about" >
          About
        </a>
        <a className="a contact"  onClick={handleContact} >
          Contact
        </a>
        <a className="a" href="#Category">
          Category
        </a>
        <a className="a allproducts" onClick={handleAllProducts}>
          All products
        </a>
        <a href="javascript:void(0);" className="icon" onClick={toggleNav}>
          <i className="fa fa-bars"></i>
        </a>
        <a href="" className="a" onClick={handleCart}>
              <img src={cartimage} alt="" />
            </a>
            <a href="" className="a" onClick={handleProfile}>
              <img className="image-profile" src={profileimage} alt="" />
            </a>
      </div>


    </div>
  );
};

export default Header;
