const request = require("supertest");

require("dotenv").config();
const runapp = require("../app");
let app;

beforeAll(() => {
  app = runapp(4002);
});

test("gets the customers page", (done) => {
  request(app.app).get("/customers").expect(200, done);
});

test("gets the first customers", (done) => {
  request(app.app).get("/customer/1").expect(200, done);
});

test("gets the orders page", (done) => {
  request(app.app).get("/orders").expect(200, done);
});

test("gets the technicians page", (done) => {
  request(app.app).get("/technicians").expect(200, done);
});

test("gets the services page", (done) => {
  request(app.app).get("/services").expect(200, done);
});

test("is not able to get a crazy page", (done) => {
  request(app.app).get("/crazypage").expect(404, done);
});

afterAll(() => {
  app.server.close();
});
