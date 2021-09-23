
// npm i --save-dev nodemon
// config package.js start: nodemon index.js
// npm start
// npm i mysql
const customExpress = require('./config/customExpress');
const conexao = require('./infra/conexaoDb');
const Tabelas = require('./infra/tabelas');

conexao.connect((erro) => {
  if (erro) {
    return console.log('ERROR ao conectar banco de dados', erro);
  } else {
    Tabelas.init(conexao);
    const app = customExpress();
    app.listen(3000, () => console.log('Servidor rodando e disponível na porta 3000'));
    return console.log('conectado ao banco de dados com sucesso')
  }
});

