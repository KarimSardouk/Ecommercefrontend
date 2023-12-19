import React from "react";
import "../styles/Home.css";
import { Helmet } from "react-helmet";
import HeroSection from "../Components/HeroSection";
import "../styles/Hero.css";
import CategoriesHome from "../Components/CategoriesHome";
import "../styles/categories.css";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <CategoriesHome />
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;500;700&family=Montserrat:wght@300;400;700&family=Open+Sans:wght@300;400;700&family=Teko:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
     
    </div>
  );
};

export default Home;
