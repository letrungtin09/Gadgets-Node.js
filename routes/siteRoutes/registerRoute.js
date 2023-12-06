const express = require("express");
const router = express.Router();

const registerController = require("../../controllers/siteControllers/registerController");

router.use("/register", registerController.register);
router.use("/registerUser", registerController.registerUser);

module.exports = router;
