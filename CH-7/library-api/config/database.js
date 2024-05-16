const knex = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    port: 3306,
    user: 'postgres',
    password: '1223',
    database: 'library_db',
  },
})
