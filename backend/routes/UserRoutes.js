const express = require("express");
const {
  registerUser,
  authUser,
  searchUser,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

const Router = express();

Router.route("/register").post(registerUser);

Router.route("/login").post(authUser);
Router.route("/search").get(protect, searchUser);

module.exports = Router;
