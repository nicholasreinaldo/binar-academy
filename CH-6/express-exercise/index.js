// initialisasi express
const express = require('express')
const app = express()
const morgan = require('morgan')
const port = 3000
const productRoute = require('./routes/product.route')
const servicesRoute = require('./routes/services.route')
const notFoundMiddleware = require('./middlewares/notFound.middleware')
const serverErrorMiddleware = require('./middlewares/notFound.middleware')

// middleware
app.use(morgan('dev'))

// route
app.use(productRoute)
app.use(servicesRoute)

app.get('/ini-error', (req, res) => inierror)

app.get('/', (req, res) => res.send('<h1>Test<h1>'))

app.use(serverErrorMiddleware)
app.use(notFoundMiddleware)

// Sebaiknya error handling 404 ini selalu diimplement, sebaiknya taruh di paling akhir.

app.listen(port, () =>
  console.log(`Server is running at http://localhost:${port}`),
)
