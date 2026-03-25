const validateCreateTask = (req, res, next) => {
  const { title } = req.body;

  if (!title || typeof title !== "string" || title.trim() === "") {
    return res.status(400).json({
      success: false,
      error: "Title is required and must be a non-empty string",
    });
  }

  req.body.title = title.trim();
  next();
};

const validateUpdateTask = (req, res, next) => {
  const { title, completed } = req.body;

  if (title !== undefined && (typeof title !== "string" || title.trim() === "")) {
    return res.status(400).json({
      success: false,
      error: "Title must be a non-empty string",
    });
  }

  if (completed !== undefined && typeof completed !== "boolean") {
    return res.status(400).json({
      success: false,
      error: "Completed must be a boolean",
    });
  }

  next();
};

module.exports = { validateCreateTask, validateUpdateTask };
