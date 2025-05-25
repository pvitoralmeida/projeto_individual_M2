const sections = require('../models/sections');

exports.criarSection = async (req, res) => {
  const { name, user_id } = req.body;

  try {
    const section = await sections.createSection({ name, user_id });
    res.status(201).json(section);
  } catch (err) {
    console.error('Erro ao criar seções:', err);
    res.status(500).json({ error: 'Erro interno ao criar seção' });
  }
};

exports.listarSections = async (req, res) => {
  try {
    const result = await sections.getAllSections();
    res.status(200).json(result);
  } catch (err) {
    console.error('Erro ao listar seções:', err);
    res.status(500).json({ error: 'Erro interno ao listar seções' });
  }
};
