// controllers/TaskController.js
const tasksModel = require('../models/tasks');

exports.listTasks = async (req, res) => {
  const userId = req.session.userId;
  try {
    const tasks = await tasksModel.getAllTasksByUser(userId);
    return res.json(tasks);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao listar tarefas' });
  }
};

exports.listCompleted = async (req, res) => {
  const userId = req.session.userId;
  try {
    const tasks = await tasksModel.getCompletedTasksByUser(userId);
    return res.json(tasks);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao listar tarefas concluídas' });
  }
};

exports.createTask = async (req, res) => {
  const { title, description, due_date, due_time, section_id } = req.body;
  try {
    const task = await tasksModel.createTask({ title, description, due_date, due_time, section_id });
    return res.status(201).json(task);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao criar tarefa' });
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
      is_completed: is_completed === true || is_completed === 'true'
    });
    return res.json(updated);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao atualizar tarefa' });
  }
};

exports.deleteTask = async (req, res) => {
  const taskId = parseInt(req.params.id, 10);
  try {
    await tasksModel.deleteTask(taskId);
    return res.status(204).send();
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao deletar tarefa' });
  }
};
