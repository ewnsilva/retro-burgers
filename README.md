# 🍔 Retro-Burguer

Aplicação **full stack** desenvolvida com foco em **React**, criada para compor meu portfólio profissional. O projeto simula uma loja virtual de lanches e bebidas, com forte ênfase em **arquitetura frontend**, **boas práticas**, **UX**, **internacionalização** e **testes automatizados**.

O visual é inspirado no estilo **Synthwave / Miami Vice (anos 80)**, com múltiplos temas, trilhas sonoras dinâmicas e animações suaves.

---

## 🎯 Objetivo do Projeto

Este projeto foi construído com os seguintes objetivos:

- Demonstrar domínio de **React moderno** (hooks, composição, tipagem)
- Aplicar **arquitetura escalável** frontend + backend
- Implementar **fluxos reais de e-commerce**
- Exibir boas práticas de **UX/UI**, **internacionalização** e **testes unitários**

---

## ✨ Funcionalidades

### 🛍️ Loja Virtual

- Navegação por **categorias dinâmicas** (via API)
- Listagem de produtos com animações
- Detalhes do produto e personalização com adicionais
- Carrinho de compras persistente
- Modal de resumo do pedido
- Confirmação de pedido com feedback visual

### 🌐 Internacionalização

- Português 🇧🇷 e Inglês 🇺🇸
- Troca dinâmica de idioma
- Backend já preparado para múltiplos idiomas

### 🎨 Temas e Experiência

- **3 temas visuais** no estilo Synthwave
- Trilha sonora exclusiva para cada tema
- Animações de carregamento (Skeletons)
- Fallback visual para imagens com erro

### 🧪 Qualidade e Testes

- Testes unitários com **Vitest**
- Testes de componentes e hooks
- ESLint + Prettier
- Código fortemente tipado com **TypeScript**

---

## 🖥️ Tecnologias Utilizadas

### Frontend

- **React 19**
- **TypeScript**
- **Material UI (MUI)**
- **Styled Components**
- **React Router DOM v7**
- **i18next / react-i18next**
- **Axios**
- **Howler** (áudio por tema)
- **Vitest** + Testing Library
- **Webpack 5**

### Backend

- **Node.js**
- **Express**
- **TypeScript**
- **Sequelize ORM**
- **SQLite**
- **REST API**

---

## 🗂️ Arquitetura

### Frontend

- Separação clara entre:
  - Componentes de UI
  - Hooks de lógica (`useHomeLogic`, `useProducts`, etc.)
  - Hooks de domínio (cart, language, theme)
- Navegação e categorias **100% dinâmicas** via API
- Estados locais isolados e previsíveis

### Backend

- API REST simples e objetiva
- Endpoints separados por domínio
- Banco SQLite versionado via migrations

---

## 🔌 Endpoints Principais

```http
GET /categories
GET /products/:categoryId
```

As respostas já suportam múltiplos idiomas:

```json
{
  "title": { "pt": "Hambúrguer", "en": "Burger" }
}
```

---

## ▶️ Como rodar o projeto

### Pré-requisitos

- Node.js >= 18
- Yarn ou NPM

---

### 🔧 Backend

```bash
cd backend
yarn install
yarn db:setup
yarn dev
```

Servidor disponível em:

```
http://localhost:3001
```

---

### 🎨 Frontend

```bash
cd frontend
yarn install
yarn dev
```

Aplicação disponível em:

```
http://localhost:3000
```

---

## 🧪 Testes

Frontend:

```bash
yarn test
yarn test:run
```

---

## 📌 Destaques Técnicos

- Hooks reutilizáveis e bem tipados
- Nenhum dado hardcoded (categorias e produtos via API)
- UX otimizada para loading e erros
- Código preparado para escalar (React Query ready)
- Separação clara de responsabilidades

---

⭐ Se este projeto foi útil ou interessante, fique à vontade para deixar uma estrela!
