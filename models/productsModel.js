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

  //   async postProduct(values) {
  //     let sql =
  //       "INSERT INTO products(nameProduct, images, description, priceProduct, authorProduct, idCategory) VALUES (?,?,?,?,?,?)";
  //     try {
  //       let data = await useValueSQL(db, sql, values);
  //     } catch (err) {
  //       throw err;
  //     }
  //   }

  //   async postUpdateProduct(values) {
  //     let sql =
  //       "UPDATE products SET nameProduct=?, images=?, description=?, priceProduct=?, authorProduct=?, idCategory=? WHERE idProduct = ?";
  //     try {
  //       let data = await useValueSQL(db, sql, values);
  //     } catch (err) {
  //       throw err;
  //     }
  //   }

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
