import React from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import logoIlab from "../assets/logo-ilab.png";
import logoHero from "../assets/hero.jpg";
import logoIg from "../assets/logo-instagram.png";
import logoTwt from "../assets/logo-twitter.png";
import logoFb from "../assets/logo-facebook.png";

const ContactPage = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{ padding: "18px" }}>
        <div className="container-fluid">
          <img src={logoIlab} alt="iLab" width="70" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 col justify-content-center">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                    HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                    ABOUT US
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link active">
                    CONTACT
                </Link>
              </li>
            </ul>
            <form className="d-flex column-gap-2" role="search">
              <button
                className="btn"
                type="submit"
                style={{
                  color: "black",
                  paddingLeft: "32px",
                  paddingRight: "32px",
                  border: "1px solid black",
                  borderRadius: "12px",
                }}
              >
                SIGN UP
              </button>
              <button
                className="btn"
                type="submit"
                style={{
                  color: "white",
                  backgroundColor: "#6a87ec",
                  paddingLeft: "32px",
                  paddingRight: "32px",
                  borderRadius: "12px",
                }}
              >
                LOGIN
              </button>
            </form>
          </div>
        </div>
      </nav>

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
          <p style={{ fontSize: "21px" }}>Hubungi saya: </p>
          <p style={{ fontSize: "21px" }}>WhatsApp (0889 9686 6339) </p>
        </div>
      </main>

      <footer className="text-center text-lg-start bg-light text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* ... */}
        </section>
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <img
                  className="margin"
                  src={logoIlab}
                  style={{ marginBottom: "42px", marginTop: "24px" }} // Gunakan objek style
                />
                <p>Copyright 2022. Infinite Learning</p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Services</h6>
                <p>
                  <a href="#!" className="text-reset">Email Marketing</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Campaigns</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Branding</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Offline</a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">About</h6>
                <p>
                  <a href="#!" className="text-reset">Our Story</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Benefits</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Team</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Careers</a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Follow Us</h6>
                <p>
                  <img
                    src={logoFb}
                    style={{ height: "24px", paddingRight: "18px" }} // Gunakan objek style
                  />
                  <a href="#!" className="text-reset">Facebook</a>
                </p>
                <p>
                  <img
                    src={logoTwt}
                    style={{ height: "24px", paddingRight: "18px" }} // Gunakan objek style
                  />
                  <a href="#!" className="text-reset">Twitter</a>
                </p>
                <p>
                  <img
                    src={logoIg}
                    style={{ height: "24px", paddingRight: "18px" }} // Gunakan objek style
                  />
                  <a href="#!" className="text-reset">Instagram</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default ContactPage;
