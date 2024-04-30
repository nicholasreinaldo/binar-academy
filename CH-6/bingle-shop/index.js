const express = require('express')
const app = express()
const port = 8080
const products = require('./db/products.json')

let balance = 100000000
let cart = {}

router.post('/api/cart', (req, res) => {
  const { productId, quantity } = req.body
  const product = products.find((p) => p.id === productId)
  if (!product) {
    return res.status(404).json({ message: 'Product tidak terdaftar' })
  }

  if (quantity > product.stock) {
    return res.status(400).json({ message: 'Stock tidak mencukupi' })
  }
})

router.get

const productsString = JSON.stringify(products)

app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')
app.get('/products', (req, res) => res.json(products))
app.get('/', (req, res) => res.render('index', { products }))

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`)
})
