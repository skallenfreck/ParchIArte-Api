const express = require('express');
const router = express.Router();
const recomendacionController = require('../controllers/recomendacionController');

// Crear una nueva recomendación
router.post('/', recomendacionController.crearRecomendacion);

// Obtener todas las recomendaciones
router.get('/', recomendacionController.obtenerRecomendaciones);



module.exports = router;