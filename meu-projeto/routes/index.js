// routes/index.js
const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/TaskController');
const UserController = require('../controllers/UserController');
const QuoteController = require('../controllers/QuoteController');
const SectionController = require('../controllers/SectionController');

// Rotas para o CRUD de tarefas
router.post('/tasks', TaskController.criarTask);
router.get('/tasks', TaskController.listarTasks);

// Rotas para o CRUD de usuários
router.post('/users', UserController.criarUser);
router.get('/users', UserController.listarUsers);

// Rotas para o CRUD de frases inspiradoras
router.post('/quotes', QuoteController.criarQuote);
router.get('/quotes', QuoteController.listarQuotes);

// Rotas para o CRUD de seções
router.post('/sections', SectionController.criarSection);
router.get('/sections', SectionController.listarSections);

module.exports = router;
