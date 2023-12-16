import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import cart123 from "../images/cart123.png";
import "../styles/singleproduct.css";

import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";




const ProductView = () => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1); // Initial quantity is set to 1
  const [remainingStock, setRemainingStock] = useState(0);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const { productId } = useParams();

  const handleFullDescription = () => {
    setShowFullDescription(true);
  };

  const handleDetailedDescription = () => {
    setShowFullDescription(false);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/product/products/${productId}`
        );
        const fetchedProduct = response.data;
        setProduct(fetchedProduct);
        // Set remaining stock to the initial stock quantity
        setRemainingStock(fetchedProduct.data.stock_quantity);
        console.log("Received Product Data:", fetchedProduct);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleIncrement = () => {
    if (quantity < remainingStock) {
      setQuantity(quantity + 1);
      // Update remaining stock
      setRemainingStock((prevStock) => prevStock - 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      // Increment remaining stock
      setRemainingStock((prevStock) => prevStock + 1);
    }
    
    const showToast = () => {
        toast("Added to Cart");}
     
  };

  return (
    <div className="all-box-12">
      {product && product.data ? ( // Check if product and product.data exist
        <>
          <h1 className="box-12-title">{product.data.product_name}</h1>
          <div className="box-12">
            <div className="box-123">
              <img
                className="box-12-image"
                src={product.data.product_image}
                alt=""
                style={{
                  width:
                    product.data.category_id === 3
                      ? "400px"
                      : product.data.category_id === 4
                      ? "200px"
                      : product.data.category_id === 5
                      ? "250px"
                      : product.data.category_id === 6
                      ? "300px"
                      : product.data.category_id === 7
                      ? "240px"
                      : "auto",
                }}
              />
              <div className="incrementing-box">
                <h2>Quantity:</h2>
                <div className="quantity-input">
                  <button onClick={handleDecrement}>-</button>
                  <input type="text" value={quantity} readOnly />
                  <button onClick={handleIncrement}>+</button>
                  <div className="button-add-12">

                  <button onClick={showToast}>Show Toast</button>
                  <ToastContainer />

                  </div>
                </div>
                <h2>Total Price: ${product.data.price * quantity}</h2>
                <h2>Remaining Stock: {remainingStock}</h2>
              </div>
            </div>
            <div>
              <h2 className="box-12-name">{product.data.product_name}</h2>
              <h3 className="box-12-price">
                {product.data.price % 1 === 0
                  ? `$${product.data.price}.00`
                  : product.data.price}
              </h3>

              <div className="button-container">
                <button onClick={handleDetailedDescription}>
                  Detailed Description
                </button>
                <button onClick={handleFullDescription}>
                  Full Description
                </button>
              </div>
              <div className="description-container">
                <div className="details-section">
                  {showFullDescription ? (
                    <p>{product.data.description}</p>
                  ) : (
                    <div>
                      {product.data.brand && (
                        <p className="brand">Brand: {product.data.brand}</p>
                      )}
                      {product.data.modelNumber && (
                        <p className="modelNumber">
                          Model Number: {product.data.modelNumber}
                        </p>
                      )}
                      {product.data.display && (
                        <p className="display">
                          Display: {product.data.display}
                        </p>
                      )}
                      {product.data.battery && (
                        <p className="battery">
                          Battery: {product.data.battery}
                        </p>
                      )}
                      {product.data.processor && (
                        <p className="processor">
                          Processor: {product.data.processor}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductView;
