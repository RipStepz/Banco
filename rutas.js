const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');  

const texto = fs.readFileSync(path.join('./Ejemplo.txt'), 'utf-8');

const procesarRespuesta = (req, res) => {
    console.log('request recibida');
    const { method, url } = req;

    switch (method){
        case 'GET':
            switch (url) {
                case '/':
                    res.setHeader('Content-Type', 'text/html; charset=utf-8');
                    return res.end('<h1>Hola mundo</h1>');

                case '/VistaEjemplo':
                    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
                    return res.end(texto);
                
                default:
                    console.log('404 no encontrado');
                    break
            }
        case 'POST':
            switch (url) {
                case '/':
                    res.setHeader('Content-Type', 'text/html; charset=utf-8');
                    return res.end('<h1>Hola mundo desde post</h1>');

                default:
                    console.log('404 no encontrado');
                    break
            }

        

        }

}


const server = http.createServer(procesarRespuesta);

server.listen(0, () => {
    let puerto = server.address().port;
    console.log(`Servidor escuchando en el puerto http://localhost:${puerto}`);
});