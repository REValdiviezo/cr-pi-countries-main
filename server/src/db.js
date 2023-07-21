require("dotenv").config(); //Carga las variables definidas en el archivo ".env" para poder utilizarlas
const { Sequelize } = require("sequelize");//es una biblioteca de Node.js que facilita la interacción con bases de datos
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const fs = require('fs');// fs(File System) proporciona funcionalidades para trabajar con el sistema de archivos
const path = require('path');
// se crea una instancia de Sequelize para establecer la conexion a la base de datos
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countries`,
  { logging: false, native: false }
);
const basename = path.basename(__filename);

const modelDefiners = [];
// Este bloque de codigo se encarga leer los archivos de la carpeta models
// y los guarda en la contante modelDefiners para cargarlos en la base de datos
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });


modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);// este metodo toma un objeto y transforma en un array q se almacena en "entries"
// recorre entries y modifica cada valor colocando la primera letra en mayusculas
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]); 
sequelize.models = Object.fromEntries(capsEntries);// toma un array y lo transforma en un objeto con lod valores modificados 

const { Country, Activity } = sequelize.models;

// Aca vendrian las relaciones
// Aqui se hace la relacion de las tablas y se crea la tabla intermedia "Activity-Countries"
Country.belongsToMany(Activity, {through: 'Activity-Countries'});
Activity.belongsToMany(Country, {through: 'Activity-Countries'});

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};