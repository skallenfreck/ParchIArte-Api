const express = require('express');
const router = express.Router();
const aliadoController = require('../controller/aliadoController');

// Crear un nuevo aliado
router.post('/', aliadoController.crearAliado);

// Obtener todos los aliados
router.get('/', aliadoController.obtenerAliados);

// Obtener un aliado por ID
router.get('/:id', aliadoController.obtenerAliado);

// Actualizar un aliado
router.put('/:id', aliadoController.actualizarAliado);

// Eliminar un aliado
router.delete('/:id', aliadoController.eliminarAliado);

module.exports = router;
