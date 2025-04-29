const PersonalDetails = require("../models/PersonalDetails");

// POST: Save Personal Details
exports.savePersonalDetails = async (req, res) => {
  try {
    const {
      gender,
      dob,
      casteCategory,
      profession,
      studentCategory,
      domainOfInquiry,
      povertyLineCategory, // ✅ updated key
      exServicemen,
      geoCategory,
      physicallyDisabled,
      maritalStatus,
    } = req.body;

    // Logging all incoming fields for debugging
    console.log("🟡 Incoming Data:", {
      gender,
      dob,
      casteCategory,
      profession,
      studentCategory,
      domainOfInquiry,
      povertyLineCategory,
      exServicemen,
      geoCategory,
      physicallyDisabled,
      maritalStatus,
    });

    // Check for missing required fields (excluding optional ones)
    if (
      !gender?.trim() ||
      !dob ||
      !casteCategory?.trim() ||
      !profession?.trim() ||
      !domainOfInquiry?.trim() ||
      !povertyLineCategory?.trim() || // ✅ updated validation key
      !geoCategory?.trim() ||
      !maritalStatus?.trim()
    ) {
      console.log("❌ Missing field(s):", {
        gender,
        dob,
        casteCategory,
        profession,
        domainOfInquiry,
        povertyLineCategory,
        geoCategory,
        maritalStatus,
      });

      return res.status(400).json({
        message:
          "All fields are required except studentCategory, exServicemen, and physicallyDisabled",
      });
    }

    const details = new PersonalDetails({
      gender,
      dob,
      casteCategory,
      profession,
      studentCategory: profession === "Student" ? studentCategory : null,
      domainOfInquiry,
      povertyLineCategory, // ✅ ensure correct DB field
      exServicemen: exServicemen ?? false,
      geoCategory,
      physicallyDisabled: physicallyDisabled ?? false,
      maritalStatus,
    });

    await details.save();
    res
      .status(201)
      .json({ message: "Personal details saved successfully", details });
  } catch (error) {
    console.error("🔥 Error saving personal details:", error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

// GET: Retrieve Personal Details
exports.getPersonalDetails = async (req, res) => {
  try {
    const details = await PersonalDetails.find();
    res.status(200).json(details);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};
