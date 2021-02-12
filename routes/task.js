const express = require('express');
const { body } = require('express-validator');

const tasksController = require('../controllers/task');

const router = express.Router();

// GET /app/tasks/
router.get('/tasks', tasksController.getTasks);

// POST /app/post/
router.post('/post', [
    body('title').trim().isLength({ min: 5 }),
    body('inbox').exists(),
    body('user').exists()
], tasksController.createTasks);

module.exports = router;
