const Reserva = require('../models/reservaModel');

// Crear una nueva reserva
const crearReserva = async (req, res) => {
    try {
        // Extraer datos del cuerpo de la petición
        const { usuarioId, experienciaId, fechaReserva } = req.body;
        
        // Crear instancia del modelo con los datos proporcionados
        const nuevaReserva = new Reserva({ 
            usuario: usuarioId, 
            experiencia: experienciaId, 
            fechaReserva 
        });
        
        // Guardar la reserva en la base de datos
        await nuevaReserva.save();
        
        // Responder con la reserva creada y código 201 (Created)
        res.status(201).json(nuevaReserva);
    } catch (error) {
        // Manejar errores de validación o de base de datos
        res.status(500).json({ mensaje: 'Error al crear la reserva', error });
    }
};

/**
 * Obtiene todas las reservas del sistema con información completa
 * @route GET /api/reservas
 * @returns {Array} 200 - Lista de todas las reservas con datos de usuario y experiencia
 * @returns {Object} 500 - Error del servidor
 */
const obtenerReservas = async (req, res) => {
    try {
        // Buscar todas las reservas y poblar referencias a usuario y experiencia
        // populate() reemplaza los IDs con los documentos completos
        const reservas = await Reserva.find().populate('usuario experiencia');
        
        res.status(200).json(reservas);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener las reservas', error });
    }
};

/**
 * Obtiene una reserva específica por su ID
 * @route GET /api/reservas/:id
 * @param {string} req.params.id - ID de la reserva a buscar
 * @returns {Object} 200 - Reserva encontrada con datos completos
 * @returns {Object} 404 - Reserva no encontrada
 * @returns {Object} 500 - Error del servidor
 */
const obtenerReserva = async (req, res) => {
    try {
        // Buscar reserva por ID y poblar datos relacionados
        const reserva = await Reserva.findById(req.params.id).populate('usuario experiencia');
        
        // Validar que la reserva existe
        if (!reserva) {
            return res.status(404).json({ mensaje: 'Reserva no encontrada' });
        }
        
        res.status(200).json(reserva);
    } catch (error) {
        // Captura errores como IDs con formato inválido
        res.status(500).json({ mensaje: 'Error al obtener la reserva', error });
    }
};

/**
 * Elimina una reserva del sistema
 * @route DELETE /api/reservas/:id
 * @param {string} req.params.id - ID de la reserva a eliminar
 * @returns {Object} 200 - Confirmación de eliminación exitosa
 * @returns {Object} 404 - Reserva no encontrada
 * @returns {Object} 500 - Error del servidor
 */
const eliminarReserva = async (req, res) => {
    try {
        // Buscar y eliminar la reserva en una sola operación
        const reserva = await Reserva.findByIdAndDelete(req.params.id);
        
        // Verificar si la reserva existía antes de eliminarla
        if (!reserva) {
            return res.status(404).json({ mensaje: 'Reserva no encontrada' });
        }
        
        res.status(200).json({ mensaje: 'Reserva eliminada con éxito' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar la reserva', error });
    }
};

// Exportar funciones del controlador para usar en las rutas
module.exports = { crearReserva, obtenerReservas, obtenerReserva, eliminarReserva };