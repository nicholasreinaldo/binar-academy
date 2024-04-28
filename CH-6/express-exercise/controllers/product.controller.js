const productController = (req, res) =>
  res.json([
    {
      name: 'Iphone',
      qty: 10,
    },
    {
      name: 'samsung',
      qty: 3,
    },
  ])

module.exports = productController
