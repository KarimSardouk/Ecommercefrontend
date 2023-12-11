import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AllSellers.css";
import "../styles/Dashboard.css";
import axios from "axios";
const AllSellers = () => {
  const [sellers, setSellers] = useState([]);
  const [name, setName] = useState([]);
  const [lastName, setLastName] = useState([]);
  const [email, setEmail] = useState([]);
  const [hashedPassword, setHashedPassword] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState([]);
  const [address, setAddress] = useState([]);
  useEffect(() => {
    getAllSellers();
  }, []);
  const getAllSellers = async () => {
    try {
      //fill the http url with your own
      const response = await axios.get(
        "http://localhost:8000/users/getSellers"
      );
      console.log(response);
      setSellers(response.data);
      setName(response.data);
      setLastName(response.data);
      setEmail(response.data);
      setHashedPassword(response.data);
      setPhoneNumber(response.data);
      setAddress(response.data);
    } catch (error) {
      console.log("error fetching sellers", error);
    }
  };
  const navigate = useNavigate();
  const validateInput = () => {
    if (!email || !hashedPassword) {
      console.log("Email and Password are required >:(");
      return false;
    }

    return true;
  };
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
  const AllProducts = async (e) => {
    e.preventDefault();
    navigate("/AllProducts");
  };
  const handleSellers = async (e) => {
    e.preventDefault();
    navigate("/AllSellers");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateInput()) return;

    try {
      const response = await axios.post(
        "http://localhost:8000/users/addSeller",
        {
          name,
          lastName,
          email,
          hashedPassword,
          phoneNumber,
          address,
        }
      );
      console.log(response.data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
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

      <table className="sellers-table">
        <thead>
          <tr>
            <th className="table1-header1">Name</th>
            <th className="table1-header1">Last Name</th>
            <th className="table1-header1">Email</th>
            <th className="table1-header1">Password</th>
            <th className="table1-header1">Phone Number</th>
            <th className="table1-header1">Address</th>
          </tr>
        </thead>
        <tbody>
          {sellers.map((seller, index) => (
            <tr key={index}>
              <td className="table1-description1">{seller.name}</td>
              <td className="table1-description1" key={index}>
                {seller.lastName}
              </td>
              <td className="table1-description1">{seller.email}</td>
              <td className="table1-description1">{seller.hashedPassword}</td>
              <td className="table1-description1">{seller.phoneNumber}</td>
              <td className="table1-description1">{seller.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <form onClick={handleSubmit}>
        <div className="coolinput">
          <label for="input" class="text">
            Name:
          </label>
          <input
            type="text"
            placeholder="Write here..."
            name="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input"
          />
        </div>
        <div className="coolinput">
          <label for="input" class="text">
            Last name:
          </label>
          <input
            type="text"
            placeholder="Write here..."
            name="input"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="input"
          />
        </div>
        <div className="coolinput">
          <label for="input" class="text">
            Email:
          </label>
          <input
            type="text"
            placeholder="Write here..."
            name="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
          />
        </div>
        <div className="coolinput">
          <label for="input" class="text">
            Phone Number:
          </label>
          <input
            type="text"
            placeholder="Write here..."
            name="input"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="input"
          />
        </div>
        <div className="coolinput">
          <label for="input" class="text">
            Password:
          </label>
          <input
            type="password"
            placeholder="Write here..."
            name="input"
            value={hashedPassword}
            onChange={(e) => setHashedPassword(e.target.value)}
            className="input"
          />
        </div>
      </form>
      <button className="add-seller">Add Seller</button>
    </div>
  );
};

export default AllSellers;
