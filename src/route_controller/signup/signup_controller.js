const validator = require("email-validator");
const { isValidNumber } = require("libphonenumber-js");
const bcrypt = require("bcrypt");
const Prisma = require("../../../config/helper.js");
async function signupController(req, res) {
  const {
    full_name,
    company_name,
    contact_number,
    email,
    password,
    confirm_password,
    checkbox,
    country_code,
  } = req.body;

  if (!checkbox) {
    res.status(400).json({
      check_the_box: "kinldy check the checkbox",
    });
  } else if (
    !full_name ||
    !company_name ||
    !contact_number ||
    !email ||
    !password ||
    !confirm_password ||
    !country_code
  ) {
    res.status(400).json({
      enter_all_detail: "Bad request enter all the information",
    });
  } else if (!validator.validate(email)) {
    res.status(401).json({
      valid_email: "unauthorized email",
    });
  } else if (false) {
    res.status(401).json({
      valid_contact_no: "unauthorized contact no",
    });
  } else if (password != confirm_password) {
    res.status(401).json({
      password_dont_match: "password and confirm password don't match",
    });
  } else {
    bcrypt.hash(password, 8, async function (err, hash) {
      // Store hash in your password DB.
      if (err) {
        res.status(400).json({
          unfav_error: "some error ocurred",
        });
      } else {
        const user = await Prisma.user.create({
          data: {
            full_name: full_name,
            company_name: company_name,
            contact_number: contact_number,
            email: email,
            password: hash,
            checkbox: checkbox,
            country_code: country_code,
          },
        });
        res.status(200).json({
          data_sucess: user,
        });
      }
    });
  }
}
module.exports = { signupController };
