const express = require("express");
const router = express.Router();

// Rota principal
router.get("/", (req, res) => {
  res.send("Rota principal funcionando!");
});

module.exports = router;
