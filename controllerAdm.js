let Item = require("./administrador.js");
let Admin = new Item();
module.exports = class _Admin {
  constructor() {}
  //el constructor va vacio
  Guardar(req, res) {
    let claveEnc = Admin.setPassword(req.body.Clave);
    Item.find({ Email: req.body.Email }, (err, item) => {
      if (err) {
        res.send(err);
        console.log("no se encontro ninguna coincidencia");
      } else {
        if (item.length == 0) {
          Item.create(
            {
              //crea elitem para la base de datos
              Nombre: req.body.Nombre,
              Email: req.body.Email,
              Clave: claveEnc[0],
              Salt: claveEnc[1],
              Creador: req.body.Creador
            },
            (err, item) => {
              //analiza errores externos y dentro de la base
              if (err) {
                res.send(err);
              } else {
                Item.find((err, item) => {
                  if (err) res.send(err);

                  for (let it in item) {
                    item[it].Clave = "Bebecita";
                  }
                  res.json(item);
                });
              }
            }
          );
        } else {
          res.send("el correo ya existe");
        }
      }
    });
  }
  Login(req, res) {
    console.log(req.body.Email + "4");
    console.log(req.body.Clave + "5");
    Item.find({ Email: req.body.Email }, (err, item) => {
      if (err) {
        res.send(err);
        console.log("no se encontro ninguna coincidencia");
      } else {
        if (item.length == 0) {
          res.status(400).send({
            message: "item.length es 0"
          });
        } else {
          if (
            Admin.validPassword(req.body.Clave, item[0].Clave, item[0].Salt)
          ) {
            item[0].Salt = "No f Way";
            res.json(item);
          } else {
            res.status(400).send({
              message: "Contraseña diferente"
            });
          }
        }
      }
    });
  }
  Modificar(req, res) {
    console.log(req.body._id);
    Item.update(
      { _id: req.body._id },
      {
        $set: {
          //busca la id del item a modificar y cambia las caracteristicas
          Nombre: req.body.Nombre,
          Email: req.body.Email,
          Clave: req.body.Clave,
          Salt: req.body.Salt,
          Creador: req.body.Creador
        }
      },
      (err, item) => {
        //busca errores internos y externos
        if (err) {
          res.send(err);
        }
        // Obtine y devuelve todas las personas tras crear una de ellas
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
      // Obtine y devuelve todas las personas tras crear una de ellas
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
        res.json(item); // devuelve todas las Personas en JSON
      }
    });
  }
  Seleccionarporid(req, res) {
    //selecciona por id
    Item.find({ _id: req.body._id }, (err, item) => {
      if (err) {
        res.send(err);
      } else {
        res.json(item); // devuelve todas las Personas en JSON
      }
    });
  }
};
