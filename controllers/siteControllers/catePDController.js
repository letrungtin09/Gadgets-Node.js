const productModel = require("../../models/productsModel");
const categoryModel = require("../../models/categoriesModel");

class CatePDController {
  async catePD(req, res) {
    let getIdCate = req.params.idCategory;
    try {
      let getCate = await categoryModel.getAllCate();
      let getCatePD = await productModel.getPDCate(getIdCate);
      res.render("site/cateProduct", {
        category: getCate,
        cateProducts: getCatePD,
      });
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new CatePDController();
