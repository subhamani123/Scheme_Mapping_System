const express = require("express");
const { getEligibleSchemes, addScheme, getAllSchemes } = require("../controllers/schemeController");

const router = express.Router();

// Route to get eligible schemes based on user details
router.post("/eligible", getEligibleSchemes);

// Route to add a new scheme (Admin only)
router.post("/add", addScheme);

// Route to get all schemes
router.get("/all", getAllSchemes);

module.exports = router;
