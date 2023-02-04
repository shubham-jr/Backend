const Prisma = require("../../../../config/helper.js");
async function postPersonal(req, res) {
  const data = req.body;
  try {
    const res_ = await Prisma.after_contacted.create({
      data: {
        ...data,
      },
    });
    res.status(200).json({
      data: res_,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: err });
  }
}
module.exports = { postPersonal };
