const customExpress = require('./config/customExpress');
const conexao = require('./infra/conexaoDb');
const Tabelas = require('./infra/tabelas');

const porta = 3001;

conexao.connect((erro) => {
  if (erro) {
    return console.log('ERROR ao conectar banco de dados', erro);
  } else {
    Tabelas.init(conexao);
    const app = customExpress();
    app.listen(porta, () => console.log(`Servidor rodando e disponível na porta ${porta}`));
    return console.log('conectado ao banco de dados com sucesso')
  }
});

