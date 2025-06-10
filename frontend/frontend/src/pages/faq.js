import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/faq.css";

// Default questions to always show
const defaultFaqs = [
  {
    question: "What types of schemes are available?",
    answer: "Schemes for education, healthcare, agriculture, housing, welfare, and more.",
  },
  {
    question: "Is my data safe?",
    answer: "Yes, we use secure protocols. Your data isn't shared with third parties.",
  },
];

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);
  const [search, setSearch] = useState("");
  const [userQuestion, setUserQuestion] = useState("");
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/faqs");
        const combined = [...defaultFaqs, ...res.data]; // merge default + backend
        setFaqs(combined);
      } catch (error) {
        console.error("Failed to load FAQs:", error);
        setFaqs(defaultFaqs); // fallback to defaults
      }
    };
    fetchFaqs();
  }, []);

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(search.toLowerCase())
  );

  const visibleFaqs = showAll ? filteredFaqs : filteredFaqs.slice(0, 2);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userQuestion.trim()) return;

    try {
      await axios.post("http://localhost:5000/api/faqs/questions", { question: userQuestion });
      alert("Thank you! We’ll get back to you soon.");
      setUserQuestion("");
    } catch (error) {
      console.error("Error submitting question:", error);
      alert("Submission failed.");
    }
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <h2 className="faq-title">Frequently Asked Questions (FAQ)</h2>
          <input
            type="text"
            className="faq-search"
            placeholder="Search questions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="faq-list">
          {visibleFaqs.length > 0 ? (
            visibleFaqs.map((item, index) => (
              <div className="faq-item" key={index}>
                <button className="faq-question">{item.question}</button>
                <div className="faq-answer">{item.answer}</div>
                <div className="faq-feedback">
                  <span>Was this helpful?</span>
                  <button className="faq-like">👍</button>
                  <button className="faq-dislike">👎</button>
                </div>
              </div>
            ))
          ) : (
            <p>No FAQs matched your search.</p>
          )}
        </div>

        {filteredFaqs.length > 2 && (
          <div style={{ textAlign: "center", marginTop: "10px" }}>
            <button
              onClick={() => setShowAll(!showAll)}
              className="faq-submit-btn"
              style={{ backgroundColor: "#e0e0e0", color: "#09697a" }}
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}

        <form onSubmit={handleSubmit} className="faq-form">
          <input
            type="text"
            placeholder="Ask your question..."
            value={userQuestion}
            onChange={(e) => setUserQuestion(e.target.value)}
            className="faq-user-input"
          />
          <button type="submit" className="faq-submit-btn">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default FAQ;
