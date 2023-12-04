const express = require("express");
const router = express.Router();

const adminPDController = require("../../../controllers/adminControllers/product/adminPDController");

router.use("/", adminPDController.adminPD);

module.exports = router;
