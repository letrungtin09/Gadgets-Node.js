const productsModel = require("../../../models/productsModel");

class DeletePDController {
  async deletePD(req, res) {
    try {
      let getIdPD = req.params.idProduct;
      let deleteData = await productsModel.deleteProduct(getIdPD);
      res.redirect("/admin");
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new DeletePDController();
