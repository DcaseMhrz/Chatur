const express = require("express");
const { registerUser, authUser } = require("../controllers/userController");

const Router = express();

Router.route("/register").post(registerUser);

Router.route("/login").post(authUser);

module.exports = Router;
