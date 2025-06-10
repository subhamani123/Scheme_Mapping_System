const FAQ = require("../models/Faq");

// Existing: Get answered FAQs
const getFAQs = async (req, res) => {
  try {
    const faqs = await FAQ.find({ isAnswered: true }).sort({ submittedAt: -1 });
    res.json(faqs);
  } catch (err) {
    res.status(500).json({ message: "Error fetching FAQs" });
  }
};

// Existing: Submit user question
const submitQuestion = async (req, res) => {
  const { question } = req.body;
  if (!question?.trim()) {
    return res.status(400).json({ message: "Question is required." });
  }

  try {
    const newQuestion = new FAQ({ question });
    await newQuestion.save();
    console.log("New FAQ saved:", newQuestion);
    res.status(201).json({ message: "Question submitted!" });
  } catch (err) {
    console.error("FAQ save error:", err);
    res.status(500).json({ message: "Failed to submit question." });
  }
};

// ✅ New: Answer a question (admin)
const answerQuestion = async (req, res) => {
  const { id } = req.params;
  const { answer } = req.body;

  try {
    const updated = await FAQ.findByIdAndUpdate(
      id,
      { answer, isAnswered: true },
      { new: true }
    );
    if (!updated) {
      return res.status(404).json({ message: "FAQ not found" });
    }
    res.json({ message: "Answer saved", data: updated });
  } catch (err) {
    res.status(500).json({ message: "Failed to answer question." });
  }
};

// ✅ New: Delete a question (admin)
const deleteFAQ = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await FAQ.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ message: "FAQ not found" });
    }
    res.json({ message: "FAQ deleted." });
  } catch (err) {
    res.status(500).json({ message: "Delete failed." });
  }
};

module.exports = {
  getFAQs,
  submitQuestion,
  answerQuestion,
  deleteFAQ,
};
