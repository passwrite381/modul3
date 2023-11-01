import React from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Footer from "../components/footer";

const HomePage = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <h2>MakanMakan</h2>
        <Footer />    
    </>
  );
}

export default HomePage;
