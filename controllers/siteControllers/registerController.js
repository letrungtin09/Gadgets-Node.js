const categoryModel = require("../../models/categoriesModel");
const userModel = require("../../models/usersModel");

class RegisterController {
  async register(req, res) {
    try {
      let getCate = await categoryModel.getAllCate();
      res.render("site/register", {
        category: getCate,
      });
    } catch (err) {
      console.error(err);
    }
  }

  async registerUser(req, res) {
    try {
      let getEmail = req.body.email;
      let getPassword = req.body.password;
      let getConfirmPassword = req.body.confirmPassword;
      let getFullName = req.body.fullName;
      let newUser = [getFullName, getEmail, getPassword];
      if (getPassword == getConfirmPassword) {
        let postUser = await userModel.addUser(newUser);
        res.redirect("/login");
      } else {
        res.redirect("/register");
      }
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new RegisterController();
