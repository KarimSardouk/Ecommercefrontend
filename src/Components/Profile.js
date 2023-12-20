import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Profile.css";
import axios from "axios";
import logoutimg from "../Images/shutdown.png";
const Profile = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [name, setName] = useState([]);
  const [lastName, setLastName] = useState([]);
  const [email, setEmail] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState([]);
  const [address, setAddress] = useState([]);
  useEffect(() => {
    getUserByID();
  }, []);
  const getUserByID = async (user_id) => {
    try {
      const response = await axios.get(
        `http://localhost/user/getByID/${user_id}`
      );
      console.log(response);
      setUsers(response.data);
      setName(response.data);
      setLastName(response.data);
      setEmail(response.data);
      setPhoneNumber(response.data);
      setAddress(response.data);
    } catch (error) {
      console.log("error fetching users", error);
    }
  };
  const handleLogout = () => {
    sessionStorage.removeItem("authToken");
    navigate("/");
  };
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="h12">Hi There Karim!</h1>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="profile-image">
              <svg
                viewBox="0 0 122.88 122.88"
                y="0px"
                x="0px"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                className="pfp"
              ></svg>
              <div className="name">Karim Sardouk</div>
            </div>
          </div>
          <div className="flip-card-back">
            <div className="Description">
              <p className="description">
                <p>Created At: 19/12/2023</p>
                <p>Status : Active</p>
                <p>Items purchased : None</p>
                <button className="logout-image" onClick={handleLogout}>
                  Logout
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
