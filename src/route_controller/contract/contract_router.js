const express = require("express");
const contract = express.Router();
const{postPersonal} = require('./controller/postPersonal.js')
const {postApra} =require('./controller/postApraFund')
const {postSmsf} =require('./controller/postSmsf')
const {postSuperFund} =require('./controller/postSuperFund')
const {postBakeryInduction} =require('./controller/postBakeryInduction')
const {fileUploadMiddleware} = require("../../middlewares/upload")
const{uploadfile} = require("./controller/uploadfile_controller")
const{TaxFileDeclaration} = require("./controller/taxFileDeclaration") 
const{FairWork_PolicyDocument} = require("./controller/fairwork_policydocument") 

contract.post('/contract/personal',postPersonal)
contract.post('/contract/apra',postApra)
contract.post('/contract/smsf',postSmsf)
contract.post('/contract/superfund',postSuperFund)
contract.post('/contract/BakeryIndcution',postBakeryInduction)
contract.post('/contract/TaxFileDeclaration',TaxFileDeclaration)
contract.post('/contract/fairwork',FairWork_PolicyDocument)


/// file upload route set

contract.post(
    "/contract/upload/apra",
    fileUploadMiddleware ,
    uploadfile
  );

module.exports =contract