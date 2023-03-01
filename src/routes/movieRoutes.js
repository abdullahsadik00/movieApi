
const express = require("express");
const controller = require("../controllers/movieController");

const router = express.Router();

// router.post("",controller.post)
router.get("",controller.get)
router.get("/:id",controller.getById)
module.exports.router = router;