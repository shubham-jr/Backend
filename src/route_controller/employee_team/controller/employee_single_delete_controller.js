const Prisma = require("../../../../config/helper.js");
async function deleteEmployeeSingle(req,res){
   
   try{
    const data = await Prisma.employee.delete({
        where:{
            id :req.params.empid
        }
    })
    res.status(200).json({
        data:data
    })
   } catch(err){
    console.log(err)
    res.status(500).json({
        err:err
    })
   }
}

module.exports= {deleteEmployeeSingle}