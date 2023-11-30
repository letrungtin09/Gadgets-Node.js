const productModel = require("../../models/productsModel");
const categoryModel = require("../../models/categoriesModel");

class HomeController {
  async home(req, res) {
    try {
      let getCate = await categoryModel.getAllCate();
      let getTop10 = await productModel.getTop10PD();
      let getNew = await productModel.getNewPD();
      let getSale = await productModel.getSalePD();
      let getFeatured = await productModel.getFeaturedPD();
      res.render("site/home", {
        category: getCate,
        top10PD: getTop10,
        newPD: getNew,
        salePD: getSale,
        featuredPD: getFeatured,
      });
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new HomeController();
