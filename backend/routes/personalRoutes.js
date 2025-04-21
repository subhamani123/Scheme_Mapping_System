const express = require("express");
const { savePersonalDetails, getPersonalDetails } = require("../controllers/personalDetailsController");

const router = express.Router();

router.post("/details", savePersonalDetails);
router.get("/get", getPersonalDetails);

module.exports = router;
