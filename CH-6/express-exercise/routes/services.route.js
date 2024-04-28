const express = require('express')
const router = express.Router()

const serviceHandler = (req, res) =>
  res.json([{ name: 'Tukang komputer' }, { name: 'Ojol' }])

router.get('/services', serviceHandler)

module.exports = router
