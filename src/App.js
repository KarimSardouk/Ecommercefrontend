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
import ApproveProducts from "./Components/ApproveProducts";
import Error from "./Components/Error";
import Statistics from "./Components/Statistics";
import AdminDash from "./Components/AdminDash";
import AllSellers from "./Components/AllSellers";
import CategoriesHome from "./Components/CategoriesHome";
import HeroSection from "./Components/HeroSection";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/AllProducts" element={<AllProducts />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/ApproveProducts" element={<ApproveProducts />} />
        <Route path="/Statistics" element={<Statistics />} />
        <Route path="/AdminDash" element={<AdminDash />} />
        <Route path="/AllSellers" element={<AllSellers />} />

        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute adminOnly={true}>
              <Dashboard />
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
  );
}

export default App;
