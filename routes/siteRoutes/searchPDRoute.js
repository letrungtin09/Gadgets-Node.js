const express = require("express");
const router = express.Router();

const searchPDController = require("../../controllers/siteControllers/searchPDController");

router.use("/:keyword", searchPDController.searchPD);

module.exports = router;
