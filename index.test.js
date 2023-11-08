const request = require("supertest");
const app = require("./index.js");

describe("GET /", () => {
  it("responds with JSON message", (done) => {
    request(app)
      .get("/")
      .expect("Content-Type", /json/)
      .expect(200)
      .expect({ response: "Hello From Thetips4you" })
      .end(done);
  });
});

// describe("GET /will", () => {
//   it("responds with JSON message", (done) => {
//     request(app)
//       .get("/will")
//       .expect("Content-Type", /json/)
//       .expect(200)
//       .expect({ response: "Hello World" })
//       .end(done);
//   });
// });
