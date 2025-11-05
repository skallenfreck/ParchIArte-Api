const express = require('express');
const router = express.Router();
const reservaController = require('../controller/reservaController');

// Crear una nueva reserva
router.post('/', reservaController.crearReserva);

// Obtener todas las reservas
router.get('/', reservaController.obtenerReservas);

// Obtener una reserva por ID
router.get('/:id', reservaController.obtenerReserva);

// Modificar una reserva
router.put('/:id', reservaController.modificarReserva);  // Ruta PUT para modificar una reserva

// Eliminar una reserva
router.delete('/:id', reservaController.eliminarReserva);

module.exports = router;
