const express = require('express')
const app = express()
const port = 8080
const products = require('./db/products.json')
const cartRoutes = require('./routes/cart.route')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cartRoutes)
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')
app.get('/api/products', (req, res) => res.json(products))

app.get('/', (req, res) =>
  res.render('navbar', {
    menu: 'index.ejs',
    products,
  }),
)

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`)
})
