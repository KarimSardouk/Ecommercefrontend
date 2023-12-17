import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Dashboard.css";
import logoutimg from "../images/shutdown.png";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState([]);
  const [description, , setDescription] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = async () => {
    try {
      //fill the http url with your own
      const response = await axios.get("http://localhost:8000/products/getAll");
      console.log(response);
      setProducts(response.data);
      setPrice(response.data);
      setDescription(response.data);
    } catch (error) {
      console.log("Error fetching products", error);
    }
  };
  const handleHome= async (e) => {
    e.preventDefault();
    navigate("/");
  }
  const handleLogout = () => {
    localStorage.removeItem("user_id");
    navigate("/");
  };
  const handleApprove = async (e) => {
    e.preventDefault();
    navigate("/ApproveProducts");
  }
  const handleStatistics = async (e) => {
    e.preventDefault();
    navigate("/Statistics")
  }
  const AllProducts = async (e) => {
    e.preventDefault();
    navigate("/AllProducts")
  }
  return (
    <>
      <div className="sidebar">
        <a className="home" onClick={handleHome}>
          Home
        </a>
        <a className="view-products" onClick={AllProducts}>
          View all products
        </a>
        <a className="stats" onClick={handleStatistics}>
          Statistics
        </a>
        <a className="approval" onClick={handleApprove}>
          Add/Manage products
        </a>
        <div className="button-logout-1">
          <button className="logoutimg" onClick={handleLogout}>
            <img src={logoutimg} alt="" />
          </button>
        </div>
      </div>
{/* Add product , view all quantity of the product remaining , the process goes through the admin whether or not the product would be added */}
      <table className="customers" id="customers">
        <tr className="tr1">
          <th className="th1">Name</th>
          <th className="th1">Product image</th>
          <th className="th2">Price </th>
          <th className="th3">Description</th>
            <th className="th3">Stock Quantity</th>
          <th className="th4">Action</th>
        </tr>
         {products && products.map((product)=>(
        <tr className="tr2" key={product._id}>
          <td className="td4">{product.product_name}</td>
          <td className="td4">{product.product_image}</td>
          <td className="td5">{product.price}</td>
          <td className="td6">{product.description}</td>
          <td className="td6">{product.stock_quantity}</td>
    <td className="td-fourth"><button>Delete Product</button></td>
        </tr>
        ))}  
      </table>
    </>
  );
};

export default Dashboard;
