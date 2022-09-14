const http = require ('http')

const server = http.createServer((peticion, respuesta) => {
    const ahora = new Date()
    const hora = ahora.getHours()
    let mensaje = ''
    if (hora >= 6 && hora <= 12) {
        mensaje = 'Buenos días'
    } else if (hora >= 13 && hora <= 19) {
        mensaje = 'Buenas tardes'
    } else {
        mensaje = 'Buenas noches'
    }
    respuesta.end(mensaje)
})


const PORT = 8080

const servidorConectado = server.listen(PORT, () => {
    console.log(`Servidor HTTP escuchando en el puerto ${servidorConectado.address ().port}`);
})

