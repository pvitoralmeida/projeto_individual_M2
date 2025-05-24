const pool = require('../config/database');

async function createTask({ title, description, due_timestamp, section_id }) {
  const query = `
    INSERT INTO tasks (title, description, due_timestamp, section_id)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `;
  const values = [title, description, due_timestamp, section_id];
  const result = await pool.query(query, values);
  return result.rows[0];
}

async function getAllTasks() {
  const query = 'SELECT * FROM tasks';
  const result = await pool.query(query);
  return result.rows;
}

module.exports = {
  createTask,
  getAllTasks,
};
