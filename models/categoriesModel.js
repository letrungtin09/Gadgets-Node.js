const { db, useSQL, useValueSQL } = require("./database");

class CategoryModel {
  async getAllCate() {
    let sql = "SELECT * FROM categories";
    try {
      let data = await useSQL(db, sql);
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  async getCateId(id) {
    let sql = "SELECT * FROM catelog WHERE idCategory = ?";
    try {
      let data = await useValueSQL(db, sql, id);
      return data;
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new CategoryModel();
