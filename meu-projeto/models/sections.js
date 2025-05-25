const pool = require('../config/database');

async function createSection({ name, user_id }) {
  const query = `
    INSERT INTO sections (name, user_id)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `;
  const values = [name, user_id];
  const result = await pool.query(query, values);
  return result.rows[0];
}

async function getAllSections() {
  const query = 'SELECT * FROM sections';
  const result = await pool.query(query);
  return result.rows;
}

module.exports = {
  createSection,
  getAllSections,
};
