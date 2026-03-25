const express = require("express");
const taskRoutes = require("./routes/task.routes");
const { errorHandler, notFound } = require("./middlewares/error.middleware");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/tasks", taskRoutes);

// Error handling
app.use(notFound);
app.use(errorHandler);

module.exports = app;
