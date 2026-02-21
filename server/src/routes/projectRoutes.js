const express = require("express")
const router = express.Router()
const auth = require("../middleware/authMiddleware")
const {
  createProject,
  getProjects,
  addTask,
  deleteTask,
  markTaskDone,
  getTasks,
  deleteProject,
} = require("../controllers/projectController")

router.post("/projects", auth, createProject)
router.get("/projects", auth, getProjects)
router.get("/projects/:projectId/tasks", auth, getTasks);
router.post("/projects/:projectId/tasks", auth, addTask)
router.delete("/tasks/:taskId", auth, deleteTask)
router.put("/tasks/:taskId", auth, markTaskDone)
router.delete("/projects/:projectId", auth, deleteProject);
module.exports = router
