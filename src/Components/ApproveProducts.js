import React from 'react'
import "../styles/ApproveProducts.css";
import "../styles/Dashboard.css"
import { useNavigate } from "react-router-dom";
import dellimage from "../images/dell-inspiron.png"; 
const ApproveProducts = () => {

  const navigate = useNavigate();
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
        <a className="sellers" onClick={handleSellers}>
          View and Add Sellers
        </a>
        <a className="view-products" onClick={AllProducts}>
          View all products
        </a>
        <a className="stats" onClick={handleStatistics}>
          Statistics
        </a>
        <a className="approval" onClick={handleApprove}>
          Approve products
        </a>
      </div>
    <div className='body1'>
        <div className='border'>
        <div className='informations'>
            <div className='product-image'>
                <img className='product' src={dellimage} alt="this is a product!"/>
            </div>
            <div className='name-price'>
                <p className='name'>Name</p>
                <p className='price'>Price</p>
            </div>
        </div>
        <p className='description'>Description</p>
        <div className='buttons'>
        <button className='button-first'>Approve</button>
        <button className='button-second'>Remove</button>
        </div>
        </div>
    </div>
    </>
  )
}

export default ApproveProducts
