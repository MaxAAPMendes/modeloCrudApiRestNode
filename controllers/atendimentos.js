const atendimentos = require('../models/atendimentos');

module.exports = (app) => {
  // listar todos
  app.get('/atendimentos', (req, res) => {
    atendimentos.listar(res);
  });

  app.get('/atendimentos/:id', async (req, res) => {
    // console.log(req.params);// visualizar os paramentros passados
    const { id } = req.params;
    try {
      await atendimentos.buscarPorId(parseInt(id), res);
    } catch (error) {
      res.json({
        status: 'erro',
        mensagem: `Erro ao consultar os dados do id ${parseInt(id)}`
      });
    }
  })
  app.post('/atendimentos', async (req, res) => {
    console.log('post atendimentos------> req.body', req.body)
    try {
      await atendimentos.adiciona(req.body, res);
      res.json({
        status: 'sucesso',
        mensagem: `O atendimento do cliente ${req.body.cliente} foi gravado com sucesso!`
      });
    } catch (error) {
      res.json({
        status: 'falha',
        mensagem: 'não foi possível gravar o atendimento'
      })
    }
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