const express = require("express");
const requirmentRoute = express.Router();
const auth = require('../../middlewares/auth')
// controller
const {
  requirementController,
  freeTextController,
  multiChoiceController,
  singleChoiceController,
  requirementDelete,
  freeTextUpdate,
  singleChoiceUpdate,
  multipleChoiceUpdate,
  getjobcontroller
} = require("./controller/requirment_controller");
const{getAllQuestion} =require('./controller/getAllQuestion_controller')
const{requiermentsRouterUpdate} =require('./controller/updateJob_controller')
const{getQuestionId} =require('./controller/getQuestion_by_id_controller')
const {getjobcontrollerById} = require("./controller/getJobById")
const {interviewPost} = require('./controller/interview.post.controller.js')
const {connectedPost} = require('./controller/connected.post.controller.js')
const {rejectedPost} = require('./controller/rejected.post.controller.js')
requirmentRoute.post("/job", auth , requirementController);
requirmentRoute.post("/job/freetext/:id([0-9a-fA-F]{24})", auth ,freeTextController);
requirmentRoute.post(
  "/job/multichoice/:id([0-9a-fA-F]{24})",auth,
  multiChoiceController
);
requirmentRoute.post(
  "/job/singlechoice/:id([0-9a-fA-F]{24})",auth,
  singleChoiceController
);
requirmentRoute.delete("/job/delete/:id([0-9a-fA-F]{24})", requirementDelete);
requirmentRoute.put(
  "/job/update/:id([0-9a-fA-F]{24})",
  requiermentsRouterUpdate
);
requirmentRoute.put(
  "/job/free_text_update/:jobid([0-9a-fA-F]{24})/:freetextid([0-9a-fA-F]{24})",auth,
  freeTextUpdate
);
requirmentRoute.put(
  "/job/single_choice_update/:jobid([0-9a-fA-F]{24})/:singlechoiceid([0-9a-fA-F]{24})",auth,
  singleChoiceUpdate
);
requirmentRoute.put(
  "/job/multiple_choice_update/:jobid([0-9a-fA-F]{24})/:multiplechoiceid([0-9a-fA-F]{24})",auth,
  multipleChoiceUpdate
);
requirmentRoute.get('/job',getjobcontroller)
requirmentRoute.get('/job/:jobid',getjobcontrollerById)
requirmentRoute.get('/job/question/all',getAllQuestion)
requirmentRoute.get('/job/question/:jobid',getQuestionId)

requirmentRoute.post('/job/interview',interviewPost) 
requirmentRoute.post('/job/connected',connectedPost)
requirmentRoute.post('/job/rejected',rejectedPost)

module.exports = requirmentRoute;
