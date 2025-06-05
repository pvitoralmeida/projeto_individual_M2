// server.js
const express = require('express');
const path = require('path');
const session = require('express-session');
const pgSession = require('connect-pg-simple')(session);
const { Pool } = require('pg');
const routesViews = require('./routes/views');
const routesApi = require('./routes/api');

const app = express();
const pool = new Pool({
  // defina suas variáveis de conexão: USER, PASSWORD, HOST, PORT, DATABASE
  connectionString: process.env.DATABASE_URL || "postgres://<usuário>:<senha>@localhost:5432/<database>"
});

// --- Configurar EJS e pasta de views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// --- Middlewares
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// --- Sessão (armazenada no Postgres)
app.use(session({
  secret: 'senha-super-secreta',
  resave: false,
  saveUninitialized: false
}));

// Disponibilizar pool para controllers/models via req.app.get('pool')
app.set('pool', pool);

// --- Rotas
app.use('/', routesViews);  // páginas EJS (login, menu, sections, timeline)
app.use('/api', routesApi); // endpoints JSON para criação/edição/exclusão/listagem

// --- Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
