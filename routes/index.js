const homeRoute = require("./siteRoutes/homeRoute");
const detailPDRoute = require("./siteRoutes/detailPDRoute");
const allPDRoute = require("./siteRoutes/allPDRoute");
const catePDRoute = require("./siteRoutes/catePDRoute");
const searchPDRoute = require("./siteRoutes/searchPDRoute");
const adminPDRoute = require("./adminRoutes/product/adminPDRoute");
const adminCateRoute = require("./adminRoutes/category/adminCateRoute");
const addPDRoute = require("./adminRoutes/product/addPDRoute");
const deletePDRoute = require("./adminRoutes/product/deletePDRoute");
const addCateRoute = require("./adminRoutes/category/addCateRoute");
const deleteCateRoute = require("./adminRoutes/category/deleteCateRoute");
const updatePDRoute = require("./adminRoutes/product/updatePDRoute");
const updateCateRoute = require("./adminRoutes/category/updateCateRoute");
const loginRoute = require("./siteRoutes/loginRoute");
const registerRoute = require("./siteRoutes/registerRoute");

function route(app) {
  app.use("/", registerRoute);
  app.use("/", loginRoute);
  app.use("/", updateCateRoute);
  app.use("/", updatePDRoute);
  app.use("/deleteCate", deleteCateRoute);
  app.use("/", addCateRoute);
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
