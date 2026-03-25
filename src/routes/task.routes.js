const express = require("express");
const router = express.Router();
const taskController = require("../controllers/task.controller");
const { validateCreateTask, validateUpdateTask } = require("../middlewares/validate.middleware");

router.post("/", validateCreateTask, taskController.createTask);
router.get("/", taskController.getAllTasks);
router.get("/:id", taskController.getTaskById);
router.put("/:id", validateUpdateTask, taskController.updateTask);
router.delete("/:id", taskController.deleteTask);

module.exports = router;
