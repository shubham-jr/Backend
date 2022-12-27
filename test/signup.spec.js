const chai = require("chai");
const chaiHttp = require("chai-http");
const { when } = require("joi");
const expect = chai.expect;
chai.use(chaiHttp);
const app = require("../src/app");

// test case for full signup api

describe("no data send", () => {
  it("----result when no data send in json ----", () => {
    chai
      .request(app)
      .post("/signup")
      .send({
        checkbox: true,
      })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.body).to.have.all.keys("enter_all_detail");
      });
  });
});

//all data send

describe("all data send", () => {
  it("------ result when all data get posted-----", () => {
    chai
      .request(app)
      .post("/signup")
      .send({
        full_name: "fake test name",
        company_name: "fake company name",
        country_code: "IN",
        contact_number: "8840330283",
        email: "tekoyat989@paxven.com",
        password: "12345",
        confirm_password: "12345",
        checkbox: true,
      })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.status).to.be.equal(200);
        expect(res.body).to.have.all.keys("data_sucess");
      });
  });
});

// email validation working perfectly

describe("email is wrong", () => {
  it("------ result when email wrong posted-----", () => {
    chai
      .request(app)
      .post("/signup")
      .send({
        full_name: "fake test name",
        company_name: "fake company name",
        country_code: "IN",
        contact_number: "8840330283",
        email: "test1",
        password: "12345",
        confirm_password: "12345",
        checkbox: true,
      })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.status).to.be.equal(401);
        expect(res.body).to.have.all.keys("valid_email");
      });
  });
});

// pasword dont match route

describe("password dont match", () => {
  it("------ result when password dont match-----", () => {
    chai
      .request(app)
      .post("/signup")
      .send({
        full_name: "fake test name",
        company_name: "fake company name",
        country_code: "IN",
        contact_number: "8840330283",
        email: "test1@gmail.com",
        password: "12345",
        confirm_password: "1235",
        checkbox: true,
      })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.status).to.be.equal(401);
        expect(res.body).to.have.all.keys("password_dont_match");
      });
  });
});

// valid contact no

describe("result when contact no is wrong", () => {
  it("------ result when contact no is wrong-----", () => {
    chai
      .request(app)
      .post("/signup")
      .send({
        full_name: "fake test name",
        company_name: "fake company name",
        country_code: "IN",
        contact_number: "88400283",
        email: "test1@gmail.com",
        password: "12345",
        confirm_password: "12345",
        checkbox: true,
      })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.status).to.be.equal(401);
        expect(res.body).to.have.all.keys("valid_contact_no");
      });
  });
});
