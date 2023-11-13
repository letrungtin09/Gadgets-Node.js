// Khai báo sử dụng express
const express = require("express");
const app = express();
const port = 3000;
let mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "gadgets_nodejs",
});

// Sử dụng express.urlencoded() để xử lý dữ liệu POST
app.use(express.urlencoded({ extended: true }));

// Cấu hình EJS làm template engine
app.set("view engine", "ejs");
app.set("views", "./views");

// Cấu hình phục vụ tài nguyên tĩnh từ thư mục public
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Ứng dụng đang chạy với port: ${port}`);
});
