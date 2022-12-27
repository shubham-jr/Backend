const chai = require("chai");
const chaiHttp = require("chai-http");
const { when } = require("joi");
const expect = chai.expect;
chai.use(chaiHttp);
const app = require("../src/app");

// test case for login signup api

describe("no data send login", () => {
  it("----result when no data send in json ----", () => {
    chai
      .request(app)
      .post("/login")
      .send({
        checkbox: true,
      })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.body).to.have.all.keys("enter_all_value");
      });
  });
});

//invalid email send

describe("when invalid email send", () => {
  it("------ result when invalid email get posted-----", () => {
    chai
      .request(app)
      .post("/login")
      .send({
        email: "test1",
        password: "12345",
      })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.status).to.be.equal(400);
        expect(res.body).to.have.all.keys("valid_email");
      });
  });
});

//email_not_found

describe("when wrogn email get posted", () => {
  it("------ result when wrong email get posted-----", () => {
    chai
      .request(app)
      .post("/login")
      .send({
        email: "unemail@gmail.com",
        password: "12345",
      })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.status).to.be.equal(404);
        expect(res.body).to.have.all.keys("email_not_found");
      });
  });
});

//password wrong found

describe("when wrogn password get entered", () => {
  it("------ result when wrogn password get posted-----", () => {
    chai
      .request(app)
      .post("/login")
      .send({
        email: "test@gmail.com",
        password: "wrong password",
      })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.status).to.be.equal(400);
        expect(res.body).to.have.all.keys("password_wrong");
      });
  });
});

//all login details entered scussefully

describe("all login details entered scussefully", () => {
  it("------ result when all details entered scussefully-----", () => {
    chai
      .request(app)
      .post("/login")
      .send({
        email: "test@gmail.com",
        password: "12345",
      })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.status).to.be.equal(200);
        expect(res.body).to.have.all.keys("login_sucess", "token");
      });
  });
});
