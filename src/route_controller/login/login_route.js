const express = require("express");
const loginRoute = express.Router();
// controller het included here

const { loginController } = require("./login_controller.js");

loginRoute.post("/login", loginController);
module.exports = loginRoute;
