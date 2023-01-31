const express = require("express");
const apply = express.Router();
const auth = require("../../middlewares/auth");
const {apply_job_controller}= require("./controller/apply_controller")

apply.post('/apply/job/:jobid',apply_job_controller);


module.exports = apply