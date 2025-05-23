
# Web Application Document - Projeto Individual - Módulo 2 - Inteli

## Taskline

#### Paulo Vitor Barros de Almeida

## Sumário

1. [Introdução](#c1)  
2. [Visão Geral da Aplicação Web](#c2)  
3. [Projeto Técnico da Aplicação Web](#c3)  
4. [Desenvolvimento da Aplicação Web](#c4)  
5. [Referências](#c5)  

<br>

## <a name="c1"></a>1. Introdução (Semana 01)

O sistema a ser desenvolvido é uma plataforma de gestão de atividades para pessoas com múltiplas tarefas, focada em organizar, monitorar e motivar os usuários a gerenciar suas tarefas acadêmicas e profissionais. A aplicação permitirá que os usuários criem diferentes seções para suas atividades, segmentando-as de acordo com suas origens e prioridades. Além disso, contará com uma linha do tempo para visualizar as tarefas entregues e acompanhar a produtividade ao longo do tempo.

A plataforma também incluirá uma funcionalidade para adicionar frases inspiradoras, proporcionando uma fonte de motivação para os usuários, ajudando-os a se manterem focados e engajados na conclusão de suas pendências.

A estrutura do sistema seguirá o padrão MVC (Model-View-Controller), organizando de forma clara a lógica de negócios, a interface com o usuário e o gerenciamento dos dados. O sistema terá uma interface simples e intuitiva, permitindo que os usuários naveguem facilmente entre as seções de atividades, visualizem o progresso de suas tarefas e recebam inspiração de maneira rápida e eficiente.

---

## <a name="c2"></a>2. Visão Geral da Aplicação Web

### 2.1. Personas (Semana 01 - opcional)

A criação de uma persona é um recurso que consiste em modelar o público típico de determinada solução, de modo a facilitar o entendimento do público-alvo de um produto ou serviço. Dessa maneira, para a aplicação WEB Taskline, modelou-se uma persona que tipicamente se envolve com inúmeras atividades, sejam elas acadêmicas, estracurriculares, profissionais ou de lazer e, por esse motivo, não consegue controlar adequadamente as suas tarefas. Além disso, delineou-se uma persona que desejasse meios de se motivar constantemente e de acompanhar sua produtividade. Sendo assim, a figura abaixo representa a persona pensada para o projeto.

<div align="center">
<sub>Figura - Persona</sub>
<img src="assets/PERSONA.png" width="100%">
<sup>Fonte: Material produzido pelo autor (2025)</sup>
</div>

### 2.2. User Stories (Semana 01 - opcional)

*Posicione aqui a lista de User Stories levantadas para o projeto. Siga o template de User Stories e utilize a referência USXX para numeração (US01, US02, US03, ...). Indique todas as User Stories mapeadas, mesmo aquelas que não forem implementadas ao longo do projeto. Não se esqueça de explicar o INVEST de 1 User Storie prioritária.*

---

## <a name="c3"></a>3. Projeto da Aplicação Web

### 3.1. Modelagem do banco de dados  (Semana 3)

#### 3.1.1. Modelagem Relacional

<div align="center">
<sub>Figura - Modelo Relacional</sub>
<img src="assets/Taskline.png" width="100%">
<sup>Fonte: Material produzido pelo autor (2025)</sup>
</div>

#### 3.1.2. Modelo Físico

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR,
  email VARCHAR,
  password varchar,
  created_at DATE
);

CREATE TABLE sections (
  id SERIAL PRIMARY KEY,
  name VARCHAR,
  user_id int,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  title VARCHAR,
  description VARCHAR,
  due_date DATE,
  due_time TIME,
  is_completed BOOLEAN,
  section_id INT,
  created_at DATE,
  completed_at DATE,
  FOREIGN KEY (section_id) REFERENCES sections(id)
);

CREATE TABLE inspiration_quotes (
  id SERIAL PRIMARY KEY,
  content TEXT,
  user_id INT,
  created_at DATE
);

ALTER TABLE inspiration_quotes
ADD FOREIGN KEY (user_id) REFERENCES users(id)
```

### 3.1.1 BD e Models (Semana 5)
*Descreva aqui os Models implementados no sistema web*

### 3.2. Arquitetura (Semana 5)

*Posicione aqui o diagrama de arquitetura da sua solução de aplicação web. Atualize sempre que necessário.*

**Instruções para criação do diagrama de arquitetura**  
- **Model**: A camada que lida com a lógica de negócios e interage com o banco de dados.
- **View**: A camada responsável pela interface de usuário.
- **Controller**: A camada que recebe as requisições, processa as ações e atualiza o modelo e a visualização.
  
*Adicione as setas e explicações sobre como os dados fluem entre o Model, Controller e View.*

### 3.3. Wireframes (Semana 03 - opcional)

*Posicione aqui as imagens do wireframe construído para sua solução e, opcionalmente, o link para acesso (mantenha o link sempre público para visualização).*

### 3.4. Guia de estilos (Semana 05 - opcional)

*Descreva aqui orientações gerais para o leitor sobre como utilizar os componentes do guia de estilos de sua solução.*


### 3.5. Protótipo de alta fidelidade (Semana 05 - opcional)

*Posicione aqui algumas imagens demonstrativas de seu protótipo de alta fidelidade e o link para acesso ao protótipo completo (mantenha o link sempre público para visualização).*

### 3.6. WebAPI e endpoints (Semana 05)

*Utilize um link para outra página de documentação contendo a descrição completa de cada endpoint. Ou descreva aqui cada endpoint criado para seu sistema.*  

### 3.7 Interface e Navegação (Semana 07)

*Descreva e ilustre aqui o desenvolvimento do frontend do sistema web, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar.*

---

## <a name="c4"></a>4. Desenvolvimento da Aplicação Web (Semana 8)

### 4.1 Demonstração do Sistema Web (Semana 8)

*VIDEO: Insira o link do vídeo demonstrativo nesta seção*
*Descreva e ilustre aqui o desenvolvimento do sistema web completo, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar.*

### 4.2 Conclusões e Trabalhos Futuros (Semana 8)

*Indique pontos fortes e pontos a melhorar de maneira geral.*
*Relacione também quaisquer outras ideias que você tenha para melhorias futuras.*



## <a name="c5"></a>5. Referências

_Incluir as principais referências de seu projeto, para que o leitor possa consultar caso ele se interessar em aprofundar._<br>

---
---
