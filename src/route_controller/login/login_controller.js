const validator = require("email-validator");
const wrapper = require("structured-json-response")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Prisma = require("../../../config/helper.js");



/*

  login logic goes here 
  hashing the password
  setting the jwt tokken with SCERET_KEY

*/

async function loginController(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json(wrapper.failured('provide all info'));
  } else if (!validator.validate(email)) {
    res.status(400).json({
      valid_email: "enter valid email",
    });
  } else {
    const data = await Prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (data) {
      bcrypt.compare(password, data.password, (err, result) => {
        if (err) {
          res.status(401).json({
            some_bad_happen: "some bad thing happened",
          });
        } else {
          if (result) {
            var token = jwt.sign(
              {
                email: data.email,
                name: data.full_name,
                company: data.company_name,
                contact: data.contact_number,
                id: data.id,
              },
              process.env.SECRET_KEY
            );
            res.status(200).json({
              login_sucess: "login sucessfully",
              token: token,
            });
          } else {
            res.status(400).json({
              password_wrong: "enter correct password",
            });
          }
        }
      });
    } else {
      res.status(404).json({
        email_not_found: "entered email not found",
      });
    }
  }
}
module.exports = { loginController };
