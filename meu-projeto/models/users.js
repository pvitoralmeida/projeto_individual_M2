const pool = require('../config/database');

async function createUser({ name, email, password }) {
  const query = `
    INSERT INTO users (name, email, password)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;
  const values = [name, email, password];
  const result = await pool.query(query, values);
  return result.rows[0];
}

async function getAllUsers() {
  const query = 'SELECT * FROM users';
  const result = await pool.query(query);
  return result.rows;
}

module.exports = {
  createUser,
  getAllUsers,
};
