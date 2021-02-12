const express = require('express');
const { body } = require('express-validator');

const tasksController = require('../controllers/task');

const router = express.Router();

// POST /app/create-task/
router.post('/task', [
    body('title').trim().isLength({ min: 5 }),
    body('inbox').exists(),
    body('user').exists()
], tasksController.createTasks);

router.get('/task/:taskId', tasksController.findTask);

router.put('/task/:taskId', [
    body('title').trim().isLength({ min: 5 }),
    body('inbox').exists(),
], tasksController.updateTask);

router.delete('/task/:taskId');

// GET /app/tasks/
router.get('/tasks', tasksController.getTasks);

module.exports = router;
