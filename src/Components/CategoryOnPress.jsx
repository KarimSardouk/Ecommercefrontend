// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams, Link, useNavigate } from "react-router-dom";
// import cart123 from "../images/cart123.png";

// const CategoryOnPress = () => {
//   const [products, setProducts] = useState([]);
//   const { categoryName } = useParams(); // Use useParams to get the category name from the URL
//   const navigate = useNavigate(); // Add this line to get the navigate function

//   useEffect(() => {
//     // Fetch products based on the category name
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:8000/product/product/categoryName/${categoryName}`
//         );
//         setProducts(response.data.data);
//       } catch (error) {
//         console.error("Error fetching products", error);
//       }
//     };

//     fetchProducts();
//   }, [categoryName]);

//   return (
//     <div>
//       <h2>{categoryName}</h2>
//       <div className="box-container">
//         {products.map((product) => (
//           <div key={product._id} className="box-1">
//             <img
//               className="box-1-image"
//               src={product.product_image}
//               alt=""
//               style={{
//                 width:
//                   product.category_id === 3
//                     ? "300px"
//                     : product.category_id === 4
//                     ? "200px"
//                     : product.category_id === 5
//                     ? "250px"
//                     : product.category_id === 6
//                     ? "300px"
//                     : product.category_id === 7
//                     ? "240px"
//                     : product.category_id === 8
//                     ? "240px"
//                     : "auto",
//                 marginLeft:
//                   product.category_id === 4
//                     ? "100px"
//                     : product.category_id === 3
//                     ? "50px"
//                     : product.category_id === 5
//                     ? "75px"
//                     : product.category_id === 6
//                     ? "40px"
//                     : product.category_id === 7
//                     ? "80px"
//                     : product.category_id === 8
//                     ? "80px"
//                     : "auto",
//               }}
//               onClick={() => navigate(`/products/${product._id}`)}
//             />
//             <h3 className="box-1-name">{product.product_name}</h3>
//             <h4 className="box-1-price">
//               {product.price % 1 === 0 ? `$${product.price}.00` : product.price}
//             </h4>
//             <div className="boxing123">
//               <Link to={`/products/${product._id}`} className="box-1-product">
//                 View Product
//               </Link>
//               <div className="box-1-cart">
//                 {/* Ensure that cart123 is properly defined or imported */}
//                 <img src={cart123} alt="" />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategoryOnPress;
