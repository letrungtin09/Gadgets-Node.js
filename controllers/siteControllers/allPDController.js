const productModel = require("../../models/productsModel");
const categoryModel = require("../../models/categoriesModel");

class AllPDController {
  async all(req, res) {
    try {
      let getCate = await categoryModel.getAllCate();
      let getAllPD = await productModel.getAllPD();
      res.render("site/allProduct", {
        category: getCate,
        products: getAllPD,
      });
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new AllPDController();
