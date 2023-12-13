import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import ProtectedRoute from "./Components/ProtectedRoute";
import Dashboard from "./Components/Dashboard";
import About from "./Components/About"
import Contact from "./Components/Contact"
import Category from "./Components/Category"
import AllProducts from "./Components/AllProducts"
import Cart from "./Components/Cart";
import Profile from "./Components/Profile";
import ApproveProducts from "./Components/ApproveProducts";
import Error from "./Components/Error";
import Statistics from "./Components/Statistics";
import AdminDash from "./Components/AdminDash";
import AllSellers from "./Components/AllSellers";
import CategoriesHome from "./Components/CategoriesHome";
import HeroSection from    "./Components/HeroSection";
function App() {
  return (
    
    <Router>

      <Routes>
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Category" element={<Category />} />
      <Route path="/AllProducts" element={<AllProducts />} />
      <Route path="/Cart" element={< Cart/>} />
      <Route path="/Profile" element={< Profile/>} />
      <Route path="/ApproveProducts" element={< ApproveProducts/>} />
      <Route path="/Statistics" element={< Statistics/>} />
      <Route path="/AdminDash" element={< AdminDash/>} />
      <Route path="/AllSellers" element={< AllSellers/>} />


 
      
        
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
            // <ProtectedRoute adminOnly={false}>
              <Home />
            // </ProtectedRoute>
          }
        />
              <Route path="/Error" element={< Error/>} />

      </Routes>
    </Router>
  );
}

export default App;


// import React, { useEffect } from "react";
// import "./Component/styles/App.css";
// import About from "./Component/comp/About";
// import Header from "./Component/comp/header";
// import Testimonial from "./Component/comp/Testimonial";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   useNavigate,
// } from "react-router-dom";
// import Login from "./Component/comp/login";
// import Footer from "./Component/comp/footer";
// import Courses from "./Component/comp/popular";
// import Contact from "./Component/comp/Contactus";
// import AllCourses from "./Component/comp/view-all-courses";
// import Dashboard from "./Component/comp/AdminDashboardcomp/Dashboard";
// import Register from "./Component/comp/register";
// import Section from "./Component/comp/section";
// import Hero from "./Component/comp/hero";
// import DashboardStudent from "./Component/comp/Dashboardstudent";
// import DashboardTeacher from "./Component/comp/Dashoardteacher";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import ProtectedRoute from "./Component/comp/ProtectedRoute";
// import MainDash from "./Component/comp/maindashboard";
// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <>
//                 <Header />
//                 <Hero />
//                 <Section />
//                 <About />
//                 <Courses />
//                 <Testimonial />
//                 <ToastContainer />
//                 <Footer />
//               </>
//             }
//           ></Route>
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/all-courses" element={<AllCourses />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route
//             path="/dash/*"
//             element={
//               <ProtectedRoute>
//                 <MainDash />
//               </ProtectedRoute>
//             }
//           />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;