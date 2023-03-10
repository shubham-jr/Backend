const express = require("express");
const employee_Route = express.Router();
const auth = require("../../middlewares/auth");
const { createEmp } = require("./controller/createEmp_controller.js");
const { uploadfile } = require("./controller/uploadfile_controller");
const {employee_get_controller} = require('./controller/employee_get_controller')
const {fileUploadMiddleware} = require("../../middlewares/upload")
const {getEmployeeSingle} = require('./controller/employee_single_get_controller')
const {updateEmployeeSingle} = require('./controller/employee_single_update_controller')
const {deleteEmployeeSingle} = require('./controller/employee_single_delete_controller')
employee_Route.post(
  "/createEmployee/:userId",auth,
  createEmp
);

employee_Route.post(
  "/Employee/upload",
  fileUploadMiddleware,
  uploadfile
);

// employee_Route.put(
//   "/updateEmployee/:userId/:empId",
//   updateEmployee
// );

employee_Route.get("/getEmployees" ,employee_get_controller);
employee_Route.get("/getEmployees/:empid" ,getEmployeeSingle);
employee_Route.put("/updateEmployees/:empid" ,auth,updateEmployeeSingle);
employee_Route.delete("/deleteEmployees/:empid" ,auth,deleteEmployeeSingle);
// employee_Route.get(
//   "/getEmployee/:userId/:empId",
//   getEmployeeById
// );

// employee_Route.delete(
//   "/deleteEmployee/:userId/:EmpId",
//   DeleteEmployee
// );
module.exports = employee_Route;

// uploadfile,
// updateEmployee,
// getEmployeeByFilters,
// getEmployeeById,
// DeleteEmployee,
