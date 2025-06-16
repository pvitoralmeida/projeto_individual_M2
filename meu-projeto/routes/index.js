// routes
const express = require("express");
const router = express.Router();
const { ensureAuth } = require("../controllers/AuthController");

const AuthController = require("../controllers/AuthController");
const SectionController = require("../controllers/SectionController");
const TaskController = require("../controllers/TaskController");
const SectionsModel = require("../models/sections");

// Login
router.get("/login", AuthController.showLogin);
router.post("/login", AuthController.login);
router.get("/logout", AuthController.logout);

// Observação: todas rotas aqui já pressupõem usuário logado
router.use(ensureAuth);

// Menu (dashboard) — protegido
router.get("/menu", ensureAuth, (req, res) => {
  res.render("menu", { userName: req.session.user.name });
});

router.get('/tasks', TaskController.showTasksPage);

// Formulário para criar tarefa
router.get("/tasks/create", async (req, res) => {
  try {
    const userId = req.session.user.id;
    const userName = req.session.user.name;
    const sections = await SectionsModel.getAllSectionsByUser(userId);

    res.render("create-task", {
      userName,
      sections,
      error: null,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao carregar formulário de criação de tarefa.");
  }
});

// --- Seções ---
router.get("/sections", SectionController.listSections);
router.post("/sections", SectionController.createSection);
router.put("/sections/:id", SectionController.updateSection);
router.delete("/sections/:id", SectionController.deleteSection);

// --- Tarefas ---
router.get("/tasks", TaskController.listTasks);
router.get("/tasks/completed", TaskController.listCompleted);
router.post("/tasks", TaskController.createTask);
router.put("/tasks/:id", TaskController.updateTask);
router.delete("/tasks/:id", TaskController.deleteTask);

// --- Timeline ---
router.get('/timeline', TaskController.timelineView);

module.exports = router;
