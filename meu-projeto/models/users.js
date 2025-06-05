// models/users.js
const pool = require('../config/database');

async function createUser({ name, email, passwordHash }) {
  const query = `
    INSERT INTO users (name, email, password)
    VALUES ($1, $2, $3)
    RETURNING id, name, email, created_at;
  `;
  const values = [name, email, passwordHash];
  const result = await pool.query(query, values);
  return result.rows[0];
}

async function getUserByEmail(email) {
  const query = `SELECT * FROM users WHERE email = $1`;
  const result = await pool.query(query, [email]);
  return result.rows[0];
}

async function getUserById(id) {
  const query = `SELECT id, name, email FROM users WHERE id = $1`;
  const result = await pool.query(query, [id]);
  return result.rows[0];
}

async function getAllUsers() {
  const query = 'SELECT id, name, email, created_at FROM users';
  const result = await pool.query(query);
  return result.rows;
}

module.exports = {
  createUser,
  getUserByEmail,
  getUserById,
  getAllUsers
};
