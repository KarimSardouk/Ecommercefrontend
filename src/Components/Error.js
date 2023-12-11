import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Error.css";
const Error = () => {
    const navigate = useNavigate();
    const handleHome = (e) => {
      e.preventDefault();
      navigate("/");
    }
  return (
    <div>
      <div className="flex-container">
        <div className="text-center">
          <h1 className="h1">
            <span className="fade-in" id="digit1">
              4
            </span>
            <span className="fade-in" id="digit2">
              0
            </span>
            <span className="fade-in" id="digit3">
              4
            </span>
          </h1>
          <h3 className="fadeIn">PAGE NOT FOUND</h3>
          <button className="button" type="button" name="button" onClick={handleHome}>
            Return To Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
