import { useState, useEffect } from "react";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Login() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const validateInput = () => {
    if (!email || !password) {
      setError("Email and Password are required :(");
      return false;
    }

    return true;
  };
  useEffect(() => {
    if (sessionStorage.getItem("authToken")) {
      navigate("/");
    }
  }, [navigate]);
 const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateInput()) return;

    try {
      const response = await axios.post(
        "http://localhost:8000/users/loginUser",
        {
          email,
          password,
        }
      );
      console.log(response.data);
      const token = response.data.data;
      sessionStorage.setItem("authToken", token);
      console.log(token);
      navigate("/");
      } catch (error) {
      setError(error.response.data.message);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!validateInput()) return;

    try {
      const response = await axios.post("http://localhost:8000/users/addUser", {
        name,
        lastName,
        email,
        password,
        phoneNumber,
        address,
      });
      console.log(response.data);
      navigate("/");
    } catch (error) {
      console.log("error",error)
    }
  };
  useEffect(() => {
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const container = document.getElementById("container");

    const handleSignUpClick = () => {
      container.classList.add("right-panel-active");
    };

    const handleSignInClick = () => {
      container.classList.remove("right-panel-active");
    };

    signUpButton.addEventListener("click", handleSignUpClick);
    signInButton.addEventListener("click", handleSignInClick);

    return () => {
      signUpButton.removeEventListener("click", handleSignUpClick);
      signInButton.removeEventListener("click", handleSignInClick);
    };
  }, []);

  return (
    <div className="root">
      <div className="body">
        <div className="container" id="container">
          <div className="form-container sign-up-container">
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleRegister} className="form1" action="#">
              <h1 className="create">Create Account</h1>
              <span className="span1">or use your email for registration</span>
              <input
                className="input1"
                required
                value={name}
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="input2"
                required
                value={lastName}
                type="text"
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
              />
              <input
                className="input3"
                required
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                className="input4"
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                className="input5"
                required
                value={phoneNumber}
                type="text"
                placeholder="Phone Number"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <input
                className="input6"
                required
                value={address}
                type="text"
                placeholder="Address"
                onChange={(e) => setAddress(e.target.value)}
              />
              <button className="button1">Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit} className="form2" action="#">
              <h1 className="sign">Sign in</h1>
              <span className="span2">or use your account</span>
              <input
                className="input7"
                required
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="input8"
                required
                value={password}
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <a className="anchor" href="#">
                Forgot your password?
              </a>
              <button className="button2">Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1 className="welcome">Welcome Back!</h1>
                <p className="paragraph">
                  To keep connected with us please login with your personal info
                </p>
                <button className="button1" id="signIn">
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1 className="hello">Hello, Friend!</h1>
                <p className="paragraph">
                  Enter your personal details and start journey with us
                </p>
                <button className="button2" id="signUp">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login