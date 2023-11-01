import React from "react";
import logoHero from "../assets/hero.jpg";

const Hero = () => {
  return (
    <main>
      <img
        src={logoHero}
        className="img-fluid position-relative"
        alt="Hero Image"
        style={{ width: "100%" }}
      />
      <div
        className="text-white position-absolute top-50 translate-left"
        style={{ marginLeft: "80px" }}
      >
        <h1>Selamat Datang</h1>
        <p style={{ fontSize: "21px" }}>di website Praktikum Pemrograman Website</p>
      </div>
    </main>
  );
};

export default Hero;
