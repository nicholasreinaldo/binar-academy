const express = require('express')
const router = express.Router()

router.use(function timeLog(req, res, next) {
  console.log('Time', Date.now())
  next()
})

router.get('/products', (req, res) =>
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

module.exports = router
