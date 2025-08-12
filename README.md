# Pokémon Explorer

Aplicação React+Vite para listar e detalhar Pokémons utilizando a [PokéAPI](https://pokeapi.co/).

Inclui alternância entre tema claro e escuro com Context API e styled-components. Responsivo com grid e media queries.

## Tecnologias utilizadas


- React.js
- React Router Dom
- Styled-components
- Context API (Theme toggler)
- Fetch API
- PokéAPI

## Funcionalidades

- Listagem inicial de 10 Pokémons com nome e imagem 
- Botã "Carregar mais" para adicionar mais Pokémons à lista
- Página de detalhes com:
  - Imagem do Pokémon
  - Nome
  - Tipos
  - Movimentos (limitado a 10)
  - Habilidades com descrição
- Alternância de tema claro/escuro 
- Layout responsivo com grid de media queries

## Como rodar o projeto

1. Clone este repositório  
   `git clone https://github.com/seuusuario/pokemon-explorer.git`

2. Instale as dependências  
   `npm install` ou `yarn install`

3. Inicie a aplicação  
   `npm start` ou `yarn start`

## Estrutura do projeto

src/

└── components/
├── context/
│ ├── MainToggleTheme.jsx
│ └── ToggleTheme.jsx

└── home/
├── Index.jsx
├── HomeStyles.jsx
├── PokemonDetail.jsx
└── PokemonDetailStyles.jsx

## Melhorias futuras

- Adicionar paginação com scroll infinito
- Melhorar animações e transições entre temas
- Implementar testes unitários e de integração
- Otimizar chamadas API para reduzir requisições
- Adicionar suporte a múltiplos idiomas

## Autor

Brenno Henrique Do Nascimento - [LinkedIn](http://www.linkedin.com/in/brenno-henrique-nascimento) | [GitHub](https://github.com/bhn-1302)