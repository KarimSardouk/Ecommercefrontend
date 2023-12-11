import {useState, useEffect} from 'react';
import "./AdminDash.css";
import "./Dashboard.css"
import { useNavigate } from "react-router-dom";
import axios from 'axios';
// import dellimage from "../images/dell-inspiron.png";
const AdminDash = () => {
    const [users,setUsers]=useState([]);
    const [name,setName]=useState([]);
    const [lastName,setLastName]=useState([]);
    const [email,setEmail]=useState([]);
    const [hashedPassword,setHashedPassword]=useState([]);
    const [phoneNumber,setPhoneNumber]= useState([]);
    const [address,setAddress]=useState([]);

    useEffect(() => {
        getAllUsers();
      }, []);
      const getAllUsers = async () => {
        try {
          //fill the http url with your own
          const response = await axios.get("http://localhost:8000/users/");
          console.log(response);
          setUsers(response.data);
          setName(response.data);
          setLastName(response.data);
          setEmail(response.data);
          setHashedPassword(response.data);
          setPhoneNumber(response.data);
          setAddress(response.data);
        } catch (error) {
          console.log("error fetching events", error);
        }
      };
    const navigate = useNavigate();
    const handleHome= async (e) => {
        e.preventDefault();
        navigate("/");
      }
      const handleApprove = async (e) => {
        e.preventDefault();
        navigate("/ApproveProducts");
      }
      const handleStatistics = async (e) => {
        e.preventDefault();
        navigate("/Statistics")
      }
      const AllProducts = async (e) => {
        e.preventDefault();
        navigate("/AllProducts")
      }
      const handleSellers = async (e) => {
        e.preventDefault();
        navigate("/AllSellers")
      }
  return (
    <>
          <div className="sidebar">
        <a className="home" onClick={handleHome}>
          Home
        </a>
        <a className="sellers" onClick={handleSellers}>
          View and Add Sellers
        </a>
        <a className="view-products" onClick={AllProducts}>
          View all products
        </a>
        <a className="stats" onClick={handleStatistics}>
          Statistics
        </a>
        <a className="approval" onClick={handleApprove}>
          Approve products
        </a>
      </div>
    <table className="sales-people" id="sales-people">
        <tr className="table-row-1">
          <th className="t-h-1">Name</th>
          <th className="t-h-2">Last Name </th>
          <th className="t-h-3">Email</th>
          <th className="t-h-4">hashedPassword</th>
          <th className="t-h-5">Phone Number </th>
          <th className="t-h-6">Address</th>
          <th className="t-h-7">Action</th>
        </tr>
        {users && users.map((user, index)=>(
        <tr className="t-r-2" key={index}>
          <td className="t-d-4">{user.name}</td>
          <td className="t-d-5">{user.lastName}</td>
          <td className="t-d-6">{user.email}</td>
          <td className="t-d-7">{user.hashedPassword}</td>
          <td className="t-d-8">{user.phoneNumber}</td>
          <td className="t-d-9">{user.address}</td>
    <td className="t-d-fourth"><button>Delete User</button></td>
        </tr>
        ))}  
      </table>
    </>
  )
}

export default AdminDash
