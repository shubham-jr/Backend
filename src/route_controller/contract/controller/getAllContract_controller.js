
const Prisma = require("../../../../config/helper.js");
async function getAllContract(req, res) {
   
    const job_id = req.params.jobid
    try {
      const res_ = await Prisma.employee.findUnique({
        where: {
          job_id:job_id   
        },
      });
      const res_1 = await Prisma.Aprafund.findUnique({
        where: {
          job_id:job_id
        },
      });
      const res_2 = await Prisma.SmsfFund.findUnique({
        where: {
          job_id:job_id
        },
      });
      const res_3 = await Prisma.SuperFund.findUnique({
        where: {
          job_id:job_id
        },
      });
      const res_4 = await Prisma.BakeryIndcution.findUnique({
        where: {
          job_id:job_id
        },
      });
      const res_5 = await Prisma.TaxFileDeclaration.findUnique({
        where: {
          job_id:job_id
        },
      });
      const res_6 = await Prisma.FairWork.findUnique({
        where: {
          job_id:job_id
        },
      });
      const res_7 = await Prisma.PolicyDocument.findUnique({
        where: {
          job_id:job_id
        },
      });
      const res_8 = await Prisma.PolicyDocumentSheet.findUnique({
        where: {
          job_id:job_id
        },
      });
      res.status(200).json({
        res_,
        res_1,
        res_2,
        res_3,
        res_4,
        res_5,
        res_6,
        res_7,
        res_8
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ err: err });
    }
  }
  module.exports = { getAllContract };