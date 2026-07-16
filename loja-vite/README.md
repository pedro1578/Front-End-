# Loja Virtual

Sistema de e-commerce desenvolvida em React com Vite, consumindo uma API REST simulada pelo JSON Server. Sistema criado para portifolio da vaga de emprego.

## Tecnologias

- React 19
- Vite
- Tailwind CSS 4
- Axios
- React Router DOM
- JSON Server

## Funcionalidades

- Listagem de produtos consumindo API REST
- Visualização individual de cada produto
- Carrinho de compras funcional
  - Adicionar e remover itens
  - Alterar quantidade
  - Resumo do pedido com total
- Filtro por categoria
- Busca por nome
- Design dark mode responsivo

## Como rodar o projeto

### Pré-requisitos

- Node.js 18+
- npm

### Instalação

```bash
# Clone o repositório
git clone https://github.com/pedro1578/Front-End-.git

# Entre na pasta do projeto
cd loja-vite

# Instale as dependências
npm install
```

### Rodando o projeto

Você precisa de dois terminais abertos:

**Terminal 1 — API:**
```bash
npx json-server public/dbTeste.json --port 3001
```

**Terminal 2 — Aplicação:**
```bash
npm run dev
```

Acesse em `http://localhost:5173`

## Estrutura do projeto

```
src/
  components/
    Header.jsx
    ProductCard.jsx
  context/
    CartContext.jsx
  pages/
    Home.jsx
    ProductDetail.jsx
    CartPage.jsx
  services/
    api.js
  App.jsx
  main.jsx
public/
  dbTeste.json
```

*-*-*-*-*-*-*-*-*-*-*-*-*

Espero que gostem, e espero que esteja dentro de todos os requisitos pedidos.