const express = require("express");
const inventory_route = express.Router();
const auth = require("../../middlewares/auth");
const {item_create} = require("./controller/inventory_post_ceontroller")
const {item_get} = require("./controller/inventory_get_controller")

inventory_route.post('/inventory',auth ,item_create)
inventory_route.get('/inventory',auth ,item_get)
module.exports  = inventory_route