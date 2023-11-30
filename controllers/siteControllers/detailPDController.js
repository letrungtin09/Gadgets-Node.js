const productModel = require("../../models/productsModel");
const categoryModel = require("../../models/categoriesModel");

// Hàm chuyển object buffer thành json
function bufferJson(img) {
  const buffer = Buffer.from(img, "utf-8");
  // Chuyển đổi Buffer thành đối tượng JSON
  const jsonObj = JSON.parse(buffer.toString("utf-8"));
  return jsonObj;
}

class DetailPDController {
  async detailPD(req, res) {
    let idPD = req.params.idProduct;
    try {
      let getCate = await categoryModel.getAllCate();
      let getPD = await productModel.getPDId(idPD);

      const imgNav = bufferJson(getPD[0].imagesNav);
      const arrImgNav = imgNav.imagesNav;

      const imgZoom = bufferJson(getPD[0].imagesZoom);
      const arrImgZoom = imgZoom.imagesZoom;

      res.render("site/detailProduct", {
        category: getCate,
        detail: getPD,
        arrImgNav,
        arrImgZoom,
      });
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new DetailPDController();
