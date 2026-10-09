// Importo APENAS o creare Server do modulo HTTP do node
const { createServer } = require('node:http');

//Define o endereço do servidor (localhost)
const hostname = '127.0.0.1';

// define a porta onde o servidor vai rodar
const port = 3000


//Cria nosso servidor
//Essa função sera executada toda vez em que alguém acessar o servidor
const server = createServer((req,res) => {

//define o status da resposta (200= OK)
res.statusCode = 200;

//define o tipo de contedo da resposta
//aqui estamos nos referindo a texto simple(trext/plain)
res.setHeader('content-type', 'text/plain');

res.end("hello, node!");
});

//FAz i servidor escutar na porta que definimos anteriormente.
// Assim, que o servidor for executado, ele executara essa função.
server.listen(port,hostname,() => {

// Mostra no terminal que servidor está rodando e o link
console.log(`Server running at http://${hostname}:${port}/`);
});