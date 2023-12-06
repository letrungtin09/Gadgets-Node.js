const categoryModel = require("../../../models/categoriesModel");
const productsModel = require("../../../models/productsModel");

class UpdatePDController {
  async showUpdatePD(req, res) {
    try {
      let idPD = req.params.idProduct;
      let getAllCate = await categoryModel.getAllCate();
      let getPDId = await productsModel.getPDId(idPD);
      res.render("admin/product/updateProduct", {
        category: getAllCate,
        product: getPDId,
      });
    } catch (err) {
      console.error(err);
    }
  }

  async updatePD(req, res) {
    try {
      let idPD = req.body.idPD;
      let namePD = req.body.namePD;
      let pricePD = req.body.pricePD;
      let idCategory = req.body.idCate;
      let featuredPD = req.body.featuredPD;
      let salePD = req.body.salePD;
      let brandPD = req.body.brandPD;
      let imagePD = req.file ? req.file.filename : req.body.imgOldPD;
      let newProduct = [
        namePD,
        imagePD,
        +pricePD,
        +salePD,
        +featuredPD,
        +idCategory,
        brandPD,
        +idPD,
      ];
      let putData = await productsModel.updateProduct(newProduct);
      res.redirect("/admin");
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new UpdatePDController();
