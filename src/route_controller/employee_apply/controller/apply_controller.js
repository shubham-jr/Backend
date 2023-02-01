const Prisma = require("../../../../config/helper");

async function apply_job_controller(req, res) {
  const data = req.body;
  const id = req.params.jobid;
  console.log(id)
  try {
    const ifexist = await Prisma.job.findUnique({
      where: {
        id: id,
      },
    });
    if (ifexist) {
      try {
        const info = await Prisma.apply.create({
          data: {
            ...data,
          },
        });
        res.status(200).json({
          data: info,
        });
      } catch (err) {
        console.log(err);
        res.status(500).json({
          err: err,
        });
      }
    } else {
      res.status(500).json({
        data: "NOt found",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      err: err,
    });
  }
}
module.exports = { apply_job_controller};
