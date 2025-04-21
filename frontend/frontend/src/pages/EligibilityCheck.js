import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useUserData } from "../context/UserDataContext";
import "../styles/EligibilityCheck.css";

const EligibilityCheck = () => {
  const [category, setCategory] = useState("");
  const [exService, setExService] = useState("");
  const [geoCategory, setGeoCategory] = useState("");
  const [disability, setDisability] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");

  const { userData, updateUserData } = useUserData();
  const navigate = useNavigate();

  const handleNext = async () => {
    if (!category || !exService || !geoCategory || !disability || !maritalStatus) {
      alert("Please fill in all fields.");
      return;
    }

    const dataToSubmit = {
      ...userData,
      category,
      exServicemen: exService === "Yes",
      geoCategory,
      physicallyDisabled: disability === "Yes",
      maritalStatus,
    };

    console.log("🟢 Data to Submit:", JSON.stringify(dataToSubmit, null, 2));

    // Save to context
    updateUserData(dataToSubmit);

    try {
      const response = await axios.post("http://localhost:5000/api/personal/details", dataToSubmit);
      console.log("Submission successful:", response.data);

      // ✅ FIX: use dataToSubmit instead of undefined formData
      navigate("/eligible-schemes", {
        state: {
          criteria: dataToSubmit,
        },
      });
    } catch (error) {
      console.error("Error submitting eligibility data:", error);

      let errorMessage = "Something went wrong while submitting your data.";

      if (error.response) {
        errorMessage = `Server Error (${error.response.status}): ${JSON.stringify(error.response.data)}`;
      } else if (error.request) {
        errorMessage = "No response received from server.";
      } else {
        errorMessage = `Error: ${error.message}`;
      }

      alert(errorMessage);
    }
  };

  return (
    <Container fluid className="eligibility-container vh-100 d-flex align-items-center justify-content-center">
      <Card className="eligibility-box p-4">
        <Card.Body>
          <h2 className="text-center mb-3">More About Yourself</h2>
          <Form>
            <Row className="g-3">
              <Col lg={6} md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Which category do you belong to?</Form.Label>
                  <Form.Select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Select your category</option>
                    <option>SC/ST</option>
                    <option>OBC</option>
                    <option>General</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col lg={6} md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Are you ex-servicemen / ex-servicemen family?</Form.Label>
                  <Form.Select value={exService} onChange={(e) => setExService(e.target.value)}>
                    <option value="">Select your ex-servicemen type</option>
                    <option>Yes</option>
                    <option>No</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col lg={6} md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Which geographical category do you reside in?</Form.Label>
                  <Form.Select value={geoCategory} onChange={(e) => setGeoCategory(e.target.value)}>
                    <option value="">Select your geography</option>
                    <option>Urban</option>
                    <option>Rural</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col lg={6} md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Do you belong to the Divyang category?</Form.Label>
                  <Form.Select value={disability} onChange={(e) => setDisability(e.target.value)}>
                    <option value="">Are you physically disabled?</option>
                    <option>Yes</option>
                    <option>No</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col lg={6} md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Your marital status</Form.Label>
                  <Form.Select value={maritalStatus} onChange={(e) => setMaritalStatus(e.target.value)}>
                    <option value="">Select your marital status</option>
                    <option>Single</option>
                    <option>Married</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <div className="button-group mt-4 d-flex justify-content-between">
              <Button variant="secondary" onClick={() => navigate("/domain-inquiry")}>
                ← Back
              </Button>
              <Button variant="primary" onClick={handleNext}>
                Next →
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default EligibilityCheck;
