const express = require("express");
const { getRoles, getOpportunities, getOverview } = require("../controllers/contentController");

const router = express.Router();

router.get("/roles", getRoles);
router.get("/opportunities", getOpportunities);
router.get("/overview", getOverview);

module.exports = router;
