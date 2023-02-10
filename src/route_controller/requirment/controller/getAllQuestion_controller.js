const Prisma = require("../../../../config/helper");
async function getAllQuestion(req,res){
    const id = req.params.questionId;
    console.log(id)
    try{
        const free = await Prisma.Free_text.findMany()
        const singlechoice = await Prisma.Single_choice.findMany()
        const multiplechoice = await Prisma.Multiple_choice.findMany()
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