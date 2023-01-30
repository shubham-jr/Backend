const Prisma = require("../../../../config/helper.js");
async function requiermentsRouterUpdate(req, res) {
    const {
      job_title,
      select_department,
      select_branch,
      job_description,
      job_type,
      salary_type,
      salary,
      status,
      city,
    } = req.body;
    console.log(req.body)
    const job_id = req.params.id;
    var count = 0;
    if (!job_id) {
      res.status(400).json({
        user_id_not_found: "user id not found",
      });
    } else {
      const user = await Prisma.job.findUnique({
        where: {
          id: job_id,
        },
      });
      if (!user) {
        res.status(400).json({
          no_job_found_with_id: "no job found with this id ",
        });
      } else {
       try{
        if (job_title) {
          await Prisma.job.update({
            where: {
              id: job_id,
            },
            data: {
              job_title: job_title,
            },
          });
          count++;
        }
  
        if (select_branch) {
          await Prisma.job.update({
            where: {
              id: job_id,
            },
            data: {
              select_branch: select_branch,
            },
          });
          count++;
        }
        if (typeof(status) == "boolean") {
          await Prisma.job.update({
            where: {
              id: job_id,
            },
            data: {
              status: status,
            },
          });
          count++;
        }
  
        if (select_department) {
          await Prisma.job.update({
            where: {
              id: job_id,
            },
            data: {
              job_title: job_title,
            },
          });
          count++;
        }
        if (job_type) {
          await Prisma.job.update({
            where: {
              id: job_id,
            },
            data: {
              job_title: job_type,
            },
          });
          count++;
        }
  
        if (job_description) {
          await Prisma.job.update({
            where: {
              id: job_id,
            },
            data: {
              job_description: job_description,
            },
          });
          count++;
        }
  
        if (salary_type) {
          await Prisma.job.update({
            where: {
              id: job_id,
            },
            data: {
              salary_type: salary_type,
            },
          });
          count++;
        }
        if (salary) {
          await Prisma.job.update({
            where: {
              id: job_id,
            },
            data: {
              salary: salary,
            },
          });
          count++;
        }
        if (city) {
          await Prisma.job.update({
            where: {
              id: job_id,
            },
            data: {
              city: city,
            },
          });
          count++;
        }
  
        if (count > 0) {
          res.status(200).json({
            changes_done_on_number_fiels: count,
          });
        } else {
          res.status(200).json({
            no_changes_done: "no changes get done",
          });
        }
       }
       catch(err){
        console.log(err)
        res.status(500).json({
          err :err
        })
       }
      }
    }
  }
  module.exports = {requiermentsRouterUpdate}
  