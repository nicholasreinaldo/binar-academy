const express = require('express')
const app = express()
const port = 3000
const knex = require('./config/database')

app.get('/books', async (req, res) => {
  const books = await knex.raw('SELECT * FROM books')

  return res.json(books.rows)
})

app.get("/books/:id", async (req,res) => {
  const id = req.params.id
  const books = await knex.raw(`SELECT * FROM books WHERE id = ${id}`)
  return res.json(books.rows)
})

app.listen(port, () =>
  console.log(`Server is running at http://localhost:${port}`),
)
