import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import heroImage from "../assests/home.webp"; // Ensure the correct path
import logo from "../assests/leaf.png";
import FilterPage from "./Filter";  // Import Filter Page
import SchemePage from "./Schemes"; // Import Schemes Page

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
          <li><Link to="/filter">Filter</Link></li>
          <li><Link to="/schemes">Schemes</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
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

      {/* Filter Page Below HomePage */}
      <section id="filter">
        <FilterPage />
      </section>

      {/* Schemes Page Below Filter Page */}
      <section id="schemes">
        <SchemePage />
      </section>
    </div>
  );
};

export default HomePage;