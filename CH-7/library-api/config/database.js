const knex = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    port: 5432,
    user: 'postgres',
    password: '1223',
    database: 'library_db',
  },
})

module.exports = knex
