const Prisma = require("../../../../config/helper");
async function updateForApplicant(req,res){
    const id= req.params.applyid
    console.log(id)
    try{
        const data = await Prisma.apply.update({
            where:{
                id:id
            },
            data :{
                status :req.body.status
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
module.exports ={updateForApplicant}