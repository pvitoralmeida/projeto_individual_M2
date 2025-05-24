const tasks = require('../models/tasks');

exports.criarTask = async (req, res) => {
  const { title, description, due_timestamp, section_id } = req.body;

  try {
    const task = await tasks.createTask({ title, description, due_timestamp, section_id });
    res.status(201).json(task);
  } catch (err) {
    console.error('Erro ao criar task:', err);
    res.status(500).json({ error: 'Erro interno ao criar tarefa' });
  }
};

exports.listarTasks = async (req, res) => {
  try {
    const result = await tasks.getAllTasks();
    res.status(200).json(result);
  } catch (err) {
    console.error('Erro ao listar tasks:', err);
    res.status(500).json({ error: 'Erro interno ao listar tarefas' });
  }
};
