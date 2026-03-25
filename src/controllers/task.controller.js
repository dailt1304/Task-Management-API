const store = require("../store");

// Create a new task
const createTask = (req, res) => {
  const { title } = req.body;

  const newTask = {
    id: store.getNextId(),
    title,
    completed: false,
    createdAt: new Date().toISOString(),
  };

  store.tasks.push(newTask);
  res.status(201).json({ success: true, data: newTask });
};

// Get all tasks
const getAllTasks = (req, res) => {
  res.json({ success: true, data: store.tasks, total: store.tasks.length });
};

// Get a task by ID
const getTaskById = (req, res) => {
  const task = store.tasks.find((t) => t.id === parseInt(req.params.id));

  if (!task) {
    return res.status(404).json({ success: false, error: "Task not found" });
  }

  res.json({ success: true, data: task });
};

// Update a task
const updateTask = (req, res) => {
  const task = store.tasks.find((t) => t.id === parseInt(req.params.id));

  if (!task) {
    return res.status(404).json({ success: false, error: "Task not found" });
  }

  const { title, completed } = req.body;
  if (title !== undefined) task.title = title;
  if (completed !== undefined) task.completed = completed;
  task.updatedAt = new Date().toISOString();

  res.json({ success: true, data: task });
};

// Delete a task
const deleteTask = (req, res) => {
  const index = store.tasks.findIndex((t) => t.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).json({ success: false, error: "Task not found" });
  }

  store.tasks.splice(index, 1);
  res.json({ success: true, message: "Task deleted successfully" });
};

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
};
