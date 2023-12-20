import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/cart.css";
import Cookies from "js-cookie";

const Cart = () => {
  const userId = Cookies.get("userId");
  const [cartItems, setCartItems] = useState([]);
  const [productsQuantity, setProductsQuantity] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [showCart, setShowCart] = useState(true);

  const clearUserCart = async () => {
    try {
      const response = await axios.delete(
       `http://localhost:8000/carts/deleteByUserId/${userId}`
      );

      if (response.data.success) {
        console.log("User cart data deleted successfully!");
      } else {
        console.error("Failed to delete user cart data.");
      }
    } catch (error) {
      console.error("Error deleting user cart data:", error);
    }
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
    setShowCart(!showCart);
    clearUserCart();
  };
  const handleDeleteProduct = (_id) => {
    fetch(`http://localhost:8000/carts/delete/${_id}`, {
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

      // Save cart items to local storage
      localStorage.setItem("cartItems", JSON.stringify(uniqueItems));
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  const handleCheckout = async () => {
    try {
      clearUserCart();
      const savedCartItems =
        JSON.parse(localStorage.getItem("cartItems")) || [];

      const formattedCartItems = savedCartItems.map((item) => ({
        user_id: item.user_id,
        products_id: item.products_id,
        quantity_to_purchase: item.quantity_to_purchase,
        price: item.price,
        product_name: item.product_name,
      }));

      for (let i = 0; i < formattedCartItems.length; i++) {
        const item = formattedCartItems[i];
        const response = await axios.post(
          "http://localhost:8000/checkout/addCheckout",
          {
            user_id: item.user_id,
            products_id: item.products_id,
            quantity_to_purchase: item.quantity_to_purchase,
            price: item.price,
            product_name: item.product_name,
          }
        );

        if (response.data.success) {
          const checkoutData = response.data;
          console.log("Checkout Information:", checkoutData);
        } else {
          console.error("Failed to add items to checkout.", response.data);
          // Handle failure case if needed
        }
      }

      // After successful checkout for all items, toggle the popup
      togglePopup();
    } catch (error) {
      console.error("Error adding items to checkout:", error);
    }
  };

  const calculateTotalPrice = (quantity, price) => {
    return quantity * price;
  };

  return (
    <div className="mainboxcart">
      {/* Popup/modal */}
      {showPopup && (
        <div className="popup">
          <div className="popup-inner">
            <h2>Checkout</h2>
            <p>
              Fantastic! Your order is confirmed. 🎉 If you have any questions
              or need assistance, feel free to reach out. Have a good day
            </p>
            {/* Close button */}
            <button onClick={togglePopup}>Close</button>
          </div>
        </div>
      )}
      {showCart && (
        <div>
          <h1>
            <span className="blues">Your Shopping Cart</span>
          </h1>
          <div id="cart-items">
            <table className="cartable">
              <thead>
                <tr>
                  <th className="blues">Product Name</th>
                  <th className="blues">Quantity</th>
                  <th className="blues">Unit Price</th>
                  <th className="blues">Price</th>
                  <th className="blues">Remove</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={index}>
                    <td className="blues">
                      <div className="CartDiv">
                        <img className="imgCart" src={item.product_image} />
                        <p className="nameCart">{item.product_name}</p>
                      </div>
                    </td>
                    <td className="blues">
                      {productsQuantity[item.products_id]}
                    </td>
                    <td className="blues">${item.price}</td>
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
                    <button className="checkout" onClick={handleCheckout}>
                      Checkout
                    </button>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;