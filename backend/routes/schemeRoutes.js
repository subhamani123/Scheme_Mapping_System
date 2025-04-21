const express = require("express");
const router = express.Router();
const schemeController = require("../controllers/schemeController");

router.post("/add", schemeController.addScheme);
router.get("/", schemeController.getSchemes);
router.post("/check-eligibility", schemeController.checkEligibility);
router.get("/health", schemeController.healthCheck);

module.exports = router;
