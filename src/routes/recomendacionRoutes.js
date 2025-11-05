const express = require('express');
const router = express.Router();
const recomendacionController = require('../controller/recomendacionController');

// Crear una nueva recomendación
router.post('/', recomendacionController.crearRecomendacion);

// Obtener todas las recomendaciones
router.get('/', recomendacionController.obtenerRecomendaciones);

// Obtener una recomendación por ID
router.get('/:id', recomendacionController.obtenerRecomendacion);

// Actualizar una recomendación por ID
router.put('/:id', recomendacionController.actualizarRecomendacion);

// Eliminar una recomendación por ID
router.delete('/:id', recomendacionController.eliminarRecomendacion);

module.exports = router;