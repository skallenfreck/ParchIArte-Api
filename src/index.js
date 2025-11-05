const parser = require("body-parser");
const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

// Importar las rutas de cada recurso
const usuarioRoutes = require("./routes/usuarioRoute");
const reservaRoutes = require("./routes/reservaRoute");
const experienciaRoutes = require("./routes/experienciaRoute");
const aliadoRoutes = require("./routes/aliadoRoute");
const recomendacionRoutes = require("./routes/recomendacionRoutes");

const mongoose = require("mongoose");

require("dotenv").config();

app.use(cors());
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());

// Usar las rutas
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/reservas", reservaRoutes);
app.use("/api/experiencias", experienciaRoutes);
app.use("/api/aliados", aliadoRoutes);
app.use("/api/recomendaciones", recomendacionRoutes);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Conexión exitosa a MongoDB Atlas"))
  .catch((error) => console.log("Error de conexión:", error));

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});