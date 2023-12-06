const categoryModel = require("../../models/categoriesModel");
const userModel = require("../../models/usersModel");

class LoginController {
  async login(req, res) {
    try {
      let getCate = await categoryModel.getAllCate();
      res.render("site/login", {
        category: getCate,
      });
    } catch (err) {
      console.error(err);
    }
  }

  async loginUser(req, res) {
    try {
      let getEmail = req.body.email;
      let getPassword = req.body.password;
      let getAllUser = await userModel.getAllUser();
      for (let i = 0; i < getAllUser.length; i++) {
        if (
          getAllUser[i].email == getEmail &&
          getAllUser[i].password == getPassword
        ) {
          if (getAllUser[i].role == 0) {
            res.redirect("/");
          } else {
            res.redirect("/admin");
          }
        }
      }
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new LoginController();
