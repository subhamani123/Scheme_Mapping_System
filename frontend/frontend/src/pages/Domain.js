import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGraduationCap, FaHospital, FaIndustry, FaTractor, FaHome, FaRunning } from "react-icons/fa";
import "../styles/Domain.css";
import { useUserData } from "../context/UserDataContext"; // 👈 import context

const DomainOfEnquiry = () => {
  const [selectedDomain, setSelectedDomain] = useState("");
  const navigate = useNavigate();
  const { updateUserData } = useUserData(); // 👈 grab updater from context

  const domains = [
    { name: "Education", icon: <FaGraduationCap /> },
    { name: "Healthcare", icon: <FaHospital /> },
    { name: "Enterprise", icon: <FaIndustry /> },
    { name: "Agriculture", icon: <FaTractor /> },
    { name: "Housing", icon: <FaHome /> },
    { name: "Sports, Arts & Culture", icon: <FaRunning /> },
  ];

  const handleNext = () => {
    updateUserData({ domainOfInquiry: selectedDomain }); // 👈 save to context
    navigate("/eligibilitycheck");
  };

  return (
    <div className="domain-container">
      <h2>Tell us about your domain of inquiry</h2>
      <div className="domain-options">
        {domains.map((item) => (
          <div
            key={item.name}
            className={`domain-card ${selectedDomain === item.name ? "selected" : ""}`}
            onClick={() => setSelectedDomain(item.name)}
          >
            {item.icon}
            <p>{item.name}</p>
          </div>
        ))}
      </div>
      <div className="domain-buttons">
        <button className="back-btn" onClick={() => navigate(-1)}>Back</button>
        <button 
          className="next-btn" 
          onClick={handleNext}
          disabled={!selectedDomain}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DomainOfEnquiry;
