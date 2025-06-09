// controllers/SectionController.js
const sectionsModel = require("../models/sections");

exports.listSections = async (req, res) => {
  const userId = req.session.user.id;
  const userName = req.session.user.name;

  try {
    const sections = await sectionsModel.getAllSectionsByUser(userId);
    console.log("User ID na sessão:", userId);
    console.log(sections)
    res.render("sections", { sections, userName });
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao buscar seções");
  }
};

exports.createSection = async (req, res) => {
  const { name } = req.body;
  const userId = req.session.user.id; 
  try {
    const section = await sectionsModel.createSection({ name, user_id: userId });
    return res.status(201).json(section);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Erro ao criar seção" });
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
    return res.status(500).json({ error: "Erro ao atualizar seção" });
  }
};

exports.deleteSection = async (req, res) => {
  const sectionId = parseInt(req.params.id, 10);
  try {
    await sectionsModel.deleteSection(sectionId);
    return res.status(204).send();
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Erro ao deletar seção" });
  }
};
