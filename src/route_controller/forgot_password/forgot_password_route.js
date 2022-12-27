const express = require("express");
const forgotRoute = express.Router();

const {
  forgotController,
  forgotControllerOtpVerify,
  forgotControllerPasswordUpdate,
} = require("./forgot_password_controller.js");
forgotRoute.post("/forgot", forgotController);
forgotRoute.post("/forgot/otp", forgotControllerOtpVerify);
forgotRoute.post("/forgot/passwordupdate", forgotControllerPasswordUpdate);

module.exports = forgotRoute;
