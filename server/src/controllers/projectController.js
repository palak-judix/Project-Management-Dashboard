const Project = require("../models/Project")
const Task = require("../models/Task")

/* CREATE PROJECT */
exports.createProject = async (req, res) => {
  try {
    const project = await Project.create({
      name: req.body.name,
      user: req.user.id,
    })

    res.status(201).json(project)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

/* GET ALL PROJECTS */
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find({ user: req.user.id })
    res.json(projects)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

/* ADD TASK */
exports.addTask = async (req, res) => {
  try {
    const task = await Task.create({
      title: req.body.title,
      project: req.params.projectId,
    })

    res.status(201).json(task)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

/* DELETE TASK */
exports.deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.taskId)
    res.json({ message: "Task deleted" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

/* MARK TASK AS DONE */
exports.markTaskDone = async (req, res) => {
  try {
    const task = await Task.findById(req.params.taskId)
    task.completed = true
    await task.save()

    res.json(task)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
