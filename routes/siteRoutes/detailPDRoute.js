const express = require("express");
const router = express.Router();

const detailPDController = require("../../controllers/siteControllers/detailPDController");

router.use("/:idProduct", detailPDController.detailPD);

module.exports = router;
