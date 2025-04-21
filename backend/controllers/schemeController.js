const Scheme = require("../models/Scheme");

// Add a scheme
exports.addScheme = async (req, res) => {
  try {
    const scheme = new Scheme(req.body);
    await scheme.save();
    res.status(201).json({ message: "Scheme added successfully", scheme });
  } catch (err) {
    console.error("Error adding scheme:", err);
    res.status(500).json({ message: "Error adding scheme", error: err.message });
  }
};

// Get all schemes
exports.getSchemes = async (req, res) => {
  try {
    const schemes = await Scheme.find();
    res.json(schemes);
  } catch (err) {
    console.error("Error retrieving schemes:", err);
    res.status(500).json({ message: "Error retrieving schemes", error: err.message });
  }
};

// Helper: match user input to scheme eligibility
const matchesEligibility = (schemeCriteria, userCriteria) => {
  return Object.entries(schemeCriteria).every(([key, schemeValue]) => {
    const userValue = userCriteria[key];
    
    console.log(`[Eligibility Check] Key: ${key}, Scheme Value: ${schemeValue}, User Value: ${userValue}`);
    
    // If scheme doesn't restrict this field
    if (schemeValue === undefined || schemeValue === "Any" || schemeValue === "") {
      console.log(`[Eligibility Check] Key: ${key} - Skipping comparison (no restriction)`);
      return true;
    }

    // Normalize for comparison
    const normalizedScheme = typeof schemeValue === "string" ? schemeValue.trim().toLowerCase() : schemeValue;
    const normalizedUser = typeof userValue === "string" ? userValue.trim().toLowerCase() : userValue;

    const isMatch = normalizedScheme === normalizedUser;

    console.log(`[Eligibility Check] ${key}: scheme="${normalizedScheme}" | user="${normalizedUser}" => ${isMatch}`);

    return isMatch;
  });
};

// Check eligible schemes based on user data
exports.checkEligibility = async (req, res) => {
  try {
    // Normalize incoming criteria
    const criteria = Object.fromEntries(
      Object.entries(req.body).map(([key, value]) => [
        key,
        typeof value === "string" ? value.trim().toLowerCase() : value,
      ])
    );

    console.log("📥 Incoming eligibility criteria:", criteria);

    const schemes = await Scheme.find({ "eligibilityCriteria": { $exists: true } });

    const eligible = schemes.filter(scheme => {
      console.log("📜 Scheme eligibility criteria:", scheme.eligibilityCriteria);
      return matchesEligibility(scheme.eligibilityCriteria, criteria);
    });

    if (eligible.length === 0) {
      return res.status(200).json({ message: "No matching schemes found", schemes: [] });
    }

    res.status(200).json({ message: "Matching schemes found", schemes: eligible });
  } catch (err) {
    console.error("❌ Error checking eligibility:", err);
    res.status(500).json({
      message: "Error checking eligibility",
      error: err.message,
      stack: process.env.NODE_ENV === "development" ? err.stack : undefined
    });
  }
};

// Health check
exports.healthCheck = (req, res) => {
  res.status(200).json({ message: "Schemes API is running fine 🚀" });
};
