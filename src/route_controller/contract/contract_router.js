const express = require("express");
const contract = express.Router();
const{postPersonal} = require('./controller/postPersonal.js')
const {postApra} =require('./controller/postApraFund')
const {postSmsf} =require('./controller/postSmsf')
const {postSuperFund} =require('./controller/postSuperFund')

contract.post('/contract/personal',postPersonal)
contract.post('/contract/apra',postApra)
contract.post('/contract/smsf',postSmsf)
contract.post('/contract/superfund',postSuperFund)

module.exports =contract