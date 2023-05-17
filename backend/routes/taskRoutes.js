const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

// Get all tasks route
router.get("/", taskController.getAllTasks);

// Get a specific task route
router.get("/:id", taskController.getTaskById);

// Create a new task route
router.post("/", taskController.createTask);

// Update a task route
router.put("/:id", taskController.updateTask);

// Delete a task route
router.delete("/:id", taskController.deleteTask);

module.exports = router;
