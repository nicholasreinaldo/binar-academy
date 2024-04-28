const express = require('express')
const app = express()
const port = 3000
const productRoute = require('./router/product.route')

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`)
  next()
}

app.use(logger)
app.use(productRoute)

const serviceHandler = (req, res) =>
  res.json([{ name: 'Tukang komputer' }, { name: 'Ojol' }])

app.get('/', (req, res) => res.send('<h1>Test<h1>'))

app.get('/binar', (req, res) => res.send('Hello world'))

app.get('/services', serviceHandler)

app.listen(port, () =>
  console.log(`Server is running at http://localhost:${port}`),
)
