const homeRoute = require("./siteRoutes/homeRoute");
const detailPDRoute = require("./siteRoutes/detailPDRoute");
const allPDRoute = require("./siteRoutes/allPDRoute");
const catePDRoute = require("./siteRoutes/catePDRoute");
const searchPDRoute = require("./siteRoutes/searchPDRoute");

function route(app) {
  app.use("/searchProduct", searchPDRoute);
  app.use("/cateProduct", catePDRoute);
  app.use("/allProduct", allPDRoute);
  app.use("/detailProduct", detailPDRoute);
  app.use("/", homeRoute);
}

module.exports = route;
