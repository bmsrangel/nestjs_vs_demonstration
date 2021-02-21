<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

# Demonstração - APIs REST com NestJS

Este repositório contém o código de exemplo utilizado na playlist de [API REST - Express vs. NextJS vs. NestJS](https://youtube.com/playlist?list=PLAUv7wjleCugZITBS9EudUpGNTMmH9oZy).

## Rodando o projeto
- Clonar o projeto
- Entrar na pasta do projeto pelo terminal
- Executar o comando npm install
- Executar o comando npm run start:dev

### URL base: http://localhost:3002/api
### Rotas disponíveis:
- GET
  - / -> retorna o texto `Hello World!`
  - /users -> retorna uma lista de usuários
  - /users/:id -> retorna um usuário

- POST
  - /users -> adiciona um usuário e retorna o objeto do mesmo
