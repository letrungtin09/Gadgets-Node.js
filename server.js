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
app.set("views", __dirname + "/views");

// Cấu hình phục vụ tài nguyên tĩnh từ thư mục public
app.use(express.static("public"));

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
// Hàm thực hiện sql để lấy data có truyền values
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
// Hàm chuyển object buffer thành json
function bufferJson(img) {
  const buffer = Buffer.from(img, "utf-8");
  // Chuyển đổi Buffer thành đối tượng JSON
  const jsonObj = JSON.parse(buffer.toString("utf-8"));
  return jsonObj;
}

// Show dữ liệt catelog và top 5 sản phẩm bán chạy trên trang chủ
app.get("/", async (req, res) => {
  let sql = "SELECT * FROM categories";
  // Sắp xếp giảm dần theo số lượt mua và giới hạn top 5 sản phẩm có lượt mua cao nhất làm top 5 bán chạy
  let sql2 = "SELECT * FROM products LIMIT 5";
  try {
    let getCate = await useSQL(db, sql);
    let getTop5 = await useSQL(db, sql2);
    res.render("site/home", { catelog: getCate, top5: getTop5 });
  } catch (err) {
    throw err;
  }
});

app.get("/detailProduct/:idProduct", async (req, res) => {
  let getIdPD = req.params.idProduct;
  let sql = "SELECT * FROM categories";
  // Sắp xếp giảm dần theo số lượt mua và giới hạn top 5 sản phẩm có lượt mua cao nhất làm top 5 bán chạy
  let sql2 = `SELECT * FROM products WHERE idProduct = ${getIdPD}`;
  try {
    let getCate = await useSQL(db, sql);
    let getProduct = await useSQL(db, sql2);

    const imgNav = bufferJson(getProduct[0].imagesNav);
    const arrImgNav = imgNav.imagesNav;

    const imgZoom = bufferJson(getProduct[0].imagesZoom);
    const arrImgZoom = imgZoom.imagesZoom;

    res.render("site/detailProduct", {
      catelog: getCate,
      product: getProduct,
      arrImgNav,
      arrImgZoom,
    });
  } catch (err) {
    throw err;
  }
});

app.listen(port, () => {
  console.log(`Ứng dụng đang chạy với port: ${port}`);
});
