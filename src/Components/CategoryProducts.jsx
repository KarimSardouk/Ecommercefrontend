import React, { useState, useEffect } from "react";
import axios from "axios";

const CategoryOnPress = ({ categoryName }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/product/product/categoryName/${categoryName}`
        );
        setProducts(response.data);
        console.log("categoryName:", fetchProductsByCategory);
      } catch (error) {
        console.error("Error fetching Products:", error);
        console.log("Full error object:", error);
        setError("Error fetching products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProductsByCategory();
  }, [categoryName]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Products in Category</h1>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <div className="box-container">
        {products.map((product) => (
          <div key={product._id} className="box-1">
            <h3>{product.product_name}</h3>
            <p>Price: ${product.price}</p>
            {/* Display product information as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryOnPress;
