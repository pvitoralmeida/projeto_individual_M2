const tasks = require('../models/quotes');

exports.criarQuote = async (req, res) => {
  const { content, user_id } = req.body;

  try {
    const quotes = await tasks.createQuote({ content, user_id });
    res.status(201).json(quotes);
  } catch (err) {
    console.error('Erro ao criar quotes:', err);
    res.status(500).json({ error: 'Erro interno ao criar quote' });
  }
};

exports.listarQuotes = async (req, res) => {
  try {
    const result = await tasks.getAllQuotes();
    res.status(200).json(result);
  } catch (err) {
    console.error('Erro ao listar quotes:', err);
    res.status(500).json({ error: 'Erro interno ao listar quotes' });
  }
};
