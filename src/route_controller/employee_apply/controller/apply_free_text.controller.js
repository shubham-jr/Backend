const Prisma = require("../../../../config/helper")

async function free_question(req,res){
    const id = req.params.freeid
    console.log(id)
    try{
        const exist = await Prisma.Free_text.findUnique({
            where:{
                id:id
            }
        })
        if (exist){
           try{  
            const data = await Prisma.free_text_save.create({
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
module.exports= {free_question}