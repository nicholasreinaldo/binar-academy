const express = require('express')
const router = express.Router()
const productController = require('../controllers/product.controller')

router.use(function timeLog(req, res, next) {
  console.log('Time', Date.now())
  next()
})

router.get('/products', productController)

module.exports = router
