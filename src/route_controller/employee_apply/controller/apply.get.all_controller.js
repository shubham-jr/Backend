const Prisma = require("../../../../config/helper");
async function getAllApply(req,res){
    const id= req.params.jobid
    console.log(id)
    try{
        const data = await Prisma.apply.findMany({
            where:{
                job_id:id
            }
        })
        res.status(200).json({
            data:data
        })
    }catch(err){
        res.status(500).json({
            err:err
        })
    }
}
module.exports ={getAllApply}