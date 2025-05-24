// routes/index.js
const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/TaskController');

// Rotas para o CRUD de tarefas
router.post('/tasks', TaskController.criarTask);
router.get('/tasks', TaskController.listarTasks);

module.exports = router;
