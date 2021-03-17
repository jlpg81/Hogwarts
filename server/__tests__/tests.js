const request = require("supertest");

require("dotenv").config();
const runapp = require("../app");
let app;

beforeAll(() => {
  app = runapp(4001);
});

test("Testing routes", (done) => {
  request(app.app).get("/customers").expect(200, done);
  request(app.app).get("/customer/1").expect(200, done);
  request(app.app).get("/orders").expect(200, done);
  request(app.app).get("/technicians").expect(200, done);
  request(app.app).get("/services").expect(200, done);
  request(app.app).get("/crazypage").expect(404, done);
});

// Testing login (3)
test("auth doesnt find jorrge@email.com", (done) => {
  request(app.app)
    .post("/login")
    .set("content-type", "application/json")
    .send({ email: "jorrge@email.com" })
    .expect(400, done);
  request(app.app)
    .post("/login")
    .set("content-type", "application/json")
    .send({ email: "jorge@email.com", password: "hello2" })
    .expect(400, done);
  request(app.app)
    .post("/login")
    .set("content-type", "application/json")
    .send({ email: "jorge@email.com", password: "hello" })
    .expect(200, done);
});

// test("auth finds jorge@email.com but with a wrong password", (done) => {
//   request(app.app)
//     .post("/login")
//     .set("content-type", "application/json")
//     .send({ email: "jorge@email.com", password: "hello2" })
//     .expect(400, done);
// });

// test("auth finds jorge@email.com", (done) => {
//   request(app.app)
//     .post("/login")
//     .set("content-type", "application/json")
//     .send({ email: "jorge@email.com", password: "hello" })
//     .expect(200, done);
// });

afterAll(() => {
  app.server.close();
});
