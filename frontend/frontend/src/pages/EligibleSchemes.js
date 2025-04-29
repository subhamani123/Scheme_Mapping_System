import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
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
        setLoading(false);

        if (response.data.schemes.length === 0) {
          setError("No schemes found matching your eligibility.");
        } else {
          setEligibleSchemes(response.data.schemes);
          setError("");
        }
      } catch (err) {
        console.error("Error fetching eligible schemes:", err);
        setLoading(false);
        setError("An error occurred while fetching eligible schemes.");
      }
    };

    fetchEligibleSchemes();
  }, [eligibilityCriteria]);

  if (loading) return <p className="text-center mt-5">Loading...</p>;

  return (
    <Container className="eligible-container">
      <div className="text-center mt-4 mb-5">
        <h1 className="eligible-heading">Eligible Schemes</h1>
        <div className="heading-underline"></div>
      </div>

      {error ? (
        <div className="text-center mt-5">
          <h4>{error}</h4>
          <Button className="mt-3" variant="secondary" onClick={() => navigate("/")}>
            Go Back Home
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
                  <Card.Text className="scheme-description">
                    {scheme.description}
                  </Card.Text>
                  {scheme.eligibility && (
                    <Card.Text>
                      <strong>Eligibility:</strong> {scheme.eligibility}
                    </Card.Text>
                  )}
                  {scheme.link && (
                    <div className="d-flex justify-content-center mt-3">
                      <a href={scheme.link} target="_blank" rel="noopener noreferrer">
                        <Button variant="primary" size="sm">
                          More Info
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
