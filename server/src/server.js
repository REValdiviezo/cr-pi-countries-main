const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const countriesRouter = require("./routes/countryRouter");
const activitiesRouter = require("./routes/activityRouter")

const server = express();
//Se implementa el uso de middleware
server.use(morgan("dev"));//Registrar información sobre las solicitudes entrantes en el servidor. El formato "dev" muestra detalles como el método HTTP, el código de estado, el tiempo de respuesta, etc.
server.use(express.json());//Esto permite que la aplicación pueda recibir y manejar datos JSON en las solicitudes POST, PUT y PATCH.
server.use(cors());// Permite configurar cabeceras HTTP para permitir el acceso cruzado a recursos desde diferentes dominios.
//Configuracion de las rutas
server.use('/countries', countriesRouter);
server.use('/activities', activitiesRouter);

module.exports = server