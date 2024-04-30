const express = require('express')
const app = express()
const port = 8080
const products = require('./db/products.json')

let balance = 100000000
let cart = {}

app.get('/products', (req, res) => res.json(products))

app.listen(port, () =>
  console.log(`Server is running at http://localhost:${port}`),
)
