const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();

// Cargar variables de entorno
dotenv.config();

// Conectar a la base de datos
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Conexión a MongoDB Atlas exitosa"))
    .catch(err => console.log("Error al conectar a MongoDB Atlas", err));

// Middlewares
app.use(express.json()); // Para poder leer datos en formato JSON
app.use(cors()); // Habilitar CORS para solicitudes de diferentes orígenes

// Importar y usar las rutas desde index.js
const routes = require('./index'); // Importar las rutas centralizadas desde src/index.js
app.use('/api', routes); // Usar el router de las rutas bajo el prefijo /api

// Puerto de escucha
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
