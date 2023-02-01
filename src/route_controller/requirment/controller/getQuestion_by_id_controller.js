const Prisma = require("../../../../config/helper");
async function getQuestionId(req,res){
    const id = req.params.jobid
    try{
        const free = await Prisma.free_text.findMany({
            where:{
                job_id:id
            }
        })
        const single =  await Prisma.single_choice.findMany({
            where:{
                job_id:id
            }
        })
        const multiple = await Prisma.multiple_choice.findMany({
            where :{
                job_id:id
            }
        })
        res.status(200).json({
            free:free,
            single:single,
            multiple:multiple
        })
    }catch(err){
        res.status(500).json({
            data:err
        })
    }
    
}
module.exports={getQuestionId}