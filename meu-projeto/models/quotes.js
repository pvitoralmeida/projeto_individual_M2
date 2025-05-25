const pool = require('../config/database');

async function createQuote({ content, user_id }) {
  const query = `
    INSERT INTO inspiration_quotes (content, user_id)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `;
  const values = [content, user_id];
  const result = await pool.query(query, values);
  return result.rows[0];
}

async function getAllQuotes() {
  const query = 'SELECT * FROM inspiration_quotes';
  const result = await pool.query(query);
  return result.rows;
}

module.exports = {
  createQuote,
  getAllQuotes,
};
