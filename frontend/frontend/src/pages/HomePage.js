import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import heroImage from "../assests/home.webp";
import logo from "../assests/leaf.png";

import FilterPage from "./Filter";
import SchemePage from "./Schemes";
import FAQ from "./faq";
import ContactPage from "./contact";

const HomePage = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" className="nav-logo" />
          <span className="brand-name">Namma TN Schemes</span>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/filter">Discover</Link></li>
          <li><Link to="/schemes">Schemes</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/faq">Faq</Link></li>
        </ul>
        <div className="auth-buttons">
          <Link to="/login"><button className="signin-btn">Sign In</button></Link>
          <Link to="/signup"><button className="signup-btn">Sign Up</button></Link>
        </div>
        <div className="menu-toggle">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text">
          <h1>Discover Government Schemes Easily</h1>
          <p>
            Find and apply for Tamil Nadu government benefits effortlessly. Our platform provides
            accurate and updated information to help you access what you need.
          </p>
          <Link to="/schemes">
            <button className="explore-btn">Explore Schemes</button>
          </Link>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Government Schemes Representation" />
        </div>
      </section>

      {/* Filter Page Below Hero */}
      <section id="filter">
        <FilterPage />
      </section>

      {/* Schemes Page Below Filter */}
      <section id="schemes">
        <SchemePage />
      </section>

      {/* FAQ Section Below Schemes */}
      <section id="faq">
        <FAQ />
      </section>

      {/* Contact Section Below FAQ */}
      <section id="contact">
        <ContactPage />
      </section>
    </div>
  );
};

export default HomePage;
