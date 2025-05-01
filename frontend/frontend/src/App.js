import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



import HomePage from "./pages/HomePage";
import FilteringPage from "./pages/Filter";
import IndividualDetails from "./pages/Individual";
import SchemesPage from "./pages/Schemes";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/Signup";
import DomainOfEnquiry from "./pages/Domain";
import EligibleSchemes from "./pages/EligibleSchemes";
import EligibilityCheck from "./pages/EligibilityCheck";
import FAQ from "./pages/faq";
import ContactPage from "./pages/contact";

// ✅ Import the context provider
import { UserDataProvider } from "./context/UserDataContext";

function App() {
  return (
    <UserDataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/filter" element={<FilteringPage />} />
          <Route path="/individual-details" element={<IndividualDetails />} />
          <Route path="/domain-inquiry" element={<DomainOfEnquiry />} />
          <Route path="/schemes" element={<SchemesPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/eligibilitycheck" element={<EligibilityCheck />} />
          <Route path="/eligible-schemes" element={<EligibleSchemes />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </UserDataProvider>
  );
}

export default App;
