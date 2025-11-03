const express = require('express');
const router = express.Router();
const experienciaController = require('../controllers/experienciaController');

// Crear una nueva experiencia
router.post('/', experienciaController.crearExperiencia);

// Obtener todas las experiencias
router.get('/', experienciaController.obtenerExperiencias);

// Obtener una experiencia por ID
router.get('/:id', experienciaController.obtenerExperiencia);



module.exports = router;