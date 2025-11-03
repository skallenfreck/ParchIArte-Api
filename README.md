# ParchIArte-Api

ParchIArte, una plataforma que centraliza la oferta de entretenimiento, permitiendo reservar experiencias y recibir recomendaciones personalizadas con IA, haciendo que planear un día de parche, salir con amigos o vivir una experiencia cultural sea mucho más fácil, rápido y adaptado a cada persona.

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/skallenfreck/ParchIArte-Api.git

2. Accede a la carpeta del proyecto:
    cd ParchIArte

3. Instala las dependencias necesarias:
    npm install

4. Crea un archivo .env con las configuraciones necesarias.

5. Inicia el servidor de desarrollo:
    npm start

# 📘 Módulo de Experiencias y Recomendaciones - ParchIArte API

Este módulo pertenece al proyecto **ParchIArte**, una API desarrollada en **Node.js** y **Express**, que gestiona información relacionada con experiencias culturales y recomendaciones en la ciudad.  
Esta parte del desarrollo fue implementada por **Camilo Prieto**.

---

## ⚙️ Tecnologías utilizadas
- **Node.js** - entorno de ejecución
- **Express.js** - framework para la API REST
- **Jest + Supertest** - pruebas de integración
- **MongoDB (Mongoose)** - base de datos NoSQL
- **dotenv** - manejo de variables de entorno

---
## Características

Gestión de Usuarios: CRUD completo con historial de reservas
Experiencias Culturales: Catálogo de actividades con información detallada
Sistema de Reservas: Reserva y cancelación de experiencias
Recomendaciones IA: Sugerencias personalizadas basadas en preferencias
Aliados Estratégicos: Registro y gestión de proveedores culturales
API RESTful: Endpoints bien documentados y estructurados
---
## Estructura
ParchIArte-Api/
│
├── src/
│   ├── controllers/          # Lógica de negocio
│   │   ├── usuarioController.js
│   │   ├── experienciaController.js
│   │   ├── reservaController.js
│   │   ├── recomendacionController.js
│   │   └── aliadoController.js
│   │
│   ├── models/               # Modelos de datos (Mongoose)
│   │   ├── usuarioModel.js
│   │   ├── experienciaModel.js
│   │   ├── reservaModel.js
│   │   ├── recomendacionModel.js
│   │   └── aliadoModel.js
│   │
│   ├── routes/               # Definición de rutas
│   │   ├── usuarioRoutes.js
│   │   ├── experienciaRoutes.js
│   │   ├── reservaRoutes.js
│   │   ├── recomendacionRoutes.js
│   │   └── aliadoRoutes.js
│   │
│   ├── index.js              # Centralización de rutas
│   └── server.js             # Punto de entrada principal
│
├── tests/                    # Pruebas unitarias e integración
├── .env                      # Variables de entorno (no versionado)
├── .gitignore
├── package.json
└── README.md
Este proyecto fue desarrollado como parte de la asignatura Base de Datos en la Fundación Universitaria Konrad Lorenz.
La API forma parte del ecosistema de la aplicación ParchIArte, enfocada en impulsar la cultura y el entretenimiento digital en Bogotá. 🌃
