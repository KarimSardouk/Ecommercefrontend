import React, { useState, useEffect, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/AllProducts.css";
import cartimage from "../images/cartimage.png";
import profileimage from "../images/profileimage.png";
import dellimage from "../images/dell-inspiron.png";
import cart123 from "../images/cart123.png";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const [counter, setCounter] = useState(0);
  const [error, setError] = useState(null);

  const filteredProducts = useMemo(() => {
    console.log("Filtering using Memo...");
    return products.filter((product) =>
      product.product_name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [products, filter]);

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
      <h1>All Products</h1>
      <div>
        <input
          id="myInput"
          placeholder="Filter names"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />

        {error && <div style={{ color: "red" }}>{error}</div>}

        <div className="box-container">
          {filteredProducts.map((product) => (
            <div key={product._id} className="box-1">
              <img
                className="box-1-image"
                src={product.product_image}
                alt=""
                style={{
                  width:
                    product.category_id === 3
                      ? "300px"
                      : product.category_id === 4
                      ? "200px"
                      : product.category_id === 5
                      ? "250px"
                      : product.category_id === 6
                      ? "300px"
                      : product.category_id === 7
                      ? "240px"
                      : product.category_id === 8
                      ? "240px"
                      : "auto",
                  marginLeft:
                    product.category_id === 4
                      ? "100px"
                      : product.category_id === 3
                      ? "50px"
                      : product.category_id === 5
                      ? "75px"
                      : product.category_id === 6
                      ? "40px"
                      : product.category_id === 7
                      ? "80px"
                      : product.category_id === 8
                      ? "80px"
                      : "auto",
                }}
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

export default AllProducts;
