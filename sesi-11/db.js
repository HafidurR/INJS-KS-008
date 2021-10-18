const { Pool } = require('pg')
const db = new Pool({
  user: 'postgres', //username pada postgres
  password: 'postgresql', //password pada postgres
  host: 'localhost', // bisa digati ke 127.0.0.1
  database: 'db_barang', //nama database yg akan kita pakai
  port: 5432, // port yg kita pakai pda postgres 
})

module.exports = db;