const Usuario = require('../models/usuarioModel');

const crearUsuario = async (req, res) => {
    try {
        // Extraer datos del cuerpo de la petición
        const { nombre, email, telefono } = req.body;
        
        // Crear nueva instancia del modelo Usuario
        const nuevoUsuario = new Usuario({ nombre, email, telefono });
        
        // Guardar el usuario en la base de datos
        await nuevoUsuario.save();
        
        // Responder con el usuario creado y código 201 (Created)
        res.status(201).json(nuevoUsuario);
    } catch (error) {
        // Manejar errores de validación, duplicados o de base de datos
        res.status(500).json({ mensaje: 'Error al crear el usuario', error });
    }
};

/**
 * Obtiene la lista completa de usuarios registrados
 * @route GET /api/usuarios
 * @returns {Array} 200 - Lista de todos los usuarios
 * @returns {Object} 500 - Error del servidor
 */
const obtenerUsuarios = async (req, res) => {
    try {
        // Buscar todos los usuarios en la base de datos
        const usuarios = await Usuario.find();
        
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener los usuarios', error });
    }
};

/**
 * Obtiene un usuario específico por su ID
 * @route GET /api/usuarios/:id
 * @param {string} req.params.id - ID del usuario a buscar
 * @returns {Object} 200 - Usuario encontrado
 * @returns {Object} 404 - Usuario no encontrado
 * @returns {Object} 500 - Error del servidor
 */
const obtenerUsuario = async (req, res) => {
    try {
        // Buscar usuario por ID
        const usuario = await Usuario.findById(req.params.id);
        
        // Validar que el usuario existe
        if (!usuario) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
        
        res.status(200).json(usuario);
    } catch (error) {
        // Captura errores como IDs con formato inválido
        res.status(500).json({ mensaje: 'Error al obtener el usuario', error });
    }
};

/**
 * Actualiza los datos de un usuario existente
 * @route PUT /api/usuarios/:id
 * @param {string} req.params.id - ID del usuario a actualizar
 * @param {Object} req.body - Campos a actualizar (nombre, email, telefono)
 * @returns {Object} 200 - Usuario actualizado exitosamente
 * @returns {Object} 404 - Usuario no encontrado
 * @returns {Object} 500 - Error del servidor
 */
const actualizarUsuario = async (req, res) => {
    try {
        // Buscar y actualizar el usuario en una sola operación
        // { new: true } devuelve el documento actualizado en lugar del original
        const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
        
        // Verificar si el usuario existía
        if (!usuario) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
        
        res.status(200).json(usuario);
    } catch (error) {
        // Manejar errores de validación o de base de datos
        res.status(500).json({ mensaje: 'Error al actualizar el usuario', error });
    }
};

/**
 * Elimina un usuario del sistema
 * @route DELETE /api/usuarios/:id
 * @param {string} req.params.id - ID del usuario a eliminar
 * @returns {Object} 200 - Confirmación de eliminación exitosa
 * @returns {Object} 404 - Usuario no encontrado
 * @returns {Object} 500 - Error del servidor
 */
const eliminarUsuario = async (req, res) => {
    try {
        // Buscar y eliminar el usuario en una sola operación
        const usuario = await Usuario.findByIdAndDelete(req.params.id);
        
        // Verificar si el usuario existía antes de eliminarlo
        if (!usuario) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
        
        res.status(200).json({ mensaje: 'Usuario eliminado con éxito' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el usuario', error });
    }
};

// Exportar funciones del controlador para usar en las rutas
module.exports = { crearUsuario, obtenerUsuarios, obtenerUsuario, actualizarUsuario, eliminarUsuario };