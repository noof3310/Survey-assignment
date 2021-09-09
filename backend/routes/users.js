const express = require('express');
const router = express.Router();
const controller = require("../controllers/controller");

// Create a User
router.post("/", controller.createUser);

// Get all Users
router.get("/", controller.findAllUsers);

// Update a User
router.put("/:id", controller.updateUser);

// Delete all Users
router.delete("/", controller.deleteAllUsers);

module.exports = router;