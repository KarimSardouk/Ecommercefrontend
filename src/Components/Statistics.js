import React from "react";
import "../styles/Statistics.css";
import "../styles/Dashboard.css";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

const Statistics = () => {
  const navigate = useNavigate();

  // Mock data for most sold and most profited products
  const mostSoldProduct = {
    name: "Car Charger Denmen",
    price: "$50",
    quantitySold: 14,
  };

  const mostProfitedProduct = {
    name: "Dell Inspiron 15.6 Inch Ryzen 5",
    price: "$800",
    quantitySold: 1,
  };

  // Mock data for monthly revenue
  const monthlyRevenue = 1500; // Update this value based on your data

  const handleHome = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const handleApprove = (e) => {
    e.preventDefault();
    navigate("/ApproveProducts");
  };

  const handleStatistics = (e) => {
    e.preventDefault();
    navigate("/Statistics");
  };

  const AllProducts = (e) => {
    e.preventDefault();
    navigate("/AllProducts");
  };

  const handleSellers = (e) => {
    e.preventDefault();
    navigate("/AllSellers");
  };

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
        <div className="sales-rev">
          <div className="most-sold">
            <p className="stats-information1">
              <h2>Most product sold</h2>
            </p>
            <p className="stats-information2">Name: {mostSoldProduct.name}</p>
            <p className="stats-information3">
              Quantity Sold: {mostSoldProduct.quantitySold}
            </p>
          </div>
          <div className="most-profited">
            <p className="stats-information4">
              <h2>Most profited product</h2>
            </p>
            <p className="stats-information5">
              Name: {mostProfitedProduct.name}
            </p>
            <p className="stats-information6">
              Quantity Sold: {mostProfitedProduct.quantitySold}
            </p>
          </div>
          <div className="revenue">
            <p className="stats-information7">
              <h2>This month's revenue</h2>
            </p>
            <p className="stats-information8">Amount (in$): {monthlyRevenue}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
