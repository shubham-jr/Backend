const Prisma = require("../../../../config/helper");
async function employee_get_controller(req,res){
    try{
    const data = await Prisma.employee.findMany()
    res.status(200).json({
      data:data
   })
    }catch(err){
      console.log(err)
      res.status(500).json({
         data:"data not found errorg"
      })
    }
  }
  module.exports={employee_get_controller}
