const homeRoute = require("./siteRoutes/homeRoute");
const detailRoute = require("./siteRoutes/detailPDRoute");

function route(app) {
  app.use("/detailProduct", detailRoute);
  app.use("/", homeRoute);
}

module.exports = route;
