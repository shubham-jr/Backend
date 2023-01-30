const Prisma = require("../../../../config/helper");
async function getAllQuestion(req,res){
    const id = req.params.questionId;
    console.log(id)
    try{
        const free = await Prisma.Free_text.findMany({
            where:{
                job_id : id
            }
        })
        const singlechoice = await Prisma.Free_text.findMany({
            where:{
                job_id : id
            }
        })
        const multiplechoice = await Prisma.Free_text.findMany({
            where:{
                job_id : id
            }
        })
        res.status(200).json({
            free : free,
            singlechoice :singlechoice,
            multiplechoice :multiplechoice
        
        })
    }catch(err)
    {
        console.log(err)
        res.status(500).json({
            err:err
        })
    }
}
module.exports = {getAllQuestion}