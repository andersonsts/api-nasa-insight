<h1 align="center">
    <img alt="API Nasa React" src="https://res.cloudinary.com/andersonsts/image/upload/v1584552735/marte_zax9q1.png" />
    <br />
    API - Serviço meteorológico de Marte - NodeJS
</h1>

<h4 align="center">
  :partly_sunny: Dados meteorológicos de Marte, utilizando a API da NASA
</h4>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/andersonsts/api-nasa-insight">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/andersonsts/api-nasa-insight">

  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/andersonsts/api-nasa-insight">

  <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/andersonsts/api-nasa-insight">

  <img alt="Repository issues" src="https://img.shields.io/github/issues/andersonsts/api-nasa-insight">
</p>

<p align="center">
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#key-requisitos">Requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-funcionalidades">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-executar">Executar</a>
</p>

## :rocket: Tecnologias

Este projeto utiliza as seguintes tecnologias:

-  [NodeJS](https://nodejs.org/en/)
-  [ExpressJS](https://expressjs.com/)
-  [Nodemon](https://nodemon.io/)
-  [Axios](https://github.com/axios/axios)
-  [Sucrase](https://github.com/alangpierce/sucrase)
-  [Cors](https://github.com/expressjs/cors)
-  [Dotenv](https://www.npmjs.com/package/dotenv)
-  [Date-fns](https://date-fns.org/)
-  [VS Code][vc] com [EditorConfig][vceditconfig], [ESLint][vceslint] e [Prettier](https://github.com/prettier/prettier-eslint)

## :key: Requisitos
Antes de executar a aplicação, é necessário solicitar uma chave de acesso em [NASA API's](https://api.nasa.gov/). Essa chave deve ser inserida na variável de ambiente ```bash API_KEY ``` no repositório, para que sua máquina possa realizar uma quantidade maior de requisições.

## :computer: Funcionalidades
Essa API possui as seguintes funcionalidades:

- Obter os valores de temperatura dos últimos 7 dias marcianos, além da média dessas temperaturas
- Obter os valores de temperatura, velocidade do vento e umidade do dia marciano mais recente (dados disponibilizados pela NASA API)



