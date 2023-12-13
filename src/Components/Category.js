import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import cartimage from "../images/cartimage.png";
// import profileimage from "../images/profileimage.png";
import "../App.css";
const Category = () => {
  const [categories, setCategories] = useState([]);
  const [image, setImage] = useState([]);
  const [name, setName] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getAllCategories();
  }, []);
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
  const handleAllProducts = (e) => {
    e.preventDefault();
    navigate("/AllProducts");
  };
  const handleHome = (e) => {
    e.preventDefault();
    navigate("/");
  }
  return (
    <div>
      <h1 className="categories">
      <img src="icons8-home-150.png" alt="home" className="home-icon" onClick={handleHome} />
        
        Categories</h1>
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
  )
}

export default Category
