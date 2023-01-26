const Prisma = require("../../../../config/helper");
async function item_get(req, res) {
  try {
    const data = await Prisma.Item.findMany({
        where:{
            user:req.user.id
        }
    });
    return res.status(200).json({
      message: data,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      json: error,
    });
  }
}
module.exports = { item_get };
