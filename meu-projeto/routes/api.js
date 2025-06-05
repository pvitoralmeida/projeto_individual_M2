// routes/api.js
const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');
const { ensureAuth } = require('../controllers/AuthController');

const SectionController = require('../controllers/SectionController');
const TaskController = require('../controllers/TaskController');
const QuoteController = require('../controllers/QuoteController');
const UserController = require('../controllers/UserController');

// Observação: todas rotas aqui já pressupõem usuário logado
router.use(ensureAuth);

// --- Seções ---
router.get('/sections', SectionController.listSections);
router.post('/sections', SectionController.createSection);
router.put('/sections/:id', SectionController.updateSection);
router.delete('/sections/:id', SectionController.deleteSection);

// --- Tarefas ---
router.get('/tasks', TaskController.listTasks);
router.get('/tasks/completed', TaskController.listCompleted);
router.post('/tasks', TaskController.createTask);
router.put('/tasks/:id', TaskController.updateTask);
router.delete('/tasks/:id', TaskController.deleteTask);

// --- Quotes ---
router.get('/quotes', QuoteController.listQuotes);
router.post('/quotes', QuoteController.createQuote);
router.put('/quotes/:id', QuoteController.updateQuote);
router.delete('/quotes/:id', QuoteController.deleteQuote);

// --- Usuários (opcional, para admin ou debug) ---
router.get('/users', UserController.listUsers);

module.exports = router;
