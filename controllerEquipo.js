var Item = require("./equipo");
module.exports = class Equipo {
  constructor() {}
  //el constructor va vacio
  Guardar(req, res) {
    Item.create(
      {
        //crea elitem para la base de datos
        Nombre: req.body.Nombre,
        Especialidad: req.body.Especialidad,
        Anio: req.body.Anio,
        Puntos: req.body.Puntos,
        Goles: req.body.Goles,
        Numero: req.body.Numero,
        Grupo: req.body.Grupo,
        Jugadores: req.body.Jugadores
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
    Item.update(
      { _id: req.body._id },
      {
        $set: {
          //busca la id del item a modificar y cambia las caracteristicas
          Nombre: req.body.Nombre,
          Especialidad: req.body.Especialidad,
          Anio: req.body.Anio,
          Puntos: req.body.Puntos,
          Goles: req.body.Goles,
          Numero: req.body.Numero,
          Grupo: req.body.Grupo,
          Jugadores: req.body.Jugadores
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
    console.log(req.body._id);
    Item.remove({ _id: req.body._id }, (err, item) => {
      //busca la id y elmina el documento
      if (err) {
        res.send(err);
      }
      // Obtine y devuelve todos los equipos tras eliminar de ellos
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
  Seleccionarpornombre(req, res) {
    //selecciona todos los que tenga la misma Nombre
    Item.find({ Nombre: req.body.Nombre }, (err, item) => {
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
  Seleccionarporid(req, res) {
    //selecciona por id
    Item.find({ _id: req.body._id }, (err, item) => {
      if (err) {
        res.send(err);
      } else {
        res.json(item); // devuelve todos los equipos en JSON
      }
    });
  }
  Seleccionarpornumero(req, res) {
    //selecciona por Numero
    Item.find({ Numero: req.body.Numero }, (err, item) => {
      if (err) {
        res.send(err);
      } else {
        res.json(item); // devuelve todos los equipos en JSON
      }
    });
  }
};
