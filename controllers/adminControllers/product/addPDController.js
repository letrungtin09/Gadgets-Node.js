const categoryModel = require("../../../models/categoriesModel");
const path = require("path");
const productsModel = require("../../../models/productsModel");

class AddPDController {
  async showAddPD(req, res) {
    try {
      let getAllCate = await categoryModel.getAllCate();
      res.render("admin/product/addProduct", {
        category: getAllCate,
      });
    } catch (err) {
      console.error(err);
    }
  }

  async addPD(req, res) {
    try {
      let namePD = req.body.namePD;
      let pricePD = req.body.pricePD;
      let idCategory = req.body.idCate;
      let featuredPD = req.body.featuredPD;
      let salePD = req.body.salePD;
      let brandPD = req.body.brandPD;
      let imagePD = req.file.filename;

      let newProduct = [
        namePD,
        imagePD,
        +pricePD,
        +salePD,
        +featuredPD,
        +idCategory,
        brandPD,
      ];
      let postData = await productsModel.addProduct(newProduct);
      res.redirect("/admin");
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new AddPDController();
