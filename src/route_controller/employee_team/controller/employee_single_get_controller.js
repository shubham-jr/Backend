const Prisma = require("../../../../config/helper");
async function getEmployeeSingle(req,res){
    const id = req.params.empid;
    try{
    const data = await Prisma.employee.findUnique({
        where:{
            id :id
        }
    })
    res.status(200).json({
        data:data
    })
}catch(e){
    console.log(err)
    res.status(500).json({
        err:err
    })
}
}
module.exports ={getEmployeeSingle}