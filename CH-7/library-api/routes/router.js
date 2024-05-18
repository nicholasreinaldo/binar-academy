const express = require('express')
const router = express.Router()
const bookController = require('../controller/books.controller')
router.get('/books', bookController.getBooks)
router.get('/books/:id', bookController.getBookById)
router.post('/books', bookController.createBook)
module.exports = router
