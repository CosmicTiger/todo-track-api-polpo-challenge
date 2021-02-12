const express = require('express');

const todosController = require('../controllers/todo');

const router = express.Router();

// GET /tasks/todos/
router.get('/todos', todosController.getTodos);

module.exports = router;
