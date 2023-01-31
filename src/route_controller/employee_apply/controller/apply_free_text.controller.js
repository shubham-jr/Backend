const Prisma = require("../../../../config/helper")

async function free_question(req,res){
    const id = req.body.id
    try{
        const exist = await Prisma.Free_text.findUnique({
            where:{
                id:id
            }
        })
        if (exist){
           try{  
            const data = await Prisma.
           }catch(err){
            console.log(err)
            res.status(500).json9{
                err:err
            }
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