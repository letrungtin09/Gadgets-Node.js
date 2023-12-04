const productModel = require("../../../models/productsModel");
const categoryModel = require("../../../models/categoriesModel");

class AdminCateController {
  async adminCate(req, res) {
    try {
      let getAllCate = await categoryModel.getAllCate();
      let quantityPD = await productModel.countPD();
      console.log(quantityPD);
      res.render("admin/category/adminCategory", {
        category: getAllCate,
        quantity: quantityPD,
      });
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new AdminCateController();
