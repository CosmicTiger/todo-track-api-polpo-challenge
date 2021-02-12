const express = require('express');

const tasksController = require('../controllers/task');

const router = express.Router();

// GET /app/tasks/
router.get('/tasks', tasksController.getTasks);

// POST /app/post/
router.post('/post', tasksController.createTasks);

module.exports = router;
