import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import logo from "../assests/leaf.png"; // Fixed path

const LoginPage = () => {
  return (
    <div className="container">
      {/* Left Section: Logo, Title, Description */}
      <div className="left-section">
        <img src={logo} alt="Namma TN Schemes Logo" className="logo-image" />
        <h1 className="brand-title">Namma TN Schemes</h1>
        <p className="brand-description">
          Your Gateway to Tamil Nadu Government Benefits
        </p>
      </div>

      {/* Right Section: Login Form */}
      <div className="right-section">
        <div className="login-box">
          <form>
            <label>Email or Phone Number</label>
            <input type="text" placeholder="Enter your email or phone number" required />
            
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
            
            <div className="options">
              <div>
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <a href="#" className="recover">Recover password</a>
            </div>
            
            <button type="submit">SIGN IN</button>
          </form>

          <p className="register-link">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>

          <p className="home-link">
            <Link to="/">← Back to Home</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
