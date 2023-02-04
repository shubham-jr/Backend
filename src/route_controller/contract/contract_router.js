const express = require("express");
const contract = express.Router();
const{postPersonal} = require('./controller/postPersonal.js')
const {postApra} =require('./controller/postApraFund')
const {postSmsf} =require('./controller/postSmsf')

contract.post('/contract/personal',postPersonal)
contract.post('/contract/apra',postApra)

module.exports =contract