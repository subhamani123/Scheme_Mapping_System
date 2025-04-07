import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "../styles/EligibilityCheck.css"; // Ensure correct path

const EligibilityCheck = () => {
  const [category, setCategory] = useState("");
  const [exService, setExService] = useState("");
  const [geoCategory, setGeoCategory] = useState("");
  const [disability, setDisability] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");

  const navigate = useNavigate();

  return (
    <Container fluid className="eligibility-container vh-100 d-flex align-items-center justify-content-center">
      <Card className="eligibility-box p-4">
        <Card.Body>
          <h2 className="text-center mb-3">More About Yourself</h2>

          <Form>
            <Row className="g-3">
              <Col lg={6} md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Which category do you belong to? </Form.Label>
                  <Form.Select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option>Select your category</option>
                    <option>Above poverty line</option>
                    <option>Below poverty line</option>
                    <option>Any of the above</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col lg={6} md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Are you ex-servicemen / ex-servicemen family? </Form.Label>
                  <Form.Select value={exService} onChange={(e) => setExService(e.target.value)}>
                    <option>Select your ex-servicemen type</option>
                    <option>Yes</option>
                    <option>No</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col lg={6} md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Which geographical category do you reside in? </Form.Label>
                  <Form.Select value={geoCategory} onChange={(e) => setGeoCategory(e.target.value)}>
                    <option>Select your geography</option>
                    <option>Urban</option>
                    <option>Rural</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col lg={6} md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Do you belong to the Divyang category? </Form.Label>
                  <Form.Select value={disability} onChange={(e) => setDisability(e.target.value)}>
                    <option>Are you physically disabled?</option>
                    <option>Yes</option>
                    <option>No</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col lg={6} md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Your marital status </Form.Label>
                  <Form.Select value={maritalStatus} onChange={(e) => setMaritalStatus(e.target.value)}>
                    <option>Select your marital status</option>
                    <option>Married</option>
                    <option>UnMarried</option>
                    <option>Divorced</option>
                    <option>Widow</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <div className="button-group">
              <Button variant="secondary" onClick={() => navigate("/domain-inquiry")}>
                ← Back
              </Button>
              <Button variant="primary" onClick={() => navigate("/next-page")}>
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
