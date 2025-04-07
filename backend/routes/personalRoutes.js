const express = require("express");
const { savePersonalDetails, getPersonalDetails } = require("../controllers/personalDetailsController");

const router = express.Router();

router.post("/save", savePersonalDetails);
router.get("/get", getPersonalDetails);

module.exports = router;
