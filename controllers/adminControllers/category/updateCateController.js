const categoryModel = require("../../../models/categoriesModel");

class UpdateCateController {
  async showUpdateCate(req, res) {
    try {
      let idCate = req.params.idCategory;
      let getCateId = await categoryModel.getCateId(idCate);
      res.render("admin/category/updateCategory", {
        category: getCateId,
      });
    } catch (err) {
      console.error(err);
    }
  }

  async updateCate(req, res) {
    try {
      let idCate = req.body.idCate;
      let nameCate = req.body.nameCate;
      let newCate = [nameCate, +idCate];
      let putData = await categoryModel.updateCate(newCate);
      res.redirect("/adminCate");
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new UpdateCateController();
