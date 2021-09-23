const atendimentos = require('../models/atendimentos');

module.exports = (app) => {
  // listar todos
  app.get('/atendimentos', (req, res) => {
    atendimentos.listar(res);
  });

  app.get('/atendimentos/:id', (req, res) => {
    // console.log(req.params);// visualizar os paramentros passados
    // res.send('OK')
    const id = parseInt(req.params.id);
    atendimentos.buscarPorId(id, res);
  })
  app.post('/atendimentos', (req, res) => {
    // console.log(req.body);
    atendimentos.adiciona(req.body, res);
    res.send('Você está na rota de atendimentos e realizando um post');
  })
  // alterar alguns campos não todos, que usaria o put
  app.patch('/atendimentos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const valoresModificantes = req.body;
    atendimentos.alteraRegistro(id, valoresModificantes, res);
  })
  // deletar registro
  app.delete('/atendimentos/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    atendimentos.excluirRegistro(id, res);
  })
}