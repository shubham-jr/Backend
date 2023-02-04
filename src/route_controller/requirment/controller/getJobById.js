const Prisma = require("../../../../config/helper");
async function getjobcontrollerById(req,res){
    const id = req.params.jobid
    try{
    const data = await Prisma.job.findUnique({
        where:{
            id:id
        }
    })
    res.status(200).json({
      data:data
   })
    }catch(err){
      console.log(err)
      res.status(500).json({
         data:"data not found errorg"
      })
    }
  }
  module.exports= {getjobcontrollerById}