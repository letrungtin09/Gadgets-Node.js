const express = require("express");
const router = express.Router();

const allController = require("../../controllers/siteControllers/allPDController");

router.use("/", allController.all);

module.exports = router;
