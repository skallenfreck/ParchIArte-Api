const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definir el esquema de aliado
const aliadoSchema = new Schema({
    nombre: { type: String, required: true },
    tipoActividad: { type: String, required: true },
    descripcion: { type: String, required: true },
    contacto: { type: String, required: true },
    direccion: { type: String, required: true },
    experiencias: [{ type: Schema.Types.ObjectId, ref: 'Experiencia' }]
}, { timestamps: true });

// Crear y exportar el modelo de Aliado
const Aliado = mongoose.model('Aliado', aliadoSchema);
module.exports = Aliado;
