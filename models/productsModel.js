const { db, useSQL, useValueSQL } = require("./database");

class ProductModel {
  // Lấy các sản phẩm mới nhất
  async getNewPD() {
    let sql = "SELECT * FROM products ORDER BY idProduct DESC LIMIT 10";
    try {
      let data = await useSQL(db, sql);
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  // Lấy top 10 sản phẩm bán chạy
  async getTop10PD() {
    let sql = "SELECT * FROM products ORDER BY purchase DESC LIMIT 10";
    try {
      let data = await useSQL(db, sql);
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  // Lấy các sản phẩm có khuyến mãi
  async getSalePD() {
    let sql = "SELECT * FROM products WHERE sale > 0";
    try {
      let data = await useSQL(db, sql);
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  // Lấy các sản phẩm đặc biệt
  async getFeaturedPD() {
    let sql = "SELECT * FROM products WHERE featured = 1";
    try {
      let data = await useSQL(db, sql);
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  // Lấy tất cả sản phẩm
  async getAllPD() {
    let sql = "SELECT * FROM products";
    try {
      let data = await useSQL(db, sql);
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  // Lấy sản phẩm theo loại
  async getPDCate(idCate) {
    let sql = "SELECT * FROM products WHERE idCategory = ?";
    try {
      let data = await useValueSQL(db, sql, idCate);
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  // Lấy chi tiết sản phẩm
  async getPDId(idPD) {
    let sql = "SELECT * FROM products WHERE idProduct = ?";
    try {
      let data = await useValueSQL(db, sql, idPD);
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  // Đếm số lượng sản phẩm theo idCategory
  async countPD() {
    let sql =
      "SELECT cate.idCategory, COUNT(pd.idProduct) AS quantity FROM categories cate LEFT JOIN products pd ON cate.idCategory = pd.idCategory GROUP BY cate.idCategory";
    try {
      let data = await useSQL(db, sql);
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  // Tìm kiếm sản phẩm
  async searchPD(keywords) {
    let sql = `SELECT * FROM products pd JOIN categories cate ON cate.idCategory = pd.idCategory WHERE pd.nameProduct LIKE ? OR cate.nameCategory LIKE ?`;
    try {
      let data = await useValueSQL(db, sql, keywords);
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  // Thêm sản phẩm mới
  async addProduct(values) {
    let sql =
      "INSERT INTO products(nameProduct, image, price, sale, featured, idCategory, brand) VALUES (?,?,?,?,?,?,?)";
    try {
      let data = await useValueSQL(db, sql, values);
    } catch (err) {
      throw err;
    }
  }

  // Cập nhật thông tin sản phẩm
  async updateProduct(values) {
    let sql =
      "UPDATE products SET nameProduct=?, image=?, price=?, sale=?, featured=?, idCategory=?, brand=? WHERE idProduct = ?";
    try {
      let data = await useValueSQL(db, sql, values);
    } catch (err) {
      throw err;
    }
  }

  // Xóa sản phẩm
  async deleteProduct(idPD) {
    let sql = `DELETE FROM products WHERE idProduct = ?`;
    try {
      let data = await useValueSQL(db, sql, idPD);
    } catch (err) {
      throw err;
    }
  }
}
module.exports = new ProductModel();
