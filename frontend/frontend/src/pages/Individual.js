import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Individual.css"; // Import the separate CSS

const IndividualDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="individual-page">
    <div className="individual-details-container">
      <h2 className="individual-title">Personal Details</h2>
      <p className="individual-subtitle">Fill in your details to check scheme eligibility</p>

      <form>
        <div className="individual-form-group">
          <label>Gender</label>
          <select>
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        <div className="individual-form-group">
          <label>Date of Birth</label>
          <input type="date" />
        </div>

        <div className="individual-form-group">
          <label>Caste Category</label>
          <select>
            <option value="">Select Category</option>
            <option>General</option>
            <option>OBC</option>
            <option>SC/ST</option>
          </select>
        </div>

        <div className="individual-form-group">
          <label>Profession</label>
          <select>
    <option value="">Select Profession</option>
    <option value="salaried">Salaried Employee</option>
    <option value="business">Businessman</option>
    <option value="self-employed">Self-Employed Professional</option>
    <option value="agriculture">Agricultural & Allied</option>
    <option value="academician">Academician</option>
    <option value="student">Student</option>
    <option value="labour">Labour</option>
    <option value="artist">Artist</option>
    <option value="unemployed">Unemployed</option>
    <option value="none">None of the Above</option>
  </select>
        </div>

        <div className="individual-form-group">
          <label>Student Category</label>
          <select>
            <option value="">Select Category</option>
            <option>School</option>
            <option>College</option>
            <option>Research</option>
          </select>
        </div>

        {/* Navigation Buttons */}
        <div className="individual-button-group">
          <button type="button" className="individual-button individual-back-btn" onClick={() => navigate(-1)}>
            ⬅ Back
          </button>
          <button type="button" className="individual-button individual-next-btn" onClick={() => navigate("/domain-inquiry")}>
            Next ➡
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default IndividualDetails;
