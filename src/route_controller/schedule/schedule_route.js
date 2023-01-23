const express = require("express");
const schedule_route = express.Router();
const auth = require("../../middlewares/auth");
const {schedule_post} = require("./controller/schedule_controller")

schedule_route.post('/schedule/:empid',auth ,schedule_post)
module.exports  = schedule_route