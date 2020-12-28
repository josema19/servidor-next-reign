// Importar librerías
const express = require('express');
const conectDB = require('./config/db');
const job = require('./config/job');
const cors = require('cors');
const { saveArticles } = require('./middleware/saveArticles');

// Definir servidor
const app = express();

// Conectar a la BD
conectDB();

// Ejecutar tarea
job.start()

// Definir Puerto
const PORT = process.env.port || 4000;

// Habilitar Cors
app.use(cors());

// Importar rutas
app.use('/api/articles', require('./routes/articles'));

// Correr Servidor
app.listen(PORT, () => {
    console.log(`El servidor está funcionando en el puerto ${PORT}`);
    saveArticles();
});