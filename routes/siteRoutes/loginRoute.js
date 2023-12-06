const express = require("express");
const router = express.Router();

const loginController = require("../../controllers/siteControllers/loginController");

router.use("/login", loginController.login);
router.use("/loginUser", loginController.loginUser);

module.exports = router;
