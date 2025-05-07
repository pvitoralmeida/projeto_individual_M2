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
│   └── HomeController.js
├── models/                # Definição de modelos de dados (estrutura do banco)
│   └── User.js
├── routes/                # Definição das rotas do sistema
│   └── index.js
├── services/              # Serviços auxiliares do sistema
│   └── userService.js
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

4. Acesse a aplicação no navegador:
```
http://localhost:3000
```

> 💡 Obs: ainda não há conexão com banco de dados nesta etapa. O foco está na estrutura do projeto e funcionamento básico do servidor.

---
