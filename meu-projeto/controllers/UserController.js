// controllers/UserController.js
const bcrypt = require('bcryptjs');
const usersModel = require('../models/users');

exports.registerForm = (req, res) => {
  // Se quiser ter uma rota de registro
  res.render('register', { error: null });
};

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // Verificar se já existe
    const existing = await usersModel.getUserByEmail(email);
    if (existing) {
      return res.status(400).render('register', { error: 'Email já cadastrado' });
    }
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);
    const newUser = await usersModel.createUser({ name, email, passwordHash });

    // Fazer login automático
    req.session.userId = newUser.id;
    req.session.userName = newUser.name;
    return res.redirect('/menu');
  } catch (err) {
    console.error(err);
    return res.status(500).render('register', { error: 'Erro interno ao cadastrar' });
  }
};

exports.listUsers = async (req, res) => {
  try {
    const users = await usersModel.getAllUsers();
    return res.json(users);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao listar usuários' });
  }
};
