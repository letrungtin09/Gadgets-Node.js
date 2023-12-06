const categoryModel = require("../../../models/categoriesModel");

class DeleteCateController {
  async deleteCate(req, res) {
    try {
      let getIdCate = req.params.idCategory;
      let deleteData = await categoryModel.deleteCate(getIdCate);
      res.redirect("/adminCate");
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new DeleteCateController();
