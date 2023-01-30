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
  requiermentsRouterUpdate,
  freeTextUpdate,
  singleChoiceUpdate,
  multipleChoiceUpdate,
  getjobcontroller
} = require("./requirment_controller.js");
const{getAllQuestion} =require('./getAllQuestion_controller')

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
  "/job/delete/:id([0-9a-fA-F]{24})",auth,
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
requirmentRoute.get('/job/question/:questionId',getAllQuestion)

module.exports = requirmentRoute;
