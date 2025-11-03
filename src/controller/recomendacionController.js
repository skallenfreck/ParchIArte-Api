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