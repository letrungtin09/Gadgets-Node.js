const productModel = require("../../../models/productsModel");
const categoryModel = require("../../../models/categoriesModel");

class AdminPDController {
  async adminPD(req, res) {
    try {
      let getAllCate = await categoryModel.getAllCate();
      let getPD = await productModel.getAllPD();
      res.render("admin/product/adminProduct", {
        category: getAllCate,
        products: getPD,
      });
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new AdminPDController();
