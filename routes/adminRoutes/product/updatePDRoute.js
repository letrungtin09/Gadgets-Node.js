const express = require("express");
const router = express.Router();
const upload = require("../../../config/multer");

const updatePDController = require("../../../controllers/adminControllers/product/updatePDController");

router.use("/formUpdatePD/:idProduct", updatePDController.showUpdatePD);
router.use("/updatePD", upload.single("imgPD"), updatePDController.updatePD);

module.exports = router;
