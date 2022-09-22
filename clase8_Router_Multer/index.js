const express = require('express')

const app = express()

//const PORT = process.env.NODE_PORT

const PORT = 8080

const ENV = process.env.NODE_ENV

const path = require('path')

const productos = require('./routers/productos')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/api', productos)

app.get('/', (req, res) => {
  res.send({ mensaje: 'hola mundo' })
})

/* app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something is broken!')
}) */

const STATUS_CODE = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  NOT_FOUND: 404,
}

const server = app.listen(PORT, () => {
  console.log(`Servidor http esta escuchando en el puerto ${server.address().port}`)
  console.log(`http://localhost:${server.address().port}`)
  console.log(`Environment:${ENV}`)
})

server.on("error", error => console.log(`Error en servidor ${error}`))

// npm i multer@1.4.5-lts.1
//readme.md resume clase 8
// nodemon --exec node -r dotenv/config ./index.js

/* "scripts": {
  "start": "node ./index.js",
  "dev": "nodemon --exec node -r dotenv/config ./index.js"
}, */