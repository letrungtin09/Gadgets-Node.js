const express = require("express");
const router = express.Router();

const addCateController = require("../../../controllers/adminControllers/category/addCateController");

router.use("/formAddCate", addCateController.showAddCate);
router.use("/addCate", addCateController.addCate);

module.exports = router;
