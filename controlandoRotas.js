const http = require('http');

const servidor = http.createServer((req, res) => {

    if(req.url === "/"){
        res.end("Pagina principal");
    } else if (req.url === "/sobre"){
        res.end("Pagina Sobre o sistma");
    } else if (req.url === "/contato"){
        res.end("pagina de contato");
    } else if (req.url === "/noticias"){
        res.end("Pagina de Noticias");
    }else { res.end("PAgina Não encontada")}

});

servidor.listen(3000);