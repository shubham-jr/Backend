const Prisma = require("../../../config/helper.js");
const nodemailer = require("nodemailer");
const otpGenerator = require("otp-generator");
const bcrypt = require("bcrypt");
var otp_gen_global;
var bool = false;
var global_email;
async function forgotController(req, res) {
  const { email } = req.body;
  global_email = email;
  if (!email) {
    res.status(400).json({
      enter_email: "enter the email address",
    });
  } else {
    const data = await Prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (data) {
      //sending otp to desired email
      otp_gen_global = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
        specialChars: false,
      });

      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_ID_KEY,
          pass: process.env.EMAIL_ID_KEY_GEN,
        },
      });
      const mailoption = {
        from: "testnodemailerkrishna@gmail.com",
        to: global_email,
        subject: "otp for",
        text: "your otp is :- " + otp_gen_global,
      };

      transporter.sendMail(mailoption, function (err, info) {
        if (err) {
          console.log(err);
        } else {
          res.json({
            info: info.response,
          });
        }
      });
    } else {
      res.status(400).json({
        email_invalid: "enter a valid email",
      });
    }
  }
}
async function forgotControllerOtpVerify(req, res) {
  if (!otp_gen_global) {
    res.status(401).json({
      bad_request: "bad request",
    });
  } else {
    const { otp } = req.body;
    if (!otp) {
      res.status(404).json({
        enter_otp: "enter the otp",
      });
    } else {
      if (otp == otp_gen_global) {
        bool = true;
        res.status(200).json({
          bool: bool,
        });
      } else {
        res.status(401).json({
          enter_correct_otp: "enter the correct otp",
        });
      }
    }
  }
}

async function forgotControllerPasswordUpdate(req, res) {
  const { password, confirm_password } = req.body;
  if (!bool) {
    res.status(401).json({
      bad_request: "bad request",
    });
  } else {
    if (!password || !confirm_password) {
      res.status(404).json({
        enter_all_fields: "enter all the fields",
      });
    } else {
      if (password != confirm_password) {
        res.status(401).json({
          password_dont_match: "both password dont match",
        });
      } else {
        bcrypt.hash(password, 8, async function (err, hash) {
          // Store hash in your password DB

          if (err) {
            res.status(400).json({
              unfav_error: "some unfavourable error occurred",
            });
          } else {
            await Prisma.user.update({
              where: {
                email: global_email,
              },
              data: {
                password: hash,
              },
            });
            res.status(200).json({
              password_update_sucess: "password updated sucessfully ",
            });
          }
        });
      }
    }
  }
}
module.exports = {
  forgotController,
  forgotControllerOtpVerify,
  forgotControllerPasswordUpdate,
};
