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
        const response = await axios.post("http://localhost:5000/api/schemes/check-eligibility", eligibilityCriteria);
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
    <Container className="py-5">
      <h2 className="mb-4 text-center">Eligible Schemes</h2>

      {error ? (
        <div className="text-center mt-5">
          <h4>{error}</h4>
          <Button className="mt-3" variant="secondary" onClick={() => navigate("/")}>
            Go Back Home
          </Button>
        </div>
      ) : (
        <Row className="g-4">
          {eligibleSchemes.map((scheme, index) => (
            <Col md={6} lg={4} key={index}>
              <Card className="scheme-card h-100 shadow-sm">
                <Card.Body>
                  <Card.Title className="scheme-title">{scheme.title || scheme.name}</Card.Title>
                  <Card.Text className="scheme-description">{scheme.description}</Card.Text>
                  {scheme.eligibility && (
                    <Card.Text>
                      <strong>Eligibility:</strong> {scheme.eligibility}
                    </Card.Text>
                  )}
                  {scheme.link && (
                    <a href={scheme.link} target="_blank" rel="noopener noreferrer">
                      <Button variant="primary" size="sm">
                        More Info
                      </Button>
                    </a>
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

