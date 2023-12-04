const homeRoute = require("./siteRoutes/homeRoute");
const detailPDRoute = require("./siteRoutes/detailPDRoute");
const allPDRoute = require("./siteRoutes/allPDRoute");
const catePDRoute = require("./siteRoutes/catePDRoute");
const searchPDRoute = require("./siteRoutes/searchPDRoute");
const adminPDRoute = require("./adminRoutes/product/adminPDRoute");
const adminCateRoute = require("./adminRoutes/category/adminCateRoute");
const addPDRoute = require("./adminRoutes/product/addPDRoute");
const deletePDRoute = require("./adminRoutes/product/deletePDRoute");

function route(app) {
  app.use("/deletePD", deletePDRoute);
  app.use("/", addPDRoute);
  app.use("/adminCate", adminCateRoute);
  app.use("/admin", adminPDRoute);
  app.use("/searchProduct", searchPDRoute);
  app.use("/cateProduct", catePDRoute);
  app.use("/allProduct", allPDRoute);
  app.use("/detailProduct", detailPDRoute);
  app.use("/", homeRoute);
}

module.exports = route;
