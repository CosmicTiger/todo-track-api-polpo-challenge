const express = require('express');
const { body } = require('express-validator');

const tasksController = require('../controllers/task');
const isAuth = require('../middleware/js-auth');

const router = express.Router();

// GET /app/tasks/
router.get('/tasks', isAuth, tasksController.getTasks);

// POST /app/create-task/
router.post('/task', [
    body('title').trim().isLength({ min: 5 }),
    body('inbox').exists(),
    body('user').exists()
], isAuth, tasksController.createTasks);

router.get('/task/:taskId', isAuth, tasksController.findTask);

router.put('/task/:taskId', [
    body('title').trim().isLength({ min: 5 }),
    body('inbox').exists(),
], isAuth, tasksController.updateTask);

router.delete('/task/:taskId', isAuth, taskController.deleteTask);

module.exports = router;
