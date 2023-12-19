import React from "react";
import "../styles/about.css";
import Video from "../Videos/video2.mp4";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about_content">
        <h1 className="aTitle">About Us</h1>
        <p className="aboutParagraph">
        Computop is here to simplify and enrich the 
        lives of our customers by offering a diverse 
        range of top-notch products and accessories.<br/> 
        We strive to be a trusted source for the latest 
        in technology, providing you with innovative
         solutions
         to meet your evolving needs.<br/>
        Explore a vast array of laptops, cell phones, 
        and accessories to find the perfect match for
         your preferences and style. From cutting-edge
          laptops 
        to trendy phone cases, we have it all.<br/>
        Your satisfaction is our top priority. Our dedicated customer support team is here to assist you every step of the way, 
        ensuring a seamless shopping experience.
        </p>
      </div>
      <div className="video">
        <video className="aboutVideo" controls muted>
          <source src={Video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default About;
