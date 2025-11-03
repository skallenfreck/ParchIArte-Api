const Aliado = require('../models/aliadoModel');

// Crear un nuevo aliado
const crearAliado = async (req, res) => {
    try {
        const { nombre, tipoActividad, descripcion, contacto, direccion } = req.body;
        const nuevoAliado = new Aliado({ nombre, tipoActividad, descripcion, contacto, direccion });
        await nuevoAliado.save();
        res.status(201).json(nuevoAliado);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear el aliado', error });
    }
};

// Obtener todos los aliados
const obtenerAliados = async (req, res) => {
    try {
        const aliados = await Aliado.find();
        res.status(200).json(aliados);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener los aliados', error });
    }
};

// Obtener un aliado por ID
const obtenerAliado = async (req, res) => {
    try {
        const aliado = await Aliado.findById(req.params.id);
        if (!aliado) {
            return res.status(404).json({ mensaje: 'Aliado no encontrado' });
        }
        res.status(200).json(aliado);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener el aliado', error });
    }
};
