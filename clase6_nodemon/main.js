const http = require ('http')

const server = http.createServer((peticion, respuesta) => {
    respuesta.end('Hola Mundo', Cómo están todos?)
})

const connectedServer = server.listen(8080, () => {
    console.log(`Servidor HTTP escuchando en el puerto ${connectedServer.address ().port}`)
})