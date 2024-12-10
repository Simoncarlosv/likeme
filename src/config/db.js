require('dotenv').config()
const { Pool } = require('pg');

const {
    DB_HOST,
    DB_USER,
    DB_PASS,
    DB_DATABASE
} = process.env

const pool = new Pool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS,
  database: DB_DATABASE,
  allowExitOnIdle: true,
});



module.exports = { pool };