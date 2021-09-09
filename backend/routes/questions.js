const express = require('express');
const router = express.Router();
const controller = require("../controllers/controller");

// Create a Question
router.post("/", controller.createQuestion);

// Get all Questions
router.get("/", controller.findAllQuestions);

// Update a Question
router.put("/:id", controller.updateQuestion);

// Delete all Questions
router.delete("/", controller.deleteAllQuestions);

module.exports = router