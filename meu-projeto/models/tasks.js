// models/tasks.js
const pool = require('../config/database');

async function createTask({ title, description, due_date, due_time, section_id }) {
  const query = `
    INSERT INTO tasks (title, description, due_date, due_time, section_id)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING id, title, description, due_date, due_time, is_completed, section_id, created_at, completed_at;
  `;
  const values = [title, description, due_date, due_time, section_id];
  const result = await pool.query(query, values);
  return result.rows[0];
}

async function getAllTasksByUser(user_id) {
  // traz todas as tarefas de um usuário, relacionando seção
  const query = `
    SELECT t.id, t.title, t.description, t.due_date, t.due_time,
           t.is_completed, t.section_id, t.created_at, t.completed_at,
           s.name AS section_name
    FROM tasks t
    LEFT JOIN sections s ON t.section_id = s.id
    LEFT JOIN users u ON s.user_id = u.id
    WHERE u.id = $1
    ORDER BY t.created_at DESC
  `;
  const result = await pool.query(query, [user_id]);
  return result.rows;
}

async function getCompletedTasksByUser(user_id) {
  const query = `
    SELECT t.id, t.title, t.description, t.due_date, t.due_time,
           t.is_completed, t.section_id, t.created_at, t.completed_at,
           s.name AS section_name
    FROM tasks t
    LEFT JOIN sections s ON t.section_id = s.id
    LEFT JOIN users u ON s.user_id = u.id
    WHERE u.id = $1 AND t.is_completed = true
    ORDER BY t.completed_at DESC
  `;
  const result = await pool.query(query, [user_id]);
  return result.rows;
}

async function getTaskById(id) {
  const query = `SELECT * FROM tasks WHERE id = $1`;
  const result = await pool.query(query, [id]);
  return result.rows[0];
}

async function updateTask({ id, title, description, due_date, due_time, section_id, is_completed }) {
  const query = `
    UPDATE tasks
    SET title = $1,
        description = $2,
        due_date = $3,
        due_time = $4,
        section_id = $5,
        is_completed = $6,
        completed_at = CASE WHEN $6 = true THEN CURRENT_TIMESTAMP ELSE completed_at END
    WHERE id = $7
    RETURNING id, title, description, due_date, due_time, is_completed, section_id, created_at, completed_at;
  `;
  const values = [title, description, due_date, due_time, section_id, is_completed, id];
  const result = await pool.query(query, values);
  return result.rows[0];
}

async function deleteTask(id) {
  const query = `DELETE FROM tasks WHERE id = $1`;
  await pool.query(query, [id]);
  return;
}

module.exports = {
  createTask,
  getAllTasksByUser,
  getCompletedTasksByUser,
  getTaskById,
  updateTask,
  deleteTask
};
