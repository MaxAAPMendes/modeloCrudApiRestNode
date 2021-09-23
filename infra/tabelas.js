class Tabelas {
  init(conexao) {
    console.log('Tabelas foi chamada');
    this.conexao = conexao;
    // this.criarAtendimento();
  }

  // criar uma tabela no banco
  criarAtendimento() {
    const sql = `create table if not exists atendimentos (
      id int not null auto_increment,
      cliente varchar(50) not null,
      pet varchar(20),
      servico varchar(20) not null,
      status varchar(20) not null,
      observacoes varchar(100),
      primary key(id))`;
    this.conexao.query(sql, (erro) => {
      if (erro) {
        console.log('erro ao criar a tabela', erro);
      } else {
        console.log('Tabela criada com sucesso!!')
      }
    });
  }
}

module.exports = new Tabelas();