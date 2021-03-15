// const auth = require("../controller/auth-controller");
require("dotenv").config();

const runapp = require("../app");
const request = require("supertest");
let app;

beforeAll(() => {
  app = runapp(4001);
});

test("auth doesnt find jorrge@email.com", (done) => {
  request(app.app)
    .post("/login")
    .set("content-type", "application/json")
    .send({ email: "jorrge@email.com" })
    .expect(400, done);
});

test("auth finds jorge@email.com but with a wrong password", (done) => {
  request(app.app)
    .post("/login")
    .set("content-type", "application/json")
    .send({ email: "jorge@email.com", password: "hello2" })
    .expect(400, done);
});

test("auth finds jorge@email.com", (done) => {
  request(app.app)
    .post("/login")
    .set("content-type", "application/json")
    .send({ email: "jorge@email.com", password: "hello" })
    .expect(200, done);
});

afterAll(() => {
  app.server.close();
});
