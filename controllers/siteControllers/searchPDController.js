const productModel = require("../../models/productsModel");
const categoryModel = require("../../models/categoriesModel");

class SearchPDController {
  async searchPD(req, res) {
    let getWord = req.params.keyword;
    let keywords = [`%${getWord}%`, `%${getWord}%`];
    try {
      let getCate = await categoryModel.getAllCate();
      let getSearchPD = await productModel.searchPD(keywords);
      res.render("site/searchProduct", {
        category: getCate,
        searchProducts: getSearchPD,
        searchWord: getWord,
      });
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new SearchPDController();
