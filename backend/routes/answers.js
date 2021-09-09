const express = require('express');
const router = express.Router();
const controller = require("../controllers/controller");

// Create an Answer
router.post("/", controller.createAnswer);

// Get all Answer
router.get("/", controller.findAllAnswers);

// Update an Answer


// Delete all Answer
router.delete("/", controller.deleteAllAnswers);

module.exports = router