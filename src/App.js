import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import ProtectedRoute from "./Components/ProtectedRoute";
import Dashboard from "./Components/Dashboard";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Category from "./Components/Category";
import AllProducts from "./Components/AllProducts";
import Cart from "./Components/Cart";
import Profile from "./Components/Profile";
import Error from "./Components/Error";
import Statistics from "./Components/Statistics";
import AdminDash from "./Components/AdminDash";
import AllSellers from "./Components/AllSellers";
import ProductView from "./Components/ProductView";
import Header from "./Components/header"; // Assuming you have a Header component
import ApproveProducts from "./Components/ApproveProducts";
import AllProductsTable from "./Components/AllProductsTable";
import AddProduct from "./Components/AddProduct";
import Brands from "./Components/Brands";
import Statistics1 from "./Components/Statistics1";
import Footer from "./Components/Footer";
import Contact1 from "./Components/ContactUsPage";
import CategoryView from "./Components/CategoryView";
import CategoryProducts from "./Components/CategoryProducts";
import CategoryOnPress from "./Components/CategoryOnPress";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Brands />
                <Statistics1 />
                <Footer />
              </>
            }
          />
          <Route path="/Category" element={<Category />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/AllProducts" element={<AllProducts />} />
          <Route
            path="/product/categoryName/:categoryName"
            element={<CategoryProducts />}
          />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/ContactUsPage" element={<Contact1 />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/ApproveProducts" element={<ApproveProducts />} />
          <Route path="/Statistics" element={<Statistics />} />
          <Route path="/AllSellers" element={<AllSellers />} />
          <Route path="/AllProductsTable" element={<AllProductsTable />} />
          <Route path="/products/:productId" element={<ProductView />} />
          <Route path="/ApproveProducts/:productId" element={<ProductView />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/AddProduct" element={<AddProduct />} />
          <Route path="/CategoryView" element={<CategoryView />} />
          <Route path="/Cart" element={<Cart />} />

          <Route
            path="/CategoryProducts/:category_id"
            element={<CategoryProducts />}
          />
          <Route
            path="/product/product/categoryName/:categoryName"
            element={<CategoryOnPress />}
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/AdminDash"
            element={
              <ProtectedRoute>
                <AdminDash />
              </ProtectedRoute>
            }
          />
          <Route
            path="/"
            element={
              <ProtectedRoute adminOnly={false}>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/Error" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
