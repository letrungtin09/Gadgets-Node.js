const express = require("express");
const router = express.Router();

const adminCateController = require("../../../controllers/adminControllers/category/adminCateController");

router.use("/", adminCateController.adminCate);

module.exports = router;
