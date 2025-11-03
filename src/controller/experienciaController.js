const Experiencia = require('../models/experienciaModel');

// Crear una nueva experiencia
const crearExperiencia = async (req, res) => {
    try {
        const { nombre, descripcion, categoria, precio, ubicacion, aliadoId } = req.body;
        const nuevaExperiencia = new Experiencia({ nombre, descripcion, categoria, precio, ubicacion, aliado: aliadoId });
        await nuevaExperiencia.save();
        res.status(201).json(nuevaExperiencia);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear la experiencia', error });
    }
};

// Obtener todas las experiencias
const obtenerExperiencias = async (req, res) => {
    try {
        const experiencias = await Experiencia.find().populate('aliado');
        res.status(200).json(experiencias);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener las experiencias', error });
    }
};
