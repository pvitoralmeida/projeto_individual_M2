// routes/views.js
const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');
const { ensureAuth } = require('../controllers/AuthController');

// Login
router.get('/login', AuthController.showLogin);
router.post('/login', AuthController.login);

// Logout
router.get('/logout', AuthController.logout);

// Menu (dashboard) — protegido
router.get('/menu', ensureAuth, (req, res) => {
  // Passamos userName para o header
  res.render('menu', { userName: req.session.user.name });
});

// Seções — protegido
router.get('/sections', ensureAuth, (req, res) => {
  res.render('sections', { userName: req.session.user.name });
});

// Linha do Tempo — protegido
router.get('/timeline', ensureAuth, (req, res) => {
  res.render('timeline', { userName: req.session.user.name });
});

// Quotes — protegido
router.get('/quotes', ensureAuth, (req, res) => {
  res.render('quotes', { userName: req.session.user.name });
});

module.exports = router;
