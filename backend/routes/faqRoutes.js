const express = require("express");
const router = express.Router();
const {
  getFAQs,
  submitQuestion,
  answerQuestion,
  deleteFAQ,
} = require("../controllers/faqController");

// Optional: Simple admin middleware
const adminOnly = (req, res, next) => {
  const isAdmin = req.headers["x-admin-secret"] === "your_admin_key"; // Replace with real auth
  if (!isAdmin) {
    return res.status(403).json({ message: "Admin access denied" });
  }
  next();
};

// Public
router.get("/", getFAQs);
router.post("/questions", submitQuestion);

// Admin
router.patch("/answer/:id", adminOnly, answerQuestion);
router.delete("/:id", adminOnly, deleteFAQ);

module.exports = router;
