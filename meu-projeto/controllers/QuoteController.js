// controllers/QuoteController.js
const quotesModel = require('../models/quotes');

exports.listQuotes = async (req, res) => {
  const userId = req.session.userId;
  try {
    const quotes = await quotesModel.getAllQuotesByUser(userId);
    return res.json(quotes);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao listar quotes' });
  }
};

exports.createQuote = async (req, res) => {
  const { content } = req.body;
  const userId = req.session.userId;
  try {
    const quote = await quotesModel.createQuote({ content, user_id: userId });
    return res.status(201).json(quote);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao criar quote' });
  }
};

exports.updateQuote = async (req, res) => {
  const quoteId = parseInt(req.params.id, 10);
  const { content } = req.body;
  try {
    const updated = await quotesModel.updateQuote({ id: quoteId, content });
    return res.json(updated);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao atualizar quote' });
  }
};

exports.deleteQuote = async (req, res) => {
  const quoteId = parseInt(req.params.id, 10);
  try {
    await quotesModel.deleteQuote(quoteId);
    return res.status(204).send();
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao deletar quote' });
  }
};
