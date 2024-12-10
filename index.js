require('dotenv').config() // Importamos la informacion de .env
const app = require('./src/app');

//Traemos la variable de entorno de .env para el dato del PORT y puede ser de dos formas
//const PORT = process.env.PORT
const {PORT} = process.env

// Iniciar el servidor
app.listen(PORT || 3001, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});