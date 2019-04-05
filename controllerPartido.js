var Item = require("./partido");
module.exports = class Partido {
  constructor() {}
  //el constructor va vacio
  Guardar(req, res) {
    console.log(req.body.Equipo1 + "  " + req.body.Equipo1);
    Item.create(
      {
        //crea elitem para la base de datos
        Equipo1: req.body.Equipo1,
        Equipo2: req.body.Equipo2,
        Fecha: req.body.Fecha,
        Marcador: {
          GolesEquipo1: req.body.GolesEquipo1,
          GolesEquipo2: req.body.GolesEquipo2,
          Ganador: req.body.Ganador,
          Foto: req.body.Foto
        },
        Grupo: req.body.Grupo
      },
      (err, item) => {
        //analiza errores externos y dentro de la base
        if (err) {
          res.send(err);
        } else {
          Item.find((err, item) => {
            if (err) res.send(err);
            res.json(item);
          });
        }
      }
    );
  }
  Modificar(req, res) {
    console.log(req.body.Equipo1);
    console.log(req.body.Equipo2);
    Item.update(
      { _id: req.body._id },
      {
        $set: {
          //busca la id del item a modificar y cambia las caracteristicas
          Equipo1: req.body.Equipo1,
          Equipo2: req.body.Equipo2,
          Fecha: req.body.Fecha,
          Marcador: req.body.Marcador,
          Grupo: req.body.Grupo
        }
      },
      (err, item) => {
        //busca errores internos y externos
        if (err) {
          res.send(err);
        }
        // Obtine y devuelve todos los equipos tras crear una de ellas
        else {
          Item.find((err, item) => {
            if (err) res.send(err);
            res.json(item);
          });
        }
      }
    );
  }
  Eliminar(req, res) {
    Item.remove({ _id: req.body.id }, (err, item) => {
      //busca la id y elmina el documento
      if (err) {
        res.send(err);
      }
      // Obtine y devuelve todos los equipos tras crear una de ellas
      else {
        Item.find((err, item) => {
          if (err) res.send(err);
          res.json(item);
        });
      }
    });
  }
  Seleccionartodos(req, res) {
    Item.find((err, item) => {
      //selecciona todos los documentos
      if (err) {
        res.send(err);
      } else {
        res.json(item); // devuelve todos los equipos en JSON
      }
    });
  }
  Seleccionarporgrupo(req, res) {
    //selecciona todos los que tenga la misma Grupo
    Item.find({ Grupo: req.body.Grupo }, (err, item) => {
      if (err) {
        res.send(err);
      } else {
        res.json(item); // devuelve todos los equipos en JSON
      }
    });
  }
  Seleccionarporfecha(req, res) {
    //selecciona todos los que tenga la misma fecha
    console.log(req.body.Fecha);
    Item.find({ Fecha: req.body.Fecha }, (err, item) => {
      if (err) {
        res.send(err);
      } else {
        res.json(item); // devuelve todos los equipos en JSON
      }
    });
  }
  Seleccionarporid(req, res) {
    //selecciona por id
    console.log(req.body._id);
    Item.find({ _id: req.body._id }, (err, item) => {
      if (err) {
        res.send(err);
      } else {
        res.json(item); // devuelve todos los equipos en JSON
      }
    });
  }
};
