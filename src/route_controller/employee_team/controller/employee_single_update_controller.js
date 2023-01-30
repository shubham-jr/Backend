const Prisma = require("../../../../config/helper.js");
async function updateEmployeeSingle (req,res){
    const {
        PayrollGroup,
        Branch,
        Department
    } = req.body

    try {
        if(PayrollGroup){
            const data = await Prisma.employee.update({
                where:{
                    id : req.params.empid
                },
                data:{
                    PayrollGroup:PayrollGroup
                }
            })
            res.status(200).json({
                data:data
            })
        }
        if(Branch){
            const data = await Prisma.employee.update({
                where:{
                    id : req.params.empid
                },
                data:{
                    Branch:Branch
                }
            })
            res.status(200).json({
                data:data
            })
        }
        if(Department){
            const data = await Prisma.employee.update({
                where:{
                    id : req.params.empid
                },
                data:{
                    Department:Department
                }
            })
            res.status(200).json({
                data:data
            })
        }
    }catch(err){
        console.log(err)
        res.status(500).json({
            err:err
        })
    }
}

module.exports = {updateEmployeeSingle}