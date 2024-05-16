const express = require('express')
const app = express()
const port = 3000
const knex = require('./config/database')

app.get('/books', async (req, res) => {
  const books = await knex('books').select('*')
  return res.json(books)
})

app.listen(port, () =>
  console.log(`Server is running at http://localhost:${port}`),
)
