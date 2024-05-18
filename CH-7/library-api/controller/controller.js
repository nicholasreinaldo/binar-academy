const bookRepository = require('../repository/books.repository')
const getBooks = async (req, res) => {
  const title = req.query.title
  if (title) {
    const books = await bookRepository.findBooksByTitle(title)
    return res.json(books)
  }
  const books = await bookRepository.findBooks()
  return res.json(books)
}
const getBookById = async (req, res) => {
  const id = req.params.id
  const book = await bookRepository.findBookById(id)
  if (!book) {
    return res.status(404).json({ message: 'book not found' })
  }
  return res.json(book)
}
const createBook = async (req, res) => {
  const newBook = await bookRepository.createBook(req.body)
  return res.json(newBook[0])
}
module.exports = { getBooks, getBookById, createBook }
