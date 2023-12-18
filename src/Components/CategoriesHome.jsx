import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../images/right-arrow.png";

const CategoriesHome = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/product/getAll/"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching Products:", error);
        setError("Error fetching Products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Display first 4, skip 4, and then display the next 4
  const displayedProducts = [...products.slice(0, 4), ...products.slice(8, 12)];

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
    <div>
      <section className="section-white">
        <div className="yellow-background"></div>

        <div className="carousel">
          <Slider {...settings}>
            {displayedProducts.map((product) => (
              <div
                key={product._id}
                className="home-category"
                onClick={() => navigate(`/products/${product._id}`)} // Add the click event
              >
                <div className="border">
                  <img
                    src={product.product_image}
                    className="catg-img"
                    alt="pic"
                  />
                  <div className="desc">
                    <div className="ctn">
                      <h3 className="h3">{product.product_name}</h3>
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
