import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../App.css";
import Helmet from "react-helmet";

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
  return (
    <>
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
    <div>
      <h1 className="Categorie">Categories</h1>
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
    </>
  )
}

export default Category
