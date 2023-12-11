import React from "react";
import "../styles/Statistics.css";
import "../styles/Dashboard.css";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

const Statistics = () => {
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
    <div>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;500;700&family=Montserrat:wght@300;400;700&family=Open+Sans:wght@300;400;700&family=Teko:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
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
      
      <div className="flex">
      <h1 className="stats-header">Statistics</h1>
      < div className="sales-rev">
      <div className="most-sold">
        <p className="stats-information1">most product sold</p>
        <p className="stats-information2">name:</p>
        <p className="stats-information3">price:</p>
      </div>
      <div className="revenue">
        <p className="stats-information4">This month's revenue</p>
        <p className="stats-information5">Amount (in$)</p>
      </div>
      </div>
      </div> 
    </div>
  );
};

export default Statistics;
