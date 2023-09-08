const express = require("express");
const router = express.Router();
const homeController = require("../controller/homeController");
router.get("/active", homeController.status);
router.get("/role", homeController.role);
router.get("/:id", homeController.detail);
router.get("/", homeController.index);
module.exports = router;
