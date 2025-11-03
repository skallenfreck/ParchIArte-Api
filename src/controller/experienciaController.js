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

// Obtener una experiencia por ID
const obtenerExperiencia = async (req, res) => {
    try {
        const experiencia = await Experiencia.findById(req.params.id).populate('aliado');
        if (!experiencia) {
            return res.status(404).json({ mensaje: 'Experiencia no encontrada' });
        }
        res.status(200).json(experiencia);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener la experiencia', error });
    }
};

// Actualizar una experiencia
const actualizarExperiencia = async (req, res) => {
    try {
        const experiencia = await Experiencia.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!experiencia) {
            return res.status(404).json({ mensaje: 'Experiencia no encontrada' });
        }
        res.status(200).json(experiencia);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al actualizar la experiencia', error });
    }
};

// Eliminar una experiencia
const eliminarExperiencia = async (req, res) => {
    try {
        const experiencia = await Experiencia.findByIdAndDelete(req.params.id);
        if (!experiencia) {
            return res.status(404).json({ mensaje: 'Experiencia no encontrada' });
        }
        res.status(200).json({ mensaje: 'Experiencia eliminada con éxito' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar la experiencia', error });
    }
};

module.exports = { crearExperiencia, obtenerExperiencias, obtenerExperiencia, actualizarExperiencia, eliminarExperiencia };
