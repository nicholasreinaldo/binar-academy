const knex = require('../config/database')
const findBooks = async () => {
  const books = await knex.raw(`SELECT * FROM books`)
  return books.rows
}
const findBooksByTitle = async (title) => {
  const books = await knex.raw(
    `SELECT * FROM books WHERE title LIKE '${title}%'`,
  )
  return books.rows
}
const findBookById = async (id) => {
  const books = await knex.raw(`SELECT * FROM books WHERE id = ${id}`)
  return books.rows[0]
}
const createBook = async (book) => {
  const newBook = await knex('books').insert(book, ['*'])
  return newBook
}
module.exports = { findBooks, findBooksByTitle, findBookById, createBook }
