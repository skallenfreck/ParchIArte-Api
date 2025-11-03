const Recomendacion = require('../models/recomendacionModel');

// Crear una nueva recomendación
const crearRecomendacion = async (req, res) => {
    try {
        const { usuarioId, actividadRecomendada, presupuesto } = req.body;
        const nuevaRecomendacion = new Recomendacion({
            usuario: usuarioId,
            actividadRecomendada,
            presupuesto
        });

        await nuevaRecomendacion.save();
        res.status(201).json(nuevaRecomendacion);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear la recomendación', error });
    }
};

// Obtener todas las recomendaciones
const obtenerRecomendaciones = async (req, res) => {
    try {
        const recomendaciones = await Recomendacion.find().populate('usuario actividadRecomendada');
        res.status(200).json(recomendaciones);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener las recomendaciones', error });
    }
};

// Obtener una recomendación por ID
const obtenerRecomendacion = async (req, res) => {
    try {
        const recomendacion = await Recomendacion.findById(req.params.id).populate('usuario actividadRecomendada');
        if (!recomendacion) {
            return res.status(404).json({ mensaje: 'Recomendación no encontrada' });
        }
        res.status(200).json(recomendacion);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener la recomendación', error });
    }
};

// Eliminar una recomendación por ID
const eliminarRecomendacion = async (req, res) => {
    try {
        const recomendacion = await Recomendacion.findByIdAndDelete(req.params.id);
        if (!recomendacion) {
            return res.status(404).json({ mensaje: 'Recomendación no encontrada' });
        }
        res.status(200).json({ mensaje: 'Recomendación eliminada con éxito' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar la recomendación', error });
    }
};

module.exports = {
    crearRecomendacion,
    obtenerRecomendaciones,
    obtenerRecomendacion,
    eliminarRecomendacion
};
