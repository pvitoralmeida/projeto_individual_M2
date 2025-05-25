const users = require('../models/users');

exports.criarUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await users.createUser({ name, email, password });
    res.status(201).json(user);
  } catch (err) {
    console.error('Erro ao criar user:', err);
    res.status(500).json({ error: 'Erro interno ao criar user' });
  }
};

exports.listarUsers = async (req, res) => {
  try {
    const result = await users.getAllUsers();
    res.status(200).json(result);
  } catch (err) {
    console.error('Erro ao listar users:', err);
    res.status(500).json({ error: 'Erro interno ao listar usuários' });
  }
};
