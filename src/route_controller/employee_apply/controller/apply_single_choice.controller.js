const Prisma = require("../../../../config/helper")

async function single_choice(req,res){
    const id = req.body.id
    try{
        const exist = await Prisma.single_choice.findUnique({
            where:{
                id:id
            }
        })
        if (exist){
           try{  
            const data = await Prisma.single_choice_save.create({
                where:{
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
module.exports= {single_choice}