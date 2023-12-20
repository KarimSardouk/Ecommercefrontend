import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../Images/right-arrow.png";
import "../styles/CategoriesHome.css";

const CategoriesHome = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("https://computop.onrender.com/categories/");
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching Categories:", error);
        setError("Error fetching Categories. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (categoryName) => {
    navigate(`/product/product/categoryName/${categoryName}`);
  };

  var settings = {
    dots: true,
    customPaging: (i) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          background: "rgb(32, 125, 233)",
          borderRadius: "50%",
        }}
      />
    ),
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="big-slider">
      <section className="section-white">
        <div className="yellow-background"></div>

        <div className="carousel">
          <Slider {...settings}>
            {categories.map((category, index) => (
              <div
                key={category._id}
                className="home-category"
                onClick={() => handleCategoryClick(category.categoryName)}
              >
                <div className="border">
                  <img
                    src={category.category_image}
                    className="catg-img"
                    alt="pic"
                  />
                  <div className="desc">
                    <div className="ctn">
                      <h3 className="h3">{category.categoryName}</h3>
                    </div>
                    <div className="arr">
                      <img src={image1} className="arrow" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default CategoriesHome;
