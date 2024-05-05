const express = require('express')
const router = express.Router()
const products = require('../db/products.json')
let balance = 100000000
let cart = {}

router.post('/api/cart', (req, res) => {
  // Ini adalah API Post untuk nambah product ke cart
  const { productId, quantity } = req.body // destructure sebuah object productId dan quantity untuk mengambil data dari product ke keranjangnya.
  const product = products.find((p) => p.id == productId)
  if (!product) {
    return res.status(404).json({ message: 'Product tidak terdaftar' })
  }
  if (quantity > product.stock) {
    return res.status(400).json({ message: 'Stock tidak mencukupi' })
  }
  // Jika productnya sudah ada di keranjang atau belum
  if (cart[productId]) {
    if (cart[productId].quantity + quantity > product.stock) {
      return res.status(400).json({ message: 'Stock tidak mencukupi' })
    }
    cart[productId].quantity += quantity
    cart[productId].total += quantity * product.price
  } else {
    cart[productId] = {
      name: product.name,
      description: product.description,
      brand: product.brand,
      price: product.price,
      quantity: quantity,
      total: (product.price = quantity),
    }
  }
  return res.json({
    message: 'Product berhasil ditambahkan ke cart',
    data: Object.values(cart),
  })
})

router.get('/api/cart', (req, res) => {
  let carts = Object.values(cart)
  res.render('cart', { carts })
})

router.delete('/api/cart', (req, res) => {
  cart = {}
  return res.json({
    message: 'Cart berhasil di kosongkan',
  })
})

module.exports = router
