const Prisma = require("../../../config/helper.js");
var ObjectId = require("mongodb").ObjectId;
var mongoose = require("mongoose");
var data;
async function requirementController(req, res) {
  
  const {
    job_title,
    select_department,
    select_branch,
    job_description,
    job_type,
    Salary_type,
    Salary,
    status,
    city,
    user_id,
  } = req.body;
   if (
    !job_title ||
    !job_description ||
    !job_type ||
    !Salary_type ||
    !Salary ||
    !city
  ) {
    res.status(401).json({
      enter_all_detail: "enter all details",
    });
  } else if (status == false) {
    data = await Prisma.job.create({
      data: {
        job_title: job_title,
        select_department: select_department,
        select_branch: select_branch,
        job_description: job_description,
        job_type: job_type,
        Salary_type: Salary_type,
        Salary: Salary,
        status: status,
        city: city,
        user_id: req.user.id,
      },
    });
    res.status(200).json({
      data_enter_sucessfully: "data entered data_enter_sucessfully",
      data: data,
    });
  } else {
    data = await Prisma.job.create({
      data: {
        job_title: job_title,
        select_department: select_department,
        select_branch: select_branch,
        job_description: job_description,
        job_type: job_type,
        Salary_type: Salary_type,
        Salary: Salary,
        city: city,
        user_id: req.user.id,
      },
    });
    res.status(200).json({
      data_enter_sucessfully: "data entered data_enter_sucessfully",
      data: data,
    });
  }
}
async function getjobcontroller(req,res){
  try{
  const data = await Prisma.job.findMany()
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
/// free text controller depended upon job initial route
//
//
//
//
//
async function freeTextController(req, res) {
  const job_id = req.params.id;
  const data = await Prisma.job.findUnique({
    where: {
      id: job_id,
    },
  });
  if (!data) {
    res.status(400).json({
      job_not_found: "job not found",
    });
  } else {
    if (job_id) {
      const { optional, question } = req.body;
      
  
          const free_text_data = await Prisma.free_text.create({
            data: {
              job_id: job_id,
              question: question,
              user_id:req.user.id
            },
          });
          res.status(200).json({
            free_text_enter_sucessfully: "free text data enter scusselfully",
            data: free_text_data,
          });
        }
      }
    }
  

//// single choice route depended upon inital route of job route
//
//
//
//
//
async function singleChoiceController(req, res) {
  const job_id = req.params.id;
  const data = await Prisma.job.findUnique({
    where: {
      id: job_id,
    },
  });
  if (!data) {
    res.status(400).json({
      job_not_found: "job not found",
    });
  } else {
    if (job_id) {
      const { optional, question, option } = req.body;
     
        
          const single_choice_data = await Prisma.single_choice.create({
            data: {
              job_id: job_id,
              question: question,
              option: option,
              user_id:req.user.id
            },
          });
          res.status(200).json({
            single_choice_sucessfully: "single choice enter scusselfully",
            data: single_choice_data,
          });
        }
      }
    }
  

//// multiple choice route depended upon initial job route
//
//
//
//
//
//
async function multiChoiceController(req, res) {
  const job_id = req.params.id;
  const data = await Prisma.job.findUnique({
    where: {
      id: job_id,
    },
  });
  if (!data) {
    res.status(400).json({
      job_not_found: "job not found",
    });
  } else {
    if (job_id) {
      const { optional, question, option } = req.body;
      
       
          const multiple_choice_data = await Prisma.multiple_choice.create({
            data: {
              job_id: job_id,
              question: question,
              option: option,
              user_id:req.user.id
            },
          });
          res.status(200).json({
            multiple_choice_enter_sucessfully:
              "multi choice data enter scusselfully",
            data: multiple_choice_data,
          });
        }
      }
    }
  

/// delete the job route postion
async function requirementDelete(req, res) {
  var id = req.params.id;
  var job_id = req.params.id;
  console.log(job_id);
  if (job_id) {
    const data = await Prisma.job.delete({
      where: {
        id: job_id,
      },
    });
    const freeText = await Prisma.free_text.deleteMany({
      where: {
        job_id: job_id,
      },
    });
    const singleChoice = await Prisma.single_choice.deleteMany({
      where: {
        job_id: id,
      },
    });
    const multipleChoice = await Prisma.multiple_choice.deleteMany({
      where: {
        job_id: id,
      },
    });
    if (data && freeText && singleChoice && multipleChoice) {
      res.status(200).json({
        deletion_sucess: "deletion is sucessfully",
        data: data,
        freeText: freeText,
        singleChoice: singleChoice,
        multipleChoice: multipleChoice,
      });
    }
  } else {
    res.status(400).json({
      pass_the_job_id: "kindly pass the job id",
    });
  }
}

/// now setupped the update route for every route
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
  const job_id = req.params.id;
  var count = 0;
  if (!job_id) {
    res.status(400).json({
      user_id_not_found: "user id not found",
    });
  } else if (
    !job_title &&
    !select_branch &&
    !select_department &&
    !job_description &&
    !job_type &&
    !salary_type &&
    !salary &&
    !city
  ) {
    res.status(400).json({
      enter_one_field_to_update: "enter one field to get updated",
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
        res.status(400).json({
          changes_done_on_number_fiels: count,
        });
      } else {
        res.status(200).json({
          no_changes_done: "no changes get done",
        });
      }
    }
  }
}

//// route for update path free text

async function freeTextUpdate(req, res) {
  const { optional, question } = req.body;
  const free_text_id = req.params.freetextid;
  const job_id = req.params.jobid;
  const job = await Prisma.job.findUnique({
    where: {
      id: job_id,
    },
  });
  const free_text = await Prisma.free_text.findUnique({
    where: {
      id: free_text_id,
    },
  });
  if (!job) {
    res.status(400).json({
      no_job_found: "no job found with this id",
    });
  } else {
    if (!free_text) {
      res.status(400).json({
        no_free_text_found: "no free text question found with this id",
      });
    } else {
      if (!free_text_id || !job_id) {
        res.status(400).json({
          pass_both_id: "please pass both id",
        });
      } else {
        if (!optional && !question) {
          res.status(400).json({
            pass_one_field: "pass one field minimum",
          });
        } else {
          var count = 0;
          if (question) {
            await Prisma.free_text.update({
              where: {
                id: free_text_id,
              },
              data: {
                question: question,
              },
            });
            count++;
          }
          if (optional) {
            await Prisma.free_text.update({
              where: {
                id: free_text_id,
              },
              data: {
                optional: optional,
              },
            });
          }
          if (count > 0) {
            res.status(400).json({
              changes_done_on_number_fiels: count,
            });
          } else {
            res.status(200).json({
              no_changes_done: "no changes get done",
            });
          }
        }
      }
    }
  }
}

/// update route for single choice

async function singleChoiceUpdate(req, res) {
  const { optional, question, option } = req.body;
  const single_choice_id = req.params.singlechoiceid;
  const job_id = req.params.jobid;
  const job = await Prisma.job.findUnique({
    where: {
      id: job_id,
    },
  });
  const single_choice = await Prisma.single_choice.findUnique({
    where: {
      id: single_choice_id,
    },
  });
  if (!job) {
    res.status(400).json({
      no_job_found: "no job found with this id",
    });
  } else {
    if (!single_choice) {
      res.status(400).json({
        no_single_choice_found: "no single choice question found with this id",
      });
    } else {
      if (!single_choice_id || !job_id) {
        res.status(400).json({
          pass_both_id: "please pass both id",
        });
      } else {
        if (!optional && !question && !option) {
          res.status(400).json({
            pass_one_field: "pass one field minimum",
          });
        } else {
          var count = 0;
          if (question) {
            await Prisma.single_choice.update({
              where: {
                id: single_choice_id,
              },
              data: {
                question: question,
              },
            });
            count++;
          }
          if (optional) {
            await Prisma.single_choice.update({
              where: {
                id: single_choice_id,
              },
              data: {
                optional: optional,
              },
            });
            count++;
          }
          if (option) {
            await Prisma.single_choice.update({
              where: {
                id: single_choice_id,
              },
              data: {
                option: option,
              },
            });
            count++;
          }
          if (count > 0) {
            res.status(400).json({
              changes_done_on_number_fiels: count,
            });
          } else {
            res.status(200).json({
              no_changes_done: "no changes get done",
            });
          }
        }
      }
    }
  }
}

//// multiple choice question needed to be done

async function multipleChoiceUpdate(req, res) {
  const { optional, question, option } = req.body;
  const multiple_choice_id = req.params.multiplechoiceid;
  const job_id = req.params.jobid;
  const job = await Prisma.job.findUnique({
    where: {
      id: job_id,
    },
  });
  const multiple_choice = await Prisma.multiple_choice.findUnique({
    where: {
      id: multiple_choice_id,
    },
  });
  if (!job) {
    res.status(400).json({
      no_job_found: "no job found with this id",
    });
  } else {
    if (!multiple_choice) {
      res.status(400).json({
        no_multiple_choice_found:
          "no multiple choice question found with this id",
      });
    } else {
      if (!multiple_choice_id || !job_id) {
        res.status(400).json({
          pass_both_id: "please pass both id",
        });
      } else {
        if (!optional && !question && !option) {
          res.status(400).json({
            pass_one_field: "pass one field minimum",
          });
        } else {
          var count = 0;
          if (question) {
            await Prisma.multiple_choice.update({
              where: {
                id: multiple_choice_id,
              },
              data: {
                question: question,
              },
            });
            count++;
          }
          if (optional) {
            await Prisma.multiple_choice.update({
              where: {
                id: multiple_choice_id,
              },
              data: {
                optional: optional,
              },
            });
            count++;
          }
          if (option) {
            await Prisma.multiple_choice.update({
              where: {
                id: multiple_choice_id,
              },
              data: {
                option: option,
              },
            });
            count++;
          }
          if (count > 0) {
            res.status(400).json({
              changes_done_on_number_fiels: count,
            });
          } else {
            res.status(200).json({
              no_changes_done: "no changes get done",
            });
          }
        }
      }
    }
  }
}

module.exports = {
  requirementController,
  freeTextController,
  singleChoiceController,
  multiChoiceController,
  requirementDelete,
  requiermentsRouterUpdate,
  freeTextUpdate,
  singleChoiceUpdate,
  multipleChoiceUpdate,
  getjobcontroller
};
