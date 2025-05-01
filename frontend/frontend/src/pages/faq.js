import React, { useState } from "react";
import "../styles/faq.css";

const faqs = [
  {
    question: "What types of schemes are available?",
    answer:
      "The system includes schemes for education, healthcare, agriculture, housing, student welfare, and social security offered by the Tamil Nadu government.",
  },
  {
    question: "Is my data safe?",
    answer:
      "Yes, we ensure all your data is handled securely and is only used to check scheme eligibility. Your information is not shared with third parties.",
  },
  {
    question: "Do I need to register to use the system?",
    answer:
      "While browsing schemes is open, we recommend registering so your eligibility checks can be saved and revisited later.",
  },
  {
    question: "Can I apply for schemes directly through this portal?",
    answer:
      "This platform guides you to eligible schemes. For application, you'll be redirected to official Tamil Nadu government portals with necessary details.",
  },
];

const FAQ = () => {
  const [search, setSearch] = useState("");
  const [userQuestion, setUserQuestion] = useState("");

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(search.toLowerCase())
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userQuestion.trim()) {
      alert("Thank you for your question! We'll get back to you soon.");
      setUserQuestion("");
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
          {filteredFaqs.map((item, index) => (
            <div className="faq-item" key={index}>
              <button className="faq-question">{item.question}</button>
              <div className="faq-answer">{item.answer}</div>
              <div className="faq-feedback">
                <span>Was this helpful?</span>
                <button className="faq-like">👍</button>
                <button className="faq-dislike">👎</button>
              </div>
            </div>
          ))}
        </div>

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
