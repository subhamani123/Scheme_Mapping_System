const PersonalDetails = require("../models/PersonalDetails");

// POST: Save Personal Details
exports.savePersonalDetails = async (req, res) => {
    try {
        const { gender, dob, casteCategory, profession, studentCategory } = req.body;

        if (!gender || !dob || !casteCategory || !profession) {
            return res.status(400).json({ message: "All fields are required except student category" });
        }

        const details = new PersonalDetails({
            gender,
            dob,
            casteCategory,
            profession,
            studentCategory: profession === "Student" ? studentCategory : null,
        });

        await details.save();
        res.status(201).json({ message: "Personal details saved successfully", details });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
};

// GET: Retrieve Personal Details (optional)
exports.getPersonalDetails = async (req, res) => {
    try {
        const details = await PersonalDetails.find();
        res.status(200).json(details);
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
};
