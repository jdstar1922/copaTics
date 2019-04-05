const mongoose = require("mongoose");
//carga mongoose
const Schema = mongoose.Schema;
//Schema se vuelve la clase schema de mongoose
const equipo = new Schema({
  //Definir el schema
  Nombre: String,
  Especialidad: String,
  Anio: String,
  Puntos: Number,
  Goles: Number,
  Numero: Number,
  Grupo: String,
  Jugadores: Array
});

module.exports = mongoose.model("Equipo", equipo);
//exporta el schema
