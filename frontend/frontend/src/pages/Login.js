import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Use useNavigate for redirection
import axios from "axios"; // Import axios
import "../App.css";
import logo from "../assests/leaf.png"; // Fixed path

const LoginPage = () => {
  const navigate = useNavigate(); // Use navigate to handle redirection

  // Form data state management
  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
  });

  // Handle form data change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation (you can extend this if needed)
    if (!formData.emailOrPhone || !formData.password) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        emailOrPhone: formData.emailOrPhone,
        password: formData.password,
      });

      // Store the token and user details (you can store in localStorage, sessionStorage, or context API)
      localStorage.setItem("token", response.data.token); // Store the token in localStorage
      localStorage.setItem("user", JSON.stringify(response.data.user)); // Store user details (optional)

      alert(response.data.message); // Show success message

      // Redirect to the homepage (or any other page you want)
      navigate("/"); // Redirect to the homepage ("/"), or use another path like "/dashboard"
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Something went wrong. Please try again.");
    }
  };

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
          <form onSubmit={handleSubmit}>
            <label>Email or Phone Number</label>
            <input
              type="text"
              name="emailOrPhone"
              placeholder="Enter your email or phone number"
              value={formData.emailOrPhone}
              onChange={handleChange}
              required
            />
            
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            
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

