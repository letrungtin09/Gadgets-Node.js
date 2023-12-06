const express = require("express");
const router = express.Router();

const deleteCateController = require("../../../controllers/adminControllers/category/deleteCateController");

router.use("/:idCategory", deleteCateController.deleteCate);

module.exports = router;
