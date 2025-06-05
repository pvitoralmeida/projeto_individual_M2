// controllers/SectionController.js
const sectionsModel = require('../models/sections');
const tasksModel = require('../models/tasks');

exports.listSections = async (req, res) => {
  const userId = req.session.userId;
  try {
    const sections = await sectionsModel.getAllSectionsByUser(userId);
    return res.json(sections);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao buscar seções' });
  }
};

exports.createSection = async (req, res) => {
  const { name } = req.body;
  const userId = req.session.userId;
  try {
    const section = await sectionsModel.createSection({ name, user_id: userId });
    return res.status(201).json(section);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao criar seção' });
  }
};

exports.updateSection = async (req, res) => {
  const sectionId = parseInt(req.params.id, 10);
  const { name } = req.body;
  try {
    const updated = await sectionsModel.updateSection({ id: sectionId, name });
    return res.json(updated);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao atualizar seção' });
  }
};

exports.deleteSection = async (req, res) => {
  const sectionId = parseInt(req.params.id, 10);
  try {
    await sectionsModel.deleteSection(sectionId);
    return res.status(204).send();
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao deletar seção' });
  }
};
