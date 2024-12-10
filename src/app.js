const express = require('express')
const morgan = require('morgan')
const routes = require('./routes/routes')
const cors = require('cors')
const { errorMiddleware } = require('./middlewares/errorMiddlewares')
//const cors = require('cors');

const app = express()

// Middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))


// routes
app.use('/', routes)


// Utlizamos nuestro middleware de manejador de errores, y debe ir AQUI al final, por el parámetro "next", que va pasando el proceso por los otros pasos para ir detectando los errores.
app.use(errorMiddleware)

module.exports = app