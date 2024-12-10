const express = require('express')
const morgan = require('morgan')
const routes = require('./routes/routes')
const cors = require('cors')
//const cors = require('cors');

const app = express()

// Middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))


// routes
app.use('/', routes)



module.exports = app