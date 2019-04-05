const mongoose = require("mongoose");
//carga mongoose
const Schema = mongoose.Schema;
//Schema se vuelve la clase schema de mongoose
const partido = new Schema({
  //Definir el schema
  Equipo1: String,
  Equipo2: String,
  Fecha: Date,
  Marcador: {
    GolesEquipo1: Number,
    GolesEquipo2: Number,
    Ganador: String,
    Foto: String
  },
  Grupo: String
});

module.exports = mongoose.model("Partido", partido);
//exporta el schema
