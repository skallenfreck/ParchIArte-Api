const Experiencia = require('../models/experienciaModel');

// Crear una nueva experiencia
const crearExperiencia = async (req, res) => {
    try {
        // Extraer datos del cuerpo de la petición
        const { nombre, descripcion, categoria, precio, ubicacion, aliadoId } = req.body;
        
        // Crear nueva instancia del modelo Experiencia
        // Mapear aliadoId al campo 'aliado' del modelo
        const nuevaExperiencia = new Experiencia({ 
            nombre, 
            descripcion, 
            categoria, 
            precio, 
            ubicacion, 
            aliado: aliadoId 
        });
        
        // Guardar la experiencia en la base de datos
        await nuevaExperiencia.save();
        
        // Responder con la experiencia creada y código 201 (Created)
        res.status(201).json(nuevaExperiencia);
    } catch (error) {
        // Manejar errores de validación o de base de datos
        res.status(500).json({ mensaje: 'Error al crear la experiencia', error });
    }
};

/**
 * Obtiene todas las experiencias disponibles con información del aliado
 * @route GET /api/experiencias
 * @returns {Array} 200 - Lista de todas las experiencias con datos del aliado
 * @returns {Object} 500 - Error del servidor
 */
const obtenerExperiencias = async (req, res) => {
    try {
        // Buscar todas las experiencias y poblar la referencia al aliado
        // populate() reemplaza el ID del aliado con el documento completo
        const experiencias = await Experiencia.find().populate('aliado');
        
        res.status(200).json(experiencias);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener las experiencias', error });
    }
};

/**
 * Obtiene una experiencia específica por su ID
 * @route GET /api/experiencias/:id
 * @param {string} req.params.id - ID de la experiencia a buscar
 * @returns {Object} 200 - Experiencia encontrada con datos del aliado
 * @returns {Object} 404 - Experiencia no encontrada
 * @returns {Object} 500 - Error del servidor
 */
const obtenerExperiencia = async (req, res) => {
    try {
        // Buscar experiencia por ID y poblar datos del aliado relacionado
        const experiencia = await Experiencia.findById(req.params.id).populate('aliado');
        
        // Validar que la experiencia existe
        if (!experiencia) {
            return res.status(404).json({ mensaje: 'Experiencia no encontrada' });
        }
        
        res.status(200).json(experiencia);
    } catch (error) {
        // Captura errores como IDs con formato inválido
        res.status(500).json({ mensaje: 'Error al obtener la experiencia', error });
    }
};

/**
 * Actualiza los datos de una experiencia existente
 * @route PUT /api/experiencias/:id
 * @param {string} req.params.id - ID de la experiencia a actualizar
 * @param {Object} req.body - Campos a actualizar
 * @returns {Object} 200 - Experiencia actualizada exitosamente
 * @returns {Object} 404 - Experiencia no encontrada
 * @returns {Object} 500 - Error del servidor
 */
const actualizarExperiencia = async (req, res) => {
    try {
        // Buscar y actualizar la experiencia en una sola operación
        // { new: true } devuelve el documento actualizado en lugar del original
        const experiencia = await Experiencia.findByIdAndUpdate(req.params.id, req.body, { new: true });
        
        // Verificar si la experiencia existía
        if (!experiencia) {
            return res.status(404).json({ mensaje: 'Experiencia no encontrada' });
        }
        
        res.status(200).json(experiencia);
    } catch (error) {
        // Manejar errores de validación o de base de datos
        res.status(500).json({ mensaje: 'Error al actualizar la experiencia', error });
    }
};

/**
 * Elimina una experiencia del sistema
 * @route DELETE /api/experiencias/:id
 * @param {string} req.params.id - ID de la experiencia a eliminar
 * @returns {Object} 200 - Confirmación de eliminación exitosa
 * @returns {Object} 404 - Experiencia no encontrada
 * @returns {Object} 500 - Error del servidor
 */
const eliminarExperiencia = async (req, res) => {
    try {
        // Buscar y eliminar la experiencia en una sola operación
        const experiencia = await Experiencia.findByIdAndDelete(req.params.id);
        
        // Verificar si la experiencia existía antes de eliminarla
        if (!experiencia) {
            return res.status(404).json({ mensaje: 'Experiencia no encontrada' });
        }
        
        res.status(200).json({ mensaje: 'Experiencia eliminada con éxito' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar la experiencia', error });
    }
};

// Exportar funciones del controlador para usar en las rutas
module.exports = { crearExperiencia, obtenerExperiencias, obtenerExperiencia, actualizarExperiencia, eliminarExperiencia };