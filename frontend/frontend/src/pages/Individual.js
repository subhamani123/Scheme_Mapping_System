import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Individual.css";
import { useUserData } from "../context/UserDataContext"; // ✅ using custom hook

const IndividualDetails = () => {
  const navigate = useNavigate();
  const { updateUserData } = useUserData(); // ✅ correct usage

  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [casteCategory, setCasteCategory] = useState("");
  const [profession, setProfession] = useState("");
  const [studentCategory, setStudentCategory] = useState("");

  const handleNext = () => {
    if (!gender || !dob || !casteCategory || !profession) {
      alert("Please fill all required fields");
      return;
    }

    const formData = {
      gender,
      dob,
      casteCategory,
      profession,
      studentCategory: profession === "student" ? studentCategory : "",
    };

    updateUserData(formData); // ✅ use context updater
    navigate("/domain-inquiry");
  };

  return (
    <div className="individual-page">
      <div className="individual-details-container">
        <h2 className="individual-title">Personal Details</h2>
        <p className="individual-subtitle">
          Fill in your details to check scheme eligibility
        </p>

        <form onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
          <div className="individual-form-group">
            <label>Gender</label>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <div className="individual-form-group">
            <label>Date of Birth</label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>

          <div className="individual-form-group">
            <label>Caste Category</label>
            <select
              value={casteCategory}
              onChange={(e) => setCasteCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              <option>General</option>
              <option>OBC</option>
              <option>SC/ST</option>
            </select>
          </div>

          <div className="individual-form-group">
            <label>Profession</label>
            <select
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
            >
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

          {profession === "student" && (
            <div className="individual-form-group">
              <label>Student Category</label>
              <select
                value={studentCategory}
                onChange={(e) => setStudentCategory(e.target.value)}
              >
                <option value="">Select Category</option>
                <option>Primary</option>
                <option>Upper Primary</option>
                <option>Secondary</option>
                <option>Higher Secondary</option>
                <option>Diploma</option>
                <option>ITI/Arts/Vocational Training</option>
                <option>Undergraduate</option>
                <option>Postgraduate</option>
                <option>Doctoral or PhD</option>
                <option>Post Doctoral</option>
                <option>Any of the Above</option>
              </select>
            </div>
          )}

          <div className="individual-button-group">
            <button
              type="button"
              className="individual-button individual-back-btn"
              onClick={() => navigate(-1)}
            >
              ⬅ Back
            </button>
            <button
              type="submit"
              className="individual-button individual-next-btn"
            >
              Next ➡
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default IndividualDetails;
