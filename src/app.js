const express = require("express");
const app = express();
//including cors
const cors = require("cors");
//including body parser
const parse = require("body-parser");

//including cors {you can change it later}

app.use(
  cors({
    origin: "",
  })
);
//adding middleware
app.use(parse.json());
app.use(express.json());
//including routes export
const signupRoute = require("../src/route_controller/signup/signup_route");
const loginRoute = require("../src/route_controller/login/login_route");
const forgotRoute = require("../src/route_controller/forgot_password/forgot_password_route");
const requirementRoute = require("../src/route_controller/requirment/requirment_route.js");
const requirmentRoute = require("../src/route_controller/requirment/requirment_route.js");
//adding middleware for the custom routes
app.use(signupRoute);
app.use(loginRoute);
app.use(forgotRoute);
app.use(requirmentRoute);
//export the module

module.exports = app;
