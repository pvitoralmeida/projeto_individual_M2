// controllers/TaskController.js
const tasksModel = require("../models/tasks");

const SectionModel = require("../models/sections");

exports.listTasks = async (req, res) => {
  const userId = req.session.user.id;
  try {
    const tasks = await tasksModel.getAllTasksByUser(userId);
    return res.json(tasks);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Erro ao listar tarefas" });
  }
};

exports.listCompleted = async (req, res) => {
  const userId = req.session.user.id;
  try {
    const tasks = await tasksModel.getCompletedTasksByUser(userId);
    return res.json(tasks);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Erro ao listar tarefas concluídas" });
  }
};

exports.createTask = async (req, res) => {
  const { title, description, due_date, due_time, section_id } = req.body;
  try {
    const task = await tasksModel.createTask({ title, description, due_date, due_time, section_id });
    return res.redirect('/tasks');
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Erro ao criar tarefa" });
  }
};

exports.updateTask = async (req, res) => {
  const taskId = parseInt(req.params.id, 10);
  const { title, description, due_date, due_time, section_id, is_completed } = req.body;
  try {
    const updated = await tasksModel.updateTask({
      id: taskId,
      title,
      description,
      due_date,
      due_time,
      section_id,
      is_completed: is_completed === true || is_completed === "true",
    });
    return res.json(updated);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Erro ao atualizar tarefa" });
  }
};

exports.deleteTask = async (req, res) => {
  const taskId = parseInt(req.params.id, 10);
  try {
    await tasksModel.deleteTask(taskId);
    return res.status(204).send();
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Erro ao deletar tarefa" });
  }
};

exports.showCreateTaskForm = async (req, res) => {
  const userId = req.session.user.id;
  const userName = req.session.user.name;

  // Buscar as seções do usuário (precisa implementar esse método)
  const sections = await SectionModel.getSectionsByUser(userId);

  res.render("create-task", { userName, sections, error: null });
};

exports.showTasksPage = async (req, res) => {
  const userId = req.session.user.id;
  const userName = req.session.user.name;

  try {
    // Busca as seções do usuário
    const sections = await SectionModel.getAllSectionsByUser(userId);

    // Para cada seção, busca as tarefas dessa seção
    for (let section of sections) {
      section.tasks = await tasksModel.getTasksBySection(userId, section.id);
    }

    res.render('tasks', { userName, sections });
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao carregar tarefas');
  }
};

exports.timelineView = async (req, res) => {
  const userId = req.session.user.id;
  const userName = req.session.user.name;
  try {
    const tasks = await tasksModel.getAllTasksByUser(userId);
    res.render('timeline', { userName, tasks });
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao carregar timeline');
  }
};
