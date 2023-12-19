import React, { useState } from "react";
import "../styles/footer.css";
import svg1 from "../Svgs/location.png";
import svg2 from "../Svgs/phone.png";
import svg3 from "../Svgs/email.png";

const Footer = () => {
  const [email, setEmail] = useState("");

  const isEmailValid = (email) => {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = () => {
    if (!email.trim()) {
      window.alert("Please enter a valid email address.");
      return;
    }

    if (!isEmailValid(email)) {
      window.alert("Please enter a valid email address.");
      return;
    }

    window.alert(`Subscribed with email: ${email}`);

    setEmail("");
  };

  return (
    <div className="footer">
      <div className="mfooter">
        <div className="categories">
          <h1 className="footerTitle">Categories</h1>
          <ul className="ulCategories">
            <li>Smart Watch</li>
            <li>Phones</li>
            <li>Tablets</li>
            <li>TV</li>
            <li>Laptops</li>
            <li>Computers</li>
            <li>Cameras</li>
            <li>Accessories</li>
          </ul>
        </div>
        <div className="contactUs">
          <h1 className="footerTitle">Contact Us</h1>
          <ul className="ulContact">
            <li className="liContact">
              <div className="svg">
                {" "}
                <img className="contactSvg" src={svg1} />
              </div>
              <a className="aFooter">Beirut/location</a>
            </li>
            <li className="liContact">
              <div className="svg">
                <img className="contactSvg" src={svg2} />
              </div>
              <a className="aFooter">+961 03 332 443</a>
            </li>
            <li className="liContact">
              <div className="svg">
                <img className="contactSvg" src={svg3} />
              </div>
              <a className="aFooter">infinity.tech@gmail.com</a>
            </li>
          </ul>
        </div>

        <div className="newsLetter">
          <h1 className="footerTitle">News Letter</h1>
          <p className="newsParagraph">
            Want to receive regular updates about our services? Sign up and
            we’ll keep you posted!
          </p>
          <input className="newsInput" />
          <br />
          <button
            className="newsButton"
            onClick={handleSubscribe}
            value="Subscribe"
            type="submit"
          >
            Subscribe{" "}
          </button>
        </div>
      </div>
      <div className="final1">
        <p>Powered by CompuTop-© 2023 LLC</p>
      </div>
    </div>
  );
};

export default Footer;
