const express = require("express");
const router = express.Router();

const catePDController = require("../../controllers/siteControllers/catePDController");

router.use("/:idCategory", catePDController.catePD);

module.exports = router;
