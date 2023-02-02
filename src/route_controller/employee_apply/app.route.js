const express = require("express");
const apply = express.Router();
const auth = require("../../middlewares/auth");
const {apply_job_controller}= require("./controller/apply_controller")
const {free_question}= require("./controller/apply_free_text.controller")
const {single_choice}= require("./controller/apply_single_choice.controller")
const {multi_choice}= require("./controller/apply_multi_choice.controller")
const {getAllApply}= require("./controller/apply.get.all_controller")
apply.post('/apply/job/:jobid',apply_job_controller);
apply.post('/apply/job/free/:freeid',free_question);
apply.post('/apply/job/single/:singleid',single_choice);
apply.post('/apply/job/multi/:multiid',multi_choice);
apply.get('/apply/:jobid',getAllApply)

module.exports = apply