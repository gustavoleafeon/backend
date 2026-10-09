// importa o módulo HTTP do node.js (nativo)
const http = require('http');
// Cria o servidor
//O createServer recebe uma função que sera executada toda vez que alguem acessar o servidor
const servidor = http.createServer((req, res)=> {
    res.end("Meu primeiro servidor Node!");
    //req.url mostra o caminha da url no vagador
    
    //res.end("Acessando: " + req.url);
    //res.end envia uma mensagem final para o navegador e finaliza a requisição
})
// req -> informações de requisção (request)
//res -> resposta que vamos enviar ao "cliente" (response)

//fara o servidor "escutar" a porta 3000 (escolhida por nés) 
servidor.listen(3000);
//protas comuns
// 3000 desenvolvimrnto
// 5000 
// 8080 web