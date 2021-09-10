const express = require('express');
const router = express.Router();
const controller = require("../controllers/controller");

// Create Answer(s)
router.post("/", controller.createAnswers);

// Get all Answers
router.get("/", controller.findAllAnswers);

// Delete an Answer
router.delete("/:uid/:qid/:choice", controller.deleteAnswer);

// Delete all Answer
router.delete("/", controller.deleteAllAnswers);

module.exports = router