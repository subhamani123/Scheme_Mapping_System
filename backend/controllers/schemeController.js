const Scheme = require("../models/Scheme");

// Function to get eligible schemes based on user details
const getEligibleSchemes = async (req, res) => {
  try {
    const {
      gender,
      dateOfBirth,
      casteCategory,
      profession,
      studentCategory,
      domain,
      category,
      exServicemen,
      geographicalCategory,
      physicallyDisabled,
      maritalStatus,
    } = req.body;

    // Calculate user's age from date of birth
    const birthYear = new Date(dateOfBirth).getFullYear();
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;

    // Find eligible schemes based on criteria
    const eligibleSchemes = await Scheme.find({
      $or: [{ gender: gender }, { gender: "Any" }],
      $or: [{ casteCategory: casteCategory }, { casteCategory: "Any" }],
      $or: [{ profession: profession }, { profession: "Any" }],
      $or: [{ studentCategory: studentCategory }, { studentCategory: "Any" }],
      $or: [{ domain: domain }, { domain: "Any" }],
      $or: [{ category: category }, { category: "Any" }],
      $or: [{ geographicalCategory: geographicalCategory }, { geographicalCategory: "Any" }],
      $or: [{ maritalStatus: maritalStatus }, { maritalStatus: "Any" }],
      $or: [{ physicallyDisabled: physicallyDisabled }, { physicallyDisabled: false }],
      $or: [{ exServicemen: exServicemen }, { exServicemen: false }],
      ageRange: { min: { $lte: age }, max: { $gte: age } },
    });

    res.status(200).json({ schemes: eligibleSchemes });
  } catch (error) {
    console.error("Error fetching schemes:", error);
    res.status(500).json({ message: "Server Error", error });
  }
};

// Function to add a new scheme (for admin use)
const addScheme = async (req, res) => {
  try {
    const newScheme = new Scheme(req.body);
    await newScheme.save();
    res.status(201).json({ message: "Scheme added successfully", scheme: newScheme });
  } catch (error) {
    console.error("Error adding scheme:", error);
    res.status(500).json({ message: "Server Error", error });
  }
};

// Function to get all schemes (for admin or users)
const getAllSchemes = async (req, res) => {
  try {
    const schemes = await Scheme.find();
    res.status(200).json({ schemes });
  } catch (error) {
    console.error("Error fetching all schemes:", error);
    res.status(500).json({ message: "Server Error", error });
  }
};

module.exports = { getEligibleSchemes, addScheme, getAllSchemes };
