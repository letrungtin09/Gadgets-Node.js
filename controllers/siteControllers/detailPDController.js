const productModel = require("../../models/productsModel");
const categoryModel = require("../../models/categoriesModel");

class DetailPDController {
  async detailPD(req, res) {
    let idPD = req.params.idProduct;
    try {
      let getCate = await categoryModel.getAllCate();
      let getPD = await productModel.getPDId(idPD);
      let getPDCate = await productModel.getPDCate(getPD[0].idCategory);

      res.render("site/detailProduct", {
        category: getCate,
        detail: getPD,
        productCate: getPDCate,
      });
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new DetailPDController();
