import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/ApproveProducts.css";
import "../styles/Dashboard.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logoutimg from "../images/shutdown.png";

const ApproveProducts = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [productId, setProductId] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const [error, setError] = useState(null);
  const [newProduct, setNewProduct] = useState({
    product_name: "",
    brand: "",
  });
  const [updatedProduct, setUpdatedProduct] = useState({
    product_name: "",
    brand: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProducts = products.filter((product) =>
    product.product_name.toLowerCase().includes(filter.toLowerCase())
  );

  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8000/product/getAll/");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching Products:", error);
      setError("Error fetching products. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/product/products/delete/${productId}`
      );
      if (response.data.success) {
        console.log(`Product with ID ${productId} deleted successfully`);
        fetchProducts();
      } else {
        console.error(
          `Error deleting product with ID ${productId}: ${response.data.message}`
        );
      }
    } catch (error) {
      console.error(`Error deleting product with ID ${productId}:`, error);
    }
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedImage(null);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleUpdateProduct = async (productId) => {
    openModal();
    const productToUpdate = products.find(
      (product) => product._id === productId
    );
    setUpdatedProduct({
      product_name: productToUpdate.product_name,
      brand: productToUpdate.brand,
    });
    setProductId(productId);
  };

  const handleModalSave = async () => {
    try {
      const response = await axios.put(
        `http://localhost:8000/product/products/update/${productId}`,
        updatedProduct
      );
      if (response.data.success) {
        console.log(`Product updated successfully`);
        fetchProducts(); // Refresh the product list
        closeModal(); // Close the modal after updating
      } else {
        console.error(`Error updating product: ${response.data.message}`);
      }
    } catch (error) {
      console.error("Error saving product information:", error);
    }
    if (updatedProduct.newImage) {
      const formData = new FormData();
      formData.append("image", updatedProduct.newImage);

      const imageUploadResponse = await axios.post("/products", formData);

      if (imageUploadResponse.data.success) {
        updatedProduct.product_image =
          imageUploadResponse.data.data.product_image;
      } else {
        console.error(
          "Error uploading image:",
          imageUploadResponse.data.message
        );
        return;
      }
    }

    closeModal();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateInput()) {
    }
  };

  const validateInput = () => {
    return true;
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
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
    navigate("/AllProductsTable");
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
      <h1>All Products</h1>
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
      </div>
      <div>
        <ToastContainer />
        <input
          id="myInput"
          placeholder="Filter names"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />

        {error && <div style={{ color: "red" }}>{error}</div>}

        <div className="box-container-1">
          {filteredProducts.map((product) => (
            <div key={product._id} className="box-1">
              <img
                className="box-1-image"
                src={product.product_image}
                alt=""
                style={{
                  width:
                    product.category_id === 3
                      ? "300px"
                      : product.category_id === 4
                      ? "200px"
                      : product.category_id === 5
                      ? "250px"
                      : product.category_id === 6
                      ? "300px"
                      : product.category_id === 7
                      ? "240px"
                      : product.category_id === 8
                      ? "240px"
                      : "auto",
                  marginLeft:
                    product.category_id === 4
                      ? "100px"
                      : product.category_id === 3
                      ? "50px"
                      : product.category_id === 5
                      ? "75px"
                      : product.category_id === 6
                      ? "40px"
                      : product.category_id === 7
                      ? "80px"
                      : product.category_id === 8
                      ? "80px"
                      : "auto",
                }}
                onClick={() => navigate(`/ApproveProducts/${product._id}`)}
              />
              <h2 className="box-1-name">{product.product_name}</h2>
              <h3 className="box-1-price">
                {product.price % 1 === 0
                  ? `$${product.price}.00`
                  : product.price}
              </h3>
              <div className="boxing123">
                <Link to={`/products/${product._id}`} className="box-1-product">
                  View Product
                </Link>

                <button
                  className="delete-button-1"
                  onClick={() => {
                    handleDeleteProduct(product._id);
                    toast(`${product.product_name} was deleted successfully`);
                  }}
                >
                  Delete Product
                </button>
                <button
                  className="update-button-1"
                  onClick={() => handleUpdateProduct(product._id)}
                >
                  Update Product
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for updating product name */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Update Product Name</h2>
            <form onSubmit={handleSubmit}>
              <label>New Product Name:</label>
              <input
                type="text"
                placeholder="Enter new product name"
                value={updatedProduct.product_name}
                onChange={(e) =>
                  setUpdatedProduct({
                    ...updatedProduct,
                    product_name: e.target.value,
                  })
                }
              />
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageChange(e)}
              />
              {selectedImage && (
                <div className="image-preview">
                  <img src={selectedImage} alt="Selected image" />
                </div>
              )}
              <label>New Product brand:</label>
              <input
                type="text"
                placeholder="Enter new product brand"
                value={updatedProduct.brand}
                onChange={(e) =>
                  setUpdatedProduct({
                    ...updatedProduct,
                    brand: e.target.value,
                  })
                }
              />
              <label>New Product Price:</label>
              <input
                type="number"
                placeholder="Enter new product price"
                value={updatedProduct.price}
                onChange={(e) =>
                  setUpdatedProduct({
                    ...updatedProduct,
                    price: e.target.value,
                  })
                }
              />
              <label>New Product Description:</label>
              <input
                type="text"
                placeholder="Enter new product description"
                value={updatedProduct.description}
                onChange={(e) =>
                  setUpdatedProduct({
                    ...updatedProduct,
                    product_name: e.target.value,
                  })
                }
              />
              <label>New Product Display:</label>
              <input
                type="text"
                placeholder="Enter new product display"
                value={updatedProduct.display}
                onChange={(e) =>
                  setUpdatedProduct({
                    ...updatedProduct,
                    display: e.target.value,
                  })
                }
              />
              <label>New Product Display:</label>
              <input
                type="text"
                placeholder="Enter new product processor"
                value="{updatedProduct.processor}.00"
                onChange={(e) =>
                  setUpdatedProduct({
                    ...updatedProduct,
                    processor: e.target.value,
                  })
                }
              />
              <label>New Product Battery:</label>
              <input
                type="text"
                placeholder="Enter new product battery"
                value={updatedProduct.battery}
                onChange={(e) =>
                  setUpdatedProduct({
                    ...updatedProduct,
                    battery: e.target.value,
                  })
                }
              />
              {/* Add other input fields as needed */}
              <button type="button" onClick={handleModalSave}>
                Save
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApproveProducts;
