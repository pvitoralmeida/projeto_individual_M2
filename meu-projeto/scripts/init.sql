-- Tabela de usuários
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) UNIQUE NOT NULL,
  password VARCHAR(200) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de seções
CREATE TABLE IF NOT EXISTS sections (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de tarefas
CREATE TABLE IF NOT EXISTS tasks (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  description TEXT,
  due_date DATE,
  due_time TIME,
  is_completed BOOLEAN DEFAULT FALSE,
  section_id INT REFERENCES sections(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  completed_at TIMESTAMPTZ
);

-- Tabela de frases inspiradoras
CREATE TABLE IF NOT EXISTS inspiration_quotes (
  id SERIAL PRIMARY KEY,
  content TEXT NOT NULL,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- 1. Criar usuário
INSERT INTO users (name, email, password)
VALUES ('João Silva', 'joao@example.com', 'senha_hash_aqui');

-- 2. Criar seção vinculada ao usuário criado (supondo que o id do usuário seja 1)
INSERT INTO sections (name, user_id)
VALUES ('Minha Seção de Teste', 1);

-- 3. Criar task vinculada à seção criada (supondo que o id da seção seja 1)
INSERT INTO tasks (title, description, due_date, due_time, section_id)
VALUES ('Teste de tarefa', 'Descrição de teste', '2025-05-25', '12:00:00', 1);
