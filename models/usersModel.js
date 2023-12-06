const { db, useSQL, useValueSQL } = require("./database");

class UserModel {
  // Lấy tất cả tài khoản
  async getAllUser() {
    let sql = "SELECT * FROM users";
    try {
      let data = await useSQL(db, sql);
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  // Đăng ký tài khoản mới
  async addUser(values) {
    let sql = "INSERT INTO users(fullName, email, password) VALUES (?,?,?)";
    try {
      let data = await useValueSQL(db, sql, values);
    } catch (err) {
      throw err;
    }
  }
}
module.exports = new UserModel();
