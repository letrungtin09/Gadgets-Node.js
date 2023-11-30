const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "gadgets_nodejs",
});
db.connect(function (err) {
  if (err) throw err;
  console.log("Kết nối database thành công!");
});

// Hàm thực hiện sql để lấy data
function useSQL(db, sql) {
  return new Promise((resolve, reject) => {
    db.query(sql, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}
// Hàm thực hiện sql để lấy data theo values
function useValueSQL(db, sql, values) {
  return new Promise((resolve, reject) => {
    db.query(sql, values, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

module.exports = { db, useSQL, useValueSQL };
