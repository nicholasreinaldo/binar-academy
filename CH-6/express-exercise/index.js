const express = require('express')
const app = express()
const port = 3000

// Buat sebuah http method get
app.get('/', (req, res) => res.send('<h1>Test<h1>'))

app.get('/binar', (req, res) => res.send('Hello world'))

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

app.get('/services', (req, res) =>
  res.json([{ name: 'Tukang komputer' }, { name: 'Ojol' }]),
)

app.listen(port, () =>
  console.log(`Server is running at http://localhost:${port}`),
)
