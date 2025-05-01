import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";
import "../styles/EligibleSchemes.css";

const EligibleSchemes = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const eligibilityCriteria = location.state?.criteria;

  const [eligibleSchemes, setEligibleSchemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!eligibilityCriteria) {
      setLoading(false);
      setError("No eligibility criteria provided.");
      return;
    }

    const fetchEligibleSchemes = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/schemes/check-eligibility",
          eligibilityCriteria
        );

        const schemes = Array.isArray(response.data)
          ? response.data
          : response.data.schemes || [];

        setEligibleSchemes(schemes);
        setError(schemes.length === 0 ? "No schemes found for your criteria." : "");
      } catch (err) {
        console.error("Error fetching eligible schemes:", err);
        setError("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchEligibleSchemes();
  }, [eligibilityCriteria]);

  return (
    <Container className="eligible-container">
      <div className="text-center my-5">
        <h1 className="eligible-heading">🎯 Eligible Schemes for You</h1>
        <p className="eligible-subtitle">Based on your inputs, these schemes are recommended:</p>
        <div className="heading-underline mx-auto"></div>
      </div>

      {loading ? (
        <div className="text-center mt-5">
          <Spinner animation="border" style={{ color: "#09697a" }} />
          <p className="mt-2">Checking your eligibility...</p>
        </div>
      ) : error ? (
        <div className="text-center mt-5">
          <h5>{error}</h5>
          <Button
            className="mt-3"
            style={{ backgroundColor: "#09697a", borderColor: "#09697a" }}
            onClick={() => navigate("/")}
          >
            Go Back to Home
          </Button>
        </div>
      ) : (
        <Row className="g-4 justify-content-center">
          {eligibleSchemes.map((scheme, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={4}>
              <Card className="scheme-card h-100">
                <Card.Body>
                  <Card.Title className="scheme-title text-center">
                    {scheme.title || scheme.name}
                  </Card.Title>
                  <Card.Text className="scheme-description">{scheme.description}</Card.Text>
                  {scheme.eligibility && (
                    <Card.Text>
                      <strong>Eligibility:</strong> {scheme.eligibility}
                    </Card.Text>
                  )}
                  {scheme.link && (
                    <div className="d-flex justify-content-center mt-3">
                      <a href={scheme.link} target="_blank" rel="noopener noreferrer">
                        <Button
                          variant="outline-primary"
                          size="sm"
                          style={{ borderColor: "#09697a", color: "#09697a" }}
                        >
                          Learn More
                        </Button>
                      </a>
                    </div>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default EligibleSchemes;
