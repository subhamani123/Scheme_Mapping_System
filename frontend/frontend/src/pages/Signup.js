import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // ✅ import axios
import "../App.css";
import logo from "../assests/leaf.png";
import "../styles/Signup.css"; // Ensure the correct path


const SignUpPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/auth/signup", {
        fullName: formData.name,
        emailOrPhone: formData.contact,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      });

      alert(response.data.message); // ✅ Show success message
      navigate("/login");// Redirect to login or clear form, as needed
    } catch (error) {
      console.error("Signup error:", error.response?.data || error.message);
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

      {/* Right Section: Sign-Up Form */}
      <div className="right-section">
        <div className="signup-box">
          <form onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label>Email or Phone</label>
            <input
              type="text"
              name="contact"
              placeholder="Enter your email or phone number"
              value={formData.contact}
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

            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />

            <button type="submit">SIGN UP</button>
          </form>

          <p className="login-link">
            Already have an account? <Link to="/login">Sign in</Link>
          </p>

          <p className="home-link">
            <Link to="/">← Back to Home</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
