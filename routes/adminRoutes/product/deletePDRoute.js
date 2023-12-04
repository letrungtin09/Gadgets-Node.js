const express = require("express");
const router = express.Router();

const deletePDController = require("../../../controllers/adminControllers/product/deletePDController");

router.use("/:idProduct", deletePDController.deletePD);

module.exports = router;
