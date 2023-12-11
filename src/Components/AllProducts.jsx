import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Dashboard.css";
const Dashboard = () => {
  const [product, setProduct] = useState([]);
  const [price, setPrice] = useState([]);
  const [description, , setDescription] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = async () => {
    try {
      //fill the http url with your own
      const response = await axios.get("");
      console.log(response);
      setProduct(response.data.data);
      setPrice(response.data.data);
      setDescription(response.data.data);
    } catch (error) {
      console.log("error fetching events", error);
    }
  };
  const handleHome= async (e) => {
      e.preventDefault();
      navigate("/");
    }
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
    const handleSellers = async (e) => {
      e.preventDefault();
      navigate("/AllSellers")
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
          Add/manage products
        </a>
      </div>

      <table className="customers" id="customers">
        <tr className="tr1">
          <th className="th1">Name</th>
          <th className="th2">Price </th>
          <th className="th3">Description</th>
          <th className="th4">Action</th>
        </tr>
        {/* {products.map((product)=>(
        <tr className="tr2" key={product.ID}>
          <td className="td4">{product.name}</td>
          <td className="td5">{product.price}</td>
          <td className="td6">{product.description}</td>
    <td className="td-fourth"><button>Delete Product</button></td>
        </tr>
        ))}  */}
      </table>
    </>
  );
};

export default Dashboard;
