const controllerEquipo = require("./controllerEquipo.js");
const controllerPartido = require("./controllerPartido.js");
const controllerAdm = require("./controllerAdm.js");
//requiere los controlers
module.exports = app => {
  let claseEquipo = new controllerEquipo();
  let clasePartido = new controllerPartido();
  let claseAdmin = new controllerAdm();
  //instancia las clases
  //claseEquipo
  app.post("/api/nuevoequipo", claseEquipo.Guardar);
  app.post("/api/modificaequipo", claseEquipo.Modificar);
  app.post("/api/eliminaequipo", claseEquipo.Eliminar);
  app.post("/api/seleccionaequipo", claseEquipo.Seleccionartodos);
  app.post("/api/seleccionarporgrupo", claseEquipo.Seleccionarporgrupo);
  app.post("/api/seleccionarpornumero", claseEquipo.Seleccionarpornumero);
  app.post("/api/seleccionarporid", claseEquipo.Seleccionarporid);
  app.post("/api/seleccionarpornombre", claseEquipo.Seleccionarpornombre);
  //clasePartido
  app.post("/api/nuevopartido", clasePartido.Guardar);
  app.post("/api/modificapartido", clasePartido.Modificar);
  app.post("/api/eliminapartido", clasePartido.Eliminar);
  app.post("/api/seleccionatodos", clasePartido.Seleccionartodos);
  app.post("/api/seleccionaporfecha", clasePartido.Seleccionarporfecha);
  app.post("/api/seleccionarpartidoporid", clasePartido.Seleccionarporid);
  //claseAdm
  app.post("/api/nuevousuario", claseAdmin.Guardar);
  app.post("/api/modificausuario", claseAdmin.Modificar);
  app.post("/api/eliminausuario", claseAdmin.Eliminar);
  app.post("/api/seleccionausuario", claseAdmin.Seleccionartodos);
  app.post("/api/seleccionarporid", claseAdmin.Seleccionarporid);
  app.post("/api/login", claseAdmin.Login);
  app.get("*", (req, res) => {
    res.sendfile("./login.html");
  });
};
