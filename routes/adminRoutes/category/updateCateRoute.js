const express = require("express");
const router = express.Router();

const updateCateController = require("../../../controllers/adminControllers/category/updateCateController");

router.use("/formUpdateCate/:idCategory", updateCateController.showUpdateCate);
router.use("/updateCate", updateCateController.updateCate);

module.exports = router;
