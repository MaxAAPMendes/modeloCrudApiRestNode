const { log } = require('console');
const fs = require('fs');
/* buffer da imagem salva, no caso dog.jpg */
// fs.readFile('./assets/dog.jpg', (erro, buffer) => {
//   log('imagem foi bufferizada');
//   log(buffer);
  /* função duplica e a imagem, criando uma nova
  método é sincrono */
  // fs.writeFile('./assets/dogNovo.jpg', buffer, (erro) => { log('imagem reescrita, ira duplicar')});
// })

/* Método stream */
fs.createReadStream('./assets/dog.jpg')
  .pipe(fs.createWriteStream('./assets/dog-stream.jpg'))
  .on('finish', () => log('imagem escrita com sucesso'));

/* posso executar esse arquivo sem que o server esteja rodando, cmd: node ./arquivos/upLoadArquivos.js */

/* Stream é uma instância da classe EventEmitter, que está dentro do módulo nativo events (eventos).  */
/* o buffer funciona de forma síncrona, a stream trabalha de forma assíncrona. */