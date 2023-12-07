const { db, useSQL, useValueSQL } = require("./database");

class CategoryModel {
  // Lấy tất cả loại sản phẩm
  async getAllCate() {
    let sql = "SELECT * FROM categories";
    try {
      let data = await useSQL(db, sql);
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  // Lấy loại sản phẩm theo idCategory
  async getCateId(id) {
    let sql = "SELECT * FROM categories WHERE idCategory = ?";
    try {
      let data = await useValueSQL(db, sql, id);
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  // Thêm loại sản phẩm mới
  async addCate(values) {
    let sql = "INSERT INTO categories(nameCategory) VALUES (?)";
    try {
      let data = await useValueSQL(db, sql, values);
    } catch (err) {
      throw err;
    }
  }

  // Cập nhật thông tin loại sản phẩm
  async updateCate(values) {
    let sql = "UPDATE categories SET nameCategory=? WHERE idCategory = ?";
    try {
      let data = await useValueSQL(db, sql, values);
    } catch (err) {
      throw err;
    }
  }

  // Xóa loại sản phẩm
  async deleteCate(idCate) {
    let sql = `DELETE FROM categories WHERE idCategory = ?`;
    try {
      let data = await useValueSQL(db, sql, idCate);
    } catch (err) {
      throw err;
    }
  }
}

module.exports = new CategoryModel();
