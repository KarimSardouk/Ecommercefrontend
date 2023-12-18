import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import cart123 from "../images/cart123.png";
import Header from "./Header";

const CategoryView = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const filteredProducts = products.filter(
    (product) => product.category_id === 3
  );

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/product/getAll/"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching Products:", error);
        setError("Error fetching products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Category View</h1>
      <div>
        {error && <div style={{ color: "red" }}>{error}</div>}

        <div className="box-container">
          {filteredProducts.map((product) => (
            <div key={product._id} className="box-1">
              <img
                className="box-1-image"
                src={product.product_image}
                alt=""
                onClick={() => navigate(`/products/${product._id}`)}
              />
              <h2 className="box-1-name">{product.product_name}</h2>
              <h3 className="box-1-price">
                {product.price % 1 === 0
                  ? `$${product.price}.00`
                  : product.price}
              </h3>
              <div className="boxing123">
                <Link to={`/products/${product._id}`} className="box-1-product">
                  View Product
                </Link>
                <div className="box-1-cart">
                  <img src={cart123} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryView;
