const express = require("express");
const requirmentRoute = express.Router();
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
} = require("./requirment_controller.js");

requirmentRoute.post("/job", requirementController);
requirmentRoute.post("/job/freetext/:id([0-9a-fA-F]{24})", freeTextController);
requirmentRoute.post(
  "/job/multichoice/:id([0-9a-fA-F]{24})",
  multiChoiceController
);
requirmentRoute.post(
  "/job/singlechoice/:id([0-9a-fA-F]{24})",
  singleChoiceController
);
requirmentRoute.delete("/job/delete/:id([0-9a-fA-F]{24})", requirementDelete);
requirmentRoute.put(
  "/job/delete/:id([0-9a-fA-F]{24})",
  requiermentsRouterUpdate
);
requirmentRoute.put(
  "/job/free_text_update/:jobid([0-9a-fA-F]{24})/:freetextid([0-9a-fA-F]{24})",
  freeTextUpdate
);
requirmentRoute.put(
  "/job/single_choice_update/:jobid([0-9a-fA-F]{24})/:singlechoiceid([0-9a-fA-F]{24})",
  singleChoiceUpdate
);
requirmentRoute.put(
  "/job/multiple_choice_update/:jobid([0-9a-fA-F]{24})/:multiplechoiceid([0-9a-fA-F]{24})",
  multipleChoiceUpdate
);

module.exports = requirmentRoute;
