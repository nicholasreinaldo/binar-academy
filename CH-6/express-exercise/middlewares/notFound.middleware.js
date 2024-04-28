const notFoundMiddleware = function (req, res, next) {
  res.status(404).json({ status: 'fail', errors: 'Not found' })
}

module.exports = notFoundMiddleware
