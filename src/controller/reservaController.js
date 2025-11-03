const Reserva = require('../models/reservaModel');

// Crear una nueva reserva
const crearReserva = async (req, res) => {
    try {
        const { usuarioId, experienciaId, fechaReserva } = req.body;
        const nuevaReserva = new Reserva({ usuario: usuarioId, experiencia: experienciaId, fechaReserva });
        await nuevaReserva.save();
        res.status(201).json(nuevaReserva);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear la reserva', error });
    }
};

// Obtener todas las reservas
const obtenerReservas = async (req, res) => {
    try {
        const reservas = await Reserva.find().populate('usuario experiencia');
        res.status(200).json(reservas);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener las reservas', error });
    }
};

// Obtener una reserva por ID
const obtenerReserva = async (req, res) => {
    try {
        const reserva = await Reserva.findById(req.params.id).populate('usuario experiencia');
        if (!reserva) {
            return res.status(404).json({ mensaje: 'Reserva no encontrada' });
        }
        res.status(200).json(reserva);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener la reserva', error });
    }
};

// Eliminar una reserva por ID
const eliminarReserva = async (req, res) => {
    try {
        const reserva = await Reserva.findByIdAndDelete(req.params.id);
        if (!reserva) {
            return res.status(404).json({ mensaje: 'Reserva no encontrada' });
        }
        res.status(200).json({ mensaje: 'Reserva eliminada con éxito' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar la reserva', error });
    }
};

module.exports = { crearReserva, obtenerReservas, obtenerReserva, eliminarReserva };
