import { useState, useEffect } from "react";
import "../styles/AdminDash.css";
import "../styles/Dashboard.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logoutimg from "../Images/shutdown.png";
import Header from "./header";
// import dellimage from "../images/dell-inspiron.png";
const AdminDash = () => {
  const [users, setUsers] = useState([]);
  const [userID, setUserID] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [name, setName] = useState([]);
  const [lastName, setLastName] = useState([]);
  const [email, setEmail] = useState([]);
  const [hashedPassword, setHashedPassword] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState([]);
  const [address, setAddress] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);
  const getAllUsers = async () => {
    try {
      //fill the http url with your own
      const response = await axios.get("http://localhost:8000/user/");
      console.log(response);
      setUsers(response.data);
      setName(response.data);
      setLastName(response.data);
      setEmail(response.data);
      setPhoneNumber(response.data);
      setAddress(response.data);
    } catch (error) {
      console.log("error fetching events", error);
    }
  };
  const handleDeleteUser = (user_id) => {
    fetch(`http://localhost:8000/user/deleteUser/${user_id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          window.alert("User deleted successfully!");
          setUsers((prevUsers) =>
            prevUsers.filter((user) => user._id !== user_id)
          );
        } else {
          window.alert("User couldn't be deleted!");
        }
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
  };
  const handleLogout = () => {
    sessionStorage.removeItem("authToken");
    navigate("/");
  };
  const navigate = useNavigate();
  const handleHome = async (e) => {
    e.preventDefault();
    navigate("/");
  };
  const handleApprove = async (e) => {
    e.preventDefault();
    navigate("/ApproveProducts");
  };
  const handleStatistics = async (e) => {
    e.preventDefault();
    navigate("/Statistics");
  };
  const handleAllProductsTable = async (e) => {
    e.preventDefault();
    navigate("/AllProductsTable");
  };
  const handleSellers = async (e) => {
    e.preventDefault();
    navigate("/AllSellers");
  };
  const handleAdd = async (e) => {
    e.preventDefault();
    navigate("/AddProduct");
  };

  return (
    <>
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
        <button className="logoutimg" onClick={handleLogout}>
          <img src={logoutimg} alt="" />
        </button>
      </div>
      <table className="sales-people" id="sales-people">
        <tr className="table-row-1">
          <th className="t-h-1">Name</th>
          <th className="t-h-2">Last Name </th>
          <th className="t-h-3">Email</th>
          <th className="t-h-5">Phone Number </th>
          <th className="t-h-6">Address</th>
          <th className="t-h-7">Action</th>
        </tr>
        {users &&
          users.map((user, index) => (
            <tr className="t-r-2" key={index}>
              <td className="t-d-4">{user.name}</td>
              <td className="t-d-5">{user.lastName}</td>
              <td className="t-d-6">{user.email}</td>
              <td className="t-d-8">{user.phoneNumber}</td>
              <td className="t-d-9">{user.address}</td>
              <td className="t-d-fourth">
                <button onClick={() => handleDeleteUser(user._id)}>
                  Delete User
                </button>
              </td>
            </tr>
          ))}
      </table>
    </>
  );
};

export default AdminDash;
