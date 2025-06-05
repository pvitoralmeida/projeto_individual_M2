// models/quotes.js
const pool = require('../config/database');

async function createQuote({ content, user_id }) {
  const query = `
    INSERT INTO inspiration_quotes (content, user_id)
    VALUES ($1, $2)
    RETURNING id, content, user_id, created_at;
  `;
  const result = await pool.query(query, [content, user_id]);
  return result.rows[0];
}

async function getAllQuotesByUser(user_id) {
  const query = `
    SELECT id, content, user_id, created_at 
    FROM inspiration_quotes
    WHERE user_id = $1
    ORDER BY created_at DESC
  `;
  const result = await pool.query(query, [user_id]);
  return result.rows;
}

async function updateQuote({ id, content }) {
  const query = `
    UPDATE inspiration_quotes
    SET content = $1
    WHERE id = $2
    RETURNING id, content, user_id, created_at;
  `;
  const result = await pool.query(query, [content, id]);
  return result.rows[0];
}

async function deleteQuote(id) {
  const query = `DELETE FROM inspiration_quotes WHERE id = $1`;
  await pool.query(query, [id]);
  return;
}

module.exports = {
  createQuote,
  getAllQuotesByUser,
  updateQuote,
  deleteQuote
};
