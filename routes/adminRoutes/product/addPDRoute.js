const express = require("express");
const router = express.Router();
const upload = require("../../../config/multer");

const addPDController = require("../../../controllers/adminControllers/product/addPDController");

router.use("/formAddPD", addPDController.showAddPD);
router.use("/addNewPD", upload.single("imgPD"), addPDController.addPD);

module.exports = router;
