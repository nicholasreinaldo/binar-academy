const express = require('express')
const router = express.Router()

app.get('/products', (req, res) =>
  res.json([
    {
      name: 'Iphone',
      qty: 10,
    },
    {
      name: 'samsung',
      qty: 3,
    },
  ]),
)
