import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/cart.css";
import Cookies from "js-cookie";

const Cart = () => {
  const userId = Cookies.get("userId");
  const [cartItems, setCartItems] = useState([]);
  const [productsQuantity, setProductsQuantity] = useState({});
  const handleDeleteProduct = (product_id) => {
    fetch(`http://localhost:8000/carts/delete/${product_id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          window.alert("Product deleted successfully!");
        } else {
          window.alert("Product couldn't be deleted!");
        }
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/carts/get/${userId}`
      );
      const fetchedCartItems = response.data;

      const groupedItems = fetchedCartItems.reduce(
        (accumulator, currentItem) => {
          const { products_id, quantity_to_purchase } = currentItem;
          if (!accumulator[products_id]) {
            accumulator[products_id] = 0;
          }
          accumulator[products_id] += quantity_to_purchase;
          return accumulator;
        },
        {}
      );

      setProductsQuantity(groupedItems);

      const uniqueItems = fetchedCartItems.filter(
        (item, index, self) =>
          index === self.findIndex((t) => t.products_id === item.products_id)
      );

      setCartItems(uniqueItems);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  const calculateTotalPrice = (quantity, price) => {
    return quantity * price;
  };

  return (
    <div className="mainboxcart">
      <h1>
        <span className="blues">Your Shopping Cart</span>
      </h1>
      <div id="cart-items">
        <table className="cartable">
          <thead>
            <tr>
              <th className="blues">Product Name</th>
              <th className="blues">Quantity</th>
              <th className="blues">Price</th>
              <th className="blues">Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td className="blues">{item.product_name}</td>
                <td className="blues">{productsQuantity[item.products_id]}</td>
                <td className="blues">
                  $
                  {calculateTotalPrice(
                    productsQuantity[item.products_id],
                    item.price
                  )}
                </td>
                <td className="blues">
                  <button
                    className="delete"
                    onClick={() => handleDeleteProduct(item._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>
                <div className="totalp">
                  Total Price: $
                  {cartItems.reduce((total, item) => {
                    const itemQuantity =
                      productsQuantity[item.products_id] || 0;
                    return (
                      total + calculateTotalPrice(itemQuantity, item.price)
                    );
                  }, 0)}
                </div>
              </td>
              <td>
                <button className="checkout">Checkout</button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Cart;
