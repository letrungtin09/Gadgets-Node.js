// Khai báo sử dụng express
const express = require("express");
const app = express();
const port = 3000;

const route = require("./routes");
const db = require("./models/database");

// Sử dụng express.urlencoded() để xử lý dữ liệu POST
app.use(express.urlencoded({ extended: true }));

// Cấu hình EJS làm template engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// Cấu hình phục vụ tài nguyên tĩnh từ thư mục public
app.use(express.static("public"));

// Routes init
route(app);

app.listen(port, () => {
  console.log(`Ứng dụng đang chạy với port: ${port}`);
});
