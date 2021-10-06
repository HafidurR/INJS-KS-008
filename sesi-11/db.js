const { Pool } = require('pg')
const db = new Pool({
  user: 'postgres',
  password: 'postgresql',
  host: 'localhost',
  database: 'db_barang',
  port: 5432,
})

module.exports = db;