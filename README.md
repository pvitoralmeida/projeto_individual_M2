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
├── controllers/           # Lógica de controle das requisições
│   └── TaskController.js
├── models/                # Definição de modelos de dados (estrutura do banco)
│   └── tasks.js
├── routes/                # Definição das rotas do sistema
│   └── index.js
├── scripts/                # riação ou alteração da estrutura do banco de dados
│   └── init.sql
│   └── runSQLScript.js
├── assets/                # Arquivos públicos como imagens e fontes
├── scripts/               # Arquivos de JavaScript públicos
├── styles/                # Arquivos CSS públicos
├── tests/                 # Arquivos de testes unitários
│   └── example.test.js
├── .gitignore             # Arquivo para ignorar arquivos no Git
├── .env.example           # Arquivo de exemplo para variáveis de ambiente
├── jest.config.js         # Arquivo de configuração do Jest
├── package-lock.json      # Gerenciador de dependências do Node.js
├── package.json           # Gerenciador de dependências do Node.js
├── readme.md              # Documentação do projeto (Markdown)
├── server.js              # Arquivo principal que inicializa o servidor
└── rest.http              # Teste de endpoints (opcional)
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
http://localhost:3000
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

5. **Acesso a API no navegador**:
```
http://localhost:3000/api/api_name
```

---
