// npm init -> inicia  e cria projeto node package.json
// cria um index.js na raiz
// npm i express
// depois de configurado o index.js, cmd: node index.js

// PRIMEIROS PASSOS NO INDEX.JS
const express = require('express');
const app = express();
app.listen(3000, () => console.log('Servidor rodando e disponível na porta 3000'));
app.get('/', (req, res) => res.send('Página inicial'));
app.get('/atendimentos', (req, res) => res.send('Você está na página de atendimentos.'));

// congigurar o package para rodar o script
// "start": "nodemon index.js",
// a partir de então rodar: npm start

// isolar o config
// criar pasta controllers
// criar arquivo conforme a rota
module.exports = (app) => {
  app.get('/atendimentos', (req, res) => res.send('rota de atendimentos via um get'));

  app.post('/atendimentos', (req, res) => {
    console.log(req.body)
    res.send('Você está na rota de atendimentos e realizando um post');
  })
}

// fazendo isso é preciso do consig para agrupar rotas
// npm i consign AGRUPA ROTAS E INCLUI NO APP

// configuração do header de uma requisição
// content-type application/x-www-form-urlencoded para form 
// application/json para json