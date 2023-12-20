import React, { useState, useEffect, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import "../styles/allproducts.css";
import cartimage from "../Images/cartimage.png";
import profileimage from "../Images/profileimage.png";
import dellimage from "../Images/dell-inspiron.png";
import cart123 from "../Images/cart123.png";
import Header from "./header";
import Footer from './Footer';
const AllProducts = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const [counter, setCounter] = useState(0); // Add the counter state
  const [error, setError] = useState(null);

  const { productId } = useParams();
  const location = useLocation();
  const userId = location.state?.userId;

  const filteredProducts = useMemo(() => {
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
        setCounter(response.data.length); // Update the counter state
      } catch (error) {
        console.error("Error fetching Products:", error);
        setError("Error fetching products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  const addToCart = async (product) => {
    try {
      // Assuming you want to add 1 item each time
      const response = await axios.post("http://localhost:8000/carts/add", {
        user_id: userId,
        products_id: product._id,
        product_image: product.product_image,
        quantity_to_purchase: 1,
        price: product.price,
        product_name: product.product_name,
      });
      console.log("Product added to cart:", response.data);
      window.alert("Product added successfully");
    } catch (error) {
      console.log("Error adding product to cart:", error);
      window.alert("Product not added successfully");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>All Products</h1>
      <div className="biggest-box">
        <p>Total Products: {counter}</p>
        <input
          id="myInput1"
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
                <div className="box-1-cart" onClick={addToCart}>
                  <img src={cart123} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default AllProducts;
