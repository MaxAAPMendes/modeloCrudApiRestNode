const atendimentos = require('../controllers/atendimentos');
const conexao = require('../infra/conexaoDb');
const moment = require('moment');

// método de manipulação do banco
class Atendimento {
  // incluir registro no banco
  adiciona(objAtendimento, res) {
    const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS');
    const formatoPadraoParaData = 'DD/MM/AAAA';
    let { dataAtendimento } = objAtendimento;
    console.log(dataAtendimento)
    dataAtendimento = moment(dataAtendimento, formatoPadraoParaData).format('YYYY-MM-DD HH:MM:SS');
    console.log(dataAtendimento, dataCriacao)
    // validação de campos data e nome
    const dataValida = moment(dataAtendimento).isValid()// .isSameOrAfter(dataCriacao);// maior ou igual
    console.log(dataAtendimento)
    const nomeValido = objAtendimento.cliente.length >= 5;
    const validacoes = [
      {
        nome: 'dataAtendimento',
        valido: dataValida,
        mensagem: 'Data deve ser maior ou igual que a data atual.',
      },
      {
        nome: 'cliente',
        valido: nomeValido,
        mensagem: 'Nome deve ser maior ou igual a 5 caracteres.',
      }
    ]
    const listaErros = validacoes.filter((campo) => !campo.valido);
    const haErros = listaErros.length;
    if (haErros) {
      res.status(400).json(listaErros);
    } else {
      const atendimentoDatado = {...objAtendimento, dataAtendimento, dataCriacao};
      const sql = 'insert into atendimentos set ?';
      // segundo parametro é o dicionario de dados
      conexao.query(sql, atendimentoDatado, (erro, resultado) => {
        if (erro) {
          res.status(400).json(erro);// bad request
        } else {
          // res.status(201).json(resultado);// created
          console.log('estabeleu conexao e gravou o registro', resultado)
          res.status(201).json(objAtendimento);
        }
      })
    }
  }
  // listar todos
  listar(res) {
    const sql = 'select * from atendimentos;';
    conexao.query(sql, (erro, resultado) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json(resultado);
      }
    })
  }
  
  buscarPorId(id, res) {
    const sql = `select * from atendimentos where id = ${id}`;
    conexao.query(sql, (erro, resultado) => {
      const atendimentoLocalizado = resultado[0];
      if (erro) {
        res.status(500).json({
          status: 'erro',
          mensagem: '"Erro na consulta por id"'
        });
      } else if (resultado && resultado.length) {
        res.status(200).json(atendimentoLocalizado);
      } else {
        res.status(200).json({
          status: 'atencao',
          mensagem: 'Nenhum cliente localizado para os parâmetros informados'
        });
      };
    })
  }

  alteraRegistro(id, valores, res) {
    if (valores.data) {
      valores.data = moment(valores.data, 'DD/MM/AAAA').format('YYYY-MM-DD HH:MM:SS');
    }
    const sql = 'update atendimentos set ? where id = ?';
    conexao.query(sql, [valores, id], (erro, resultado) => {
      if (erro) {
        res.status(400).json('erro ao alterar registro', erro);
      } else {
        res.status(200).json({...valores, id})
        // ou
        // res.status(200).json(resultado);
      }
    })
  }

  excluirRegistro(id, res) {
    const sql = `delete from atendimentos where id = ${id}`;
    // const sql = 'delete from atendimentos where id = ?'; tambem é valido
    conexao.query(sql, (erro, resultado) => {
      if (erro) {
        res.status(400).json('erro ao tentar deletar', erro);
      } else {
        res.status(200).json({
          id: id,
          mensagem: 'registro removido',
          status: true,
        });
      }
    })
  }
}

module.exports = new Atendimento();