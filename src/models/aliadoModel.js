// Importa mongoose para interactuar con la base de datos MongoDB
const mongoose = require('mongoose');

// Accede al constructor de esquema de mongoose
const Schema = mongoose.Schema;

// Definir el esquema de 'Aliado', que describe la estructura de los documentos en la colección 'Aliados'
const aliadoSchema = new Schema({
    
    // 'nombre': campo obligatorio de tipo String que almacena el nombre del aliado
    nombre: { type: String, required: true },

    // 'tipoActividad': campo obligatorio de tipo String que indica el tipo de actividad que realiza el aliado
    tipoActividad: { type: String, required: true },

    // 'descripcion': campo obligatorio de tipo String que describe al aliado o su empresa
    descripcion: { type: String, required: true },

    // 'contacto': campo obligatorio de tipo String que almacena la información de contacto del aliado (correo, teléfono, etc.)
    contacto: { type: String, required: true },

    // 'direccion': campo obligatorio de tipo String que almacena la dirección física del aliado
    direccion: { type: String, required: true },

    // 'experiencias': es un arreglo que almacena referencias (ObjectId) a documentos de la colección 'Experiencia'
    // Cada valor en el arreglo es una referencia a un documento 'Experiencia', lo que permite asociar varias experiencias a un aliado
    experiencias: [{ type: Schema.Types.ObjectId, ref: 'Experiencia' }]
    
}, { 
    // La opción 'timestamps: true' agrega automáticamente las fechas de creación ('createdAt') y de última actualización ('updatedAt')
    timestamps: true 
});

// Crear el modelo 'Aliado' a partir del esquema 'aliadoSchema'. 
// El modelo se usará para interactuar con la colección 'Aliados' en la base de datos.
const Aliado = mongoose.model('Aliado', aliadoSchema);

// Exporta el modelo 'Aliado' para que esté disponible en otras partes de la aplicación
module.exports = Aliado;
