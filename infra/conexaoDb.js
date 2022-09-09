const mysql = require('mysql');

const conexao = mysql.createConnection({
  // host: '127.0.0.1',
  host: 'localhost',
  port: 3308,
  user: 'root',
  password: 'maquim2021+',
  database: 'agenda-pet-shop',
});

module.exports = conexao;