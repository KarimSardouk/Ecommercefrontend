import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get('http://localhost:8000/carts/getAll'); 
      setCartItems(response.data);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.product_id, 0);
  };

  return (
    <div className='mainboxcart'>
      <h1><span className='blues'>Your Shopping Cart</span></h1>
      <div id="cart-items">
        <table className='cartable'>
          <thead>
            <tr>
              <th className='blues'>Product Name</th>
              <th className='blues'>Quantity</th>
              <th className='blues'>Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td className='blues'>{item.cart_id}</td>
                <td className='blues'>{item.quantity}</td>
                <td className='blues'>${item.product_id}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              {/* <td colSpan="2"></td> */}
              <td>
                {/* <div className='emptydiv'> */}
                  <div className='totalp'>Total Price: ${calculateTotalPrice()}</div></td>
                  <td><button className='checkout'>Checkout</button>
                {/* </div> */}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Cart;
