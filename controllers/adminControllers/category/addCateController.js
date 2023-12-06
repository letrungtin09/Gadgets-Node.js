const categoryModel = require("../../../models/categoriesModel");

class AddCateController {
  async showAddCate(req, res) {
    try {
      res.render("admin/category/addCategory");
    } catch (err) {
      console.error(err);
    }
  }

  async addCate(req, res) {
    try {
      let getNameCate = req.body.nameCate;
      let postData = await categoryModel.addCate(getNameCate);
      res.redirect("/adminCate");
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new AddCateController();
