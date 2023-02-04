const Prisma = require("../../../../config/helper")

async function multi_choice(req,res){
    const id = req.params   .multiid
    try{
        const exist = await Prisma.multiple_choice.findUnique({
            where:{
                id:id
            }
        })
        if (exist){
           try{  
            const data = await Prisma.multiple_choice_save.create({
                data:{
                     question_id:id,
                     job_id:req.body.job_id,
                     answer:req.body.answer
                }
            })
            res.status(200).json({
                data:data
            })
           }catch(err){
            console.log(err)
            res.status(500).json({
                err:err
            })
           }
        } 
    }
    catch(err){
        console.log(err)
        res.status(500).json({
            err:err
        })
    }
}
module.exports= {multi_choice}