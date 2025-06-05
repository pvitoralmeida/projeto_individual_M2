// models/sections.js
const pool = require('../config/database');

async function createSection({ name, user_id }) {
  const query = `
    INSERT INTO sections (name, user_id)
    VALUES ($1, $2)
    RETURNING id, name, user_id, created_at;
  `;
  const result = await pool.query(query, [name, user_id]);
  return result.rows[0];
}

async function getAllSectionsByUser(user_id) {
  const query = `
    SELECT id, name, user_id, created_at
    FROM sections
    WHERE user_id = $1
    ORDER BY created_at DESC
  `;
  const result = await pool.query(query, [user_id]);
  return result.rows;
}

async function getSectionById(id) {
  const query = `SELECT * FROM sections WHERE id = $1`;
  const result = await pool.query(query, [id]);
  return result.rows[0];
}

async function updateSection({ id, name }) {
  const query = `
    UPDATE sections
    SET name = $1
    WHERE id = $2
    RETURNING id, name, user_id, created_at
  `;
  const result = await pool.query(query, [name, id]);
  return result.rows[0];
}

async function deleteSection(id) {
  const query = `DELETE FROM sections WHERE id = $1`;
  await pool.query(query, [id]);
  return;
}

module.exports = {
  createSection,
  getAllSectionsByUser,
  getSectionById,
  updateSection,
  deleteSection
};
