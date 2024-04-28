const express = require('express')
const app = express()
const morgan = require('morgan')
const port = 3000
const productRoute = require('./routes/product.route')
const servicesRoute = require('./routes/services.route')

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`)
  next()
}

app.use(morgan('dev'))

// app.use(logger)
app.use(productRoute)
app.use(servicesRoute)

app.get('/ini-error', (req, res) => inierror)

app.get('/', (req, res) => res.send('<h1>Test<h1>'))

app.use(function (err, req, res, next) {
  console.log(err)
  res.status(500).json({ status: 'fail', errors: err.message })
})

app.use(function (req, res, next) {
  res.status(404).json({ status: 'fail', errors: 'Not found' })
})

// Sebaiknya error handling 404 ini selalu diimplement, sebaiknya taruh di paling akhir

app.listen(port, () =>
  console.log(`Server is running at http://localhost:${port}`),
)
