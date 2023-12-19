import React, { useState, useEffect, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/AllProductsTable.css";
// import profileimage from "../images/profileimage.png";
// import dellimage from "../images/dell-inspiron.png";
// import cart123 from "../images/cart123 (1).png";
import logoutimg from "../images/shutdown.png";
// import Header from "./Header";
import Footer from "./Footer";

const AllProductsTable = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const [error, setError] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortColumn, setSortColumn] = useState("product_name");

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user_id");
    navigate("/");
  };

  const filteredProducts = useMemo(() => {
    console.log("Filtering using Memo...");
    const filtered = products.filter((product) =>
      product.product_name.toLowerCase().includes(filter.toLowerCase())
    );

    return filtered.sort((a, b) => {
      const aValue = a[sortColumn];
      const bValue = b[sortColumn];

      const aValueLower =
        typeof aValue === "string" ? aValue.toLowerCase() : aValue;
      const bValueLower =
        typeof bValue === "string" ? bValue.toLowerCase() : bValue;

      if (sortOrder === "asc") {
        return aValueLower > bValueLower ? 1 : -1;
      } else {
        return aValueLower < bValueLower ? 1 : -1;
      }
    });
  }, [products, filter, sortOrder, sortColumn]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/products/getAll"
        );
        console.log(response);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching Products:", error);
        setError("Error fetching products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchAllProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Function to handle sorting
  const handleSort = (column) => {
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
    setSortColumn(column);
  };

  const renderHeaderCell = (column, label) => (
    <th className="table1-header1" onClick={() => handleSort(column)}>
      {label}
      {sortColumn === column && (
        <span>{sortOrder === "asc" ? " ▲" : " ▼"}</span>
      )}
    </th>
  );

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

  const handleAllProductsTable = (e) => {
    e.preventDefault();
    navigate("AllProductsTable");
  };
  const handleSellers = (e) => {
    e.preventDefault();
    navigate("/AllSellers");
  };
  const handleAdd = async (e) => {
    e.preventDefault();
    navigate("/AddProduct");
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
        <div className="button-logout-1">
          <button className="logoutimg" onClick={handleLogout}>
            <img src={logoutimg} alt="" />
          </button>
        </div>
      </div>
      <input
        id="myInput"
        placeholder="Filter names"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <table className="products-table">
        <thead>
          <tr>
            {renderHeaderCell("product_name", "Product Name")}
            {renderHeaderCell("brand", "Brand")}
            {renderHeaderCell("price", "Price")}
            {renderHeaderCell("stock_quantity", "Stock Quantity")}
          </tr>
        </thead>
        <tbody>
          {filteredProducts &&
            filteredProducts.map((product, index) => (
              <tr key={index}>
                <td className="table1-description2">{product.product_name}</td>
                <td className="table1-description1">{product.brand}</td>
                <td className="table1-description1">{product.price}</td>
                <td className="table1-description1">
                  {product.stock_quantity}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default AllProductsTable;
