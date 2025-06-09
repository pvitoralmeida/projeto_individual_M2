# Taskline

Uma plataforma de organização de tarefas pensada especialmente para pessoas com múltiplas tarefas que desejam acompanhar suas pendências e produtividade de forma temporal e motivacional.

## ✨ Descrição do Sistema

A proposta da aplicação é auxiliar pessoas que estudam e/ou trabalham a organizar melhor suas responsabilidades, por meio de:

- **Criação de seções distintas de atividades**, segmentando por área de origem (faculdade, estágio, etc.);
- **Linha do tempo de atividades entregues**, permitindo uma visualização da produtividade ao longo do tempo;
- **Espaço para frases inspiradoras**, com o objetivo de aumentar a motivação para cumprir tarefas.

## 🗂️ Estrutura de Pastas

A estrutura do projeto segue o padrão MVC (Model-View-Controller):

```
meu-projeto/
│
├── config/                # Arquivos de configuração (ex: conexão com banco)
│   └── database.js
│
├── controllers/           # Lógica de controle das requisições
│   ├── TaskController.js
│   ├── UserController.js
│   └── SectionController.js
│
├── models/                # Definição de modelos de dados (estrutura do banco)
│   ├── tasks.js
│   ├── users.js
│   └── sections.js
│
├── routes/                # Definição das rotas da aplicação
│   └── index.js
│
├── scripts/               # Scripts para criação ou alteração do banco
│   ├── init.sql
│   └── runSQLScript.js
│
├── services/              # Serviços auxiliares (ex: regras de negócio)
│   └── userService.js
│
├── assets/                # Arquivos públicos como imagens e fontes
├── public/                # Scripts JS e CSS públicos
│   ├── scripts/
│   └── styles/
│
├── tests/                 # Testes unitários com Jest
│   └── example.test.js
├── views/                 # Testes unitários com Jest
│   ├── partials/
│       ├── header.ejs
│       └── footer.ejs
│   ├── create-task.ejs         # Configuração do Jest
│   ├── login.ejs      # Gerenciador de dependências (auto)
│   ├── menu.ejs           # Dependências e scripts do Node.js
│   ├── sections.ejs              # Documentação do projeto
│   ├── tasks.ejs             # Teste manual de endpoints (via VS Code)
│   └── timeline.ejs   
│
├── .gitignore             # Arquivo para ignorar arquivos no Git
├── .env.example           # Exemplo de variáveis de ambiente
├── jest.config.js         # Configuração do Jest
├── package-lock.json      # Gerenciador de dependências (auto)
├── package.json           # Dependências e scripts do Node.js
├── readme.md              # Documentação do projeto
├── rest.http              # Teste manual de endpoints (via VS Code)
└── server.js              # Arquivo principal do servidor
```

## 🚀 Como Executar o Projeto Localmente

1. **Clone o repositório**
```bash
git clone https://github.com/pvitoralmeida/projeto_individual_M2.git
cd seu-repositorio
```

2. **Instale as dependências**
```bash
npm install
```

3. **Inicie o servidor**
```bash
node server.js
```

4. **Acesse a aplicação no navegador:**
```
http://localhost:3000/login
```

## 👾 Como acessar as APIs (tasks, sections, quotes, users)

1. **Crie um arquivo .env na raiz do projeto baseado no modelo .env.example:**
```bash
cp .env.example .env
```
2. **Preencha os valores de acordo com seu banco de dados local;**

3. **Conecte-se ao banco de dados:**
```bash
npm run init-db
```

4. **Inicie o servidor**
```bash
node server.js
```

5. **Acesse a API no navegador**:
```
http://localhost:3000/api_name
```

---
