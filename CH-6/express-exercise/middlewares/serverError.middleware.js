const serverErrorMiddleware = function (err, req, res, next) {
  console.log(err)
  res.status(500).json({ status: 'fail', errors: err.message })
}

module.exports = serverErrorMiddleware
