const express = require('express')
const { Router } = express

const router = Router(Router)

const productos = [
    {
        id: 1,
        title: "bombón de chocolate",
        price: 5000,
        thumbnail: 'https://cdn.pixabay.com/photo/2022/01/15/19/04/sweets-6940492_960_720.jpg',
    },
    {
        id: 2,
        title: "banana de chocolate",
        price: 1000,
        thumbnail: 'https://cdn.pixabay.com/photo/2014/03/14/16/09/jelly-beans-287219_960_720.jpg',
    },
    {
        id: 3,
        title: "barra de chocolate amargo con 70% de cacao",
        price: 15000,
        thumbnail: 'https://cdn.pixabay.com/photo/2014/12/13/19/44/chocolate-567234_960_720.jpg',
    },
]

let siguienteID = 4

router.post('/productos', (req, res) => {
  let { body : data } = req
  data = { id: siguienteID, ...data }
  productos.push(data)
  siguienteID++
  res.status(200).json(data)
})

router.get('/productos', (_, res) => {
  res.status(200).json(productos)
})

router.put('/productos', (_, res) => {
  res.status(200).json(productos)
})

router.delete('/productos', (_, res) => {
  res.status(200).json(productos)
})

module.exports = router