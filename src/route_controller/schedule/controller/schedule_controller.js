const Prisma = require("../../../../config/helper");
async function schedule_post(req, res) {
  const { body } = req;
  try {
    if (!body.day || !body.date) {
      return res.status(500).json({
        mesagge: "enter date and day",
      });
    }
    const data = await Prisma.schdeule.create({
      data: {
        employee:body.employee,
        user: req.user.id,
        day: body.day,
        date: body.date,
        from: body.from,
        to: body.to,
        break_time: body.break_time,
        shift_length: body.to - body.from,
        avg_daily: "",
        avg_daily_cost: "",
        shiftcost: body.shiftcost,
        leave: body.leave,
      },
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
module.exports = { schedule_post };
