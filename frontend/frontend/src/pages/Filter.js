import React from "react";
import { useNavigate } from "react-router-dom";
import "../Filter.css";
import individualImg from "../assests/girl.png";
import familyImg from "../assests/family.png";
import enterpriseImg from "../assests/enter.png"; // Correct image imports

const categories = [
  { title: "Individual", img: individualImg, path: "/individual-details" },
  { title: "Family", img: familyImg, path: "/family-details" },
  { title: "Enterprise", img: enterpriseImg, path: "/enterprise-details" },
];

const FilterPage = () => {
  const navigate = useNavigate();

  return (
    <div className="filter-container">
      <h2 className="filter-title">Who are you?</h2>
      <div className="category-container">
        {categories.map((category, index) => (
          <div key={index} className="category-card" onClick={() => navigate(category.path)}>
            <img src={category.img} alt={category.title} className="category-image" />
            <h3 className="category-title">{category.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterPage;
