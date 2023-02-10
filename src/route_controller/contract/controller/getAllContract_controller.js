
const Prisma = require("../../../../config/helper.js");
async function getAllContract(req, res) {
    const apply_id= req.params.applyid;
    const job_id = req.params.jobid
    try {
      const res_ = await Prisma.After_contacted.findUnique({
        where: {
          apply_id:apply_id
        },
      });
      const res_1 = await Prisma.Aprafund.findUnique({
        where: {
          apply_id:apply_id
        },
      });
      const res_2 = await Prisma.SmsfFund.findUnique({
        where: {
          apply_id:apply_id
        },
      });
      const res_3 = await Prisma.SuperFund.findUnique({
        where: {
          apply_id:apply_id
        },
      });
      const res_4 = await Prisma.BakeryIndcution.findUnique({
        where: {
          apply_id:apply_id
        },
      });
      const res_5 = await Prisma.TaxFileDeclaration.findUnique({
        where: {
          apply_id:apply_id
        },
      });
      const res_6 = await Prisma.FairWork.findUnique({
        where: {
          apply_id:apply_id
        },
      });
      const res_7 = await Prisma.PolicyDocument.findUnique({
        where: {
          apply_id:apply_id
        },
      });
      const res_8 = await Prisma.PolicyDocumentSheet.findUnique({
        where: {
          apply_id:apply_id
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