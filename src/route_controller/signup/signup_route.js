const express = require("express");
const signupRoute = express.Router();
//taking controller here

const { signupController } = require("./signup_controller.js");

signupRoute.post("/signup", signupController);

module.exports = signupRoute;
