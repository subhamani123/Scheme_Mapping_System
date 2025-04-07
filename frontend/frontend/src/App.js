import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FilteringPage from "./pages/Filter";
import IndividualDetails from "./pages/Individual";
import SchemesPage from "./pages/Schemes";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/Signup";
import DomainOfEnquiry from "./pages/Domain";

import EligibilityCheck from "./pages/EligibilityCheck"; // ✅ Ensure correct import

  

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/filter" element={<FilteringPage />} />
        <Route path="/individual-details" element={<IndividualDetails />} />
        <Route path="/domain-inquiry" element={<DomainOfEnquiry />} />
        <Route path="/schemes" element={<SchemesPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/eligibilitycheck" element={<EligibilityCheck />} /> {/* ✅ Ensure path is correct */}

      </Routes>
    </Router>
  );
}

export default App;
