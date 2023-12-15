import React, { useState } from "react";
import axios from "axios";
import "../styles/AddProduct.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logoutimg from "../images/cart123.png";
import Header from "./Header";

const AddProduct = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [product, setProduct] = useState({
    category_id: "", //required
    product_name: "", //required
    description: "", //required
    price: "", //required
    stock_quantity: "", //required
    brand: "", //required
    processor: "",
    display: "",
    modelnumber: "",
    ram: "",
    battery: "",
    memory: "",
    camera: "",
    image: null,
  });

  const [optionalFieldsVisible, setOptionalFieldsVisible] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProduct({ ...product, image: file });

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedImage(null);
    }
  };

  const handleOptionalFieldsToggle = () => {
    setOptionalFieldsVisible(!optionalFieldsVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      // Append all form data to formData
      Object.entries(product).forEach(([key, value]) => {
        formData.append(key, value);
      });
      // Your axios request to post the product data to the backend
      const response = await axios.post(
        "http://localhost:8000/product/products",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // Handle the response as needed (e.g., show success message, redirect, etc.)
      console.log(response.data);
    } catch (error) {
      console.error("Error adding product:", error);
      // Handle error response
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user_id");
    navigate("/");
  };
  const navigate = useNavigate();
  const handleHome = async (e) => {
    e.preventDefault();
    navigate("/");
  };
  const handleApprove = async (e) => {
    e.preventDefault();
    navigate("/ApproveProducts");
  };
  const handleStatistics = async (e) => {
    e.preventDefault();
    navigate("/Statistics");
  };
  const handleAllProductsTable = async (e) => {
    e.preventDefault();
    navigate("/AllProductsTable");
  };
  const handleSellers = async (e) => {
    e.preventDefault();
    navigate("/AllSellers");
  };
  const handleAdd = async (e) => {
    e.preventDefault();
    navigate("/AddProduct");
  };

  return (
    <>
      <div className="sidebar">
        <Header />
        <a className="home" onClick={handleHome}>
          Home
        </a>
        <a className="sellers" onClick={handleSellers}>
          View and Add Sellers
        </a>
        <a className="view-products" onClick={handleAllProductsTable}>
          View all products
        </a>
        <a className="stats" onClick={handleStatistics}>
          Statistics
        </a>
        <a className="approval" onClick={handleApprove}>
          Approve products
        </a>
        <a className="add-products" onClick={handleAdd}>
          Add products
        </a>
        <button className="logoutimg" onClick={handleLogout}>
          <img src={logoutimg} alt="" />
        </button>
      </div>
      <div className="add-product-container">
        <h1>Add Product</h1>
        <ToastContainer />
        <form onSubmit={handleSubmit}>
          <label>Product Name:</label>
          <input
            type="text"
            name="product_name"
            value={product.product_name}
            onChange={handleInputChange}
            className="input-field"
            required
          />

          <label>Category ID:</label>
          <input
            type="number"
            name="category_id"
            value={product.category_id}
            onChange={handleInputChange}
            className="input-field"
            required
          />

          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleInputChange}
            className="input-field"
            required
          />

          <label>Stock Quantity:</label>
          <input
            type="text"
            name="stock_quantity"
            value={product.stock_quantity}
            onChange={handleInputChange}
            className="input-field"
            required
          />
          <label>Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="input-field"
          />

          {selectedImage && (
            <img
              src={selectedImage}
              alt="Selected"
              className="selected-image"
            />
          )}

          {/* Other input fields for mandatory data */}

          <button
            type="button"
            className="optional-fields-button"
            onClick={handleOptionalFieldsToggle}
          >
            {optionalFieldsVisible
              ? "Hide Optional Fields"
              : "Show Optional Fields"}
          </button>

          <div
            className={`optional-fields ${
              optionalFieldsVisible ? "active" : ""
            }`}
          >
            {/* processor: "",
    display: "",
    modelnumber: "",
    ram: "",
    battery: "",
    memory: "",
    camera: "", 
        REQUIRED: NAME
        PRICE
        DISPLAY
        BATTERY
        PROCESSOR
        REMAINING STOCK*/}

            {/* Optional input fields */}
            <label>RAM:</label>
            <input
              type="text"
              name="ram"
              value={product.ram}
              onChange={handleInputChange}
              className="input-field"
            />

            <label>Battery:</label>
            <input
              type="text"
              name="battery"
              value={product.battery}
              onChange={handleInputChange}
              className="input-field"
            />

            <label>Memory:</label>
            <input
              type="text"
              name="memory"
              value={product.memory}
              onChange={handleInputChange}
              className="input-field"
            />

            <label>Camera:</label>
            <input
              type="text"
              name="camera"
              value={product.camera}
              onChange={handleInputChange}
              className="input-field"
            />
          </div>

          <button
            onClick={() => {
              toast(`${product.product_name} was added successfully`);
            }}
            type="submit"
            className="submit-button"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
