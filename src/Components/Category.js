import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Helmet from "react-helmet";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllCategories();
  }, []);

  const getAllCategories = async () => {
    try {
      const response = await axios.get("http://localhost:8000/categories/");
      setCategories(response.data);
    } catch (error) {
      console.log("error fetching categories", error);
    }
  };

  const handleCategoryClick = (categoryName) => {
    navigate(`/product/product/categoryName/${categoryName}`);
  };

  return (
    <>
      <Helmet>{/* Your helmet configuration */}</Helmet>
      <div>
        <h1 className="Categorie">Categories</h1>
        <div className="box-container">
          {categories.map((category, index) => (
            <div className="box-1" key={index}>
              <img
                src={category.category_image}
                alt={"image"}
                className="box-1-image"
                onClick={() => handleCategoryClick(category.categoryName)}
              />
              <h2
                className="box-1-name"
                onClick={() => handleCategoryClick(category.categoryName)}
              >
                {category.categoryName}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
