// consign AGRUPA ROTAS E AS INCLUI NO APP
// body-parser para tratar o body de requisições
const express = require('express');
const consign = require('consign');
// const bodyParser = require('body-parser'); is deprecreted

module.exports = () => {
  const app = express();
  // app.use(bodyParser.json());
  // app.use(bodyParser.urlencoded({ extended: true })); // config para forms
  app.use(express.json())
  app.use(express.urlencoded({ extended: true })); // observar o content-type se está como aplication/json
  consign()
    .include('controllers')
    .into(app);
  return app;
}