import request from "supertest";
import app from "../src/app";
import sequelize from "../src/config/database";

describe("User Routes", () => {
  it("should get available grocery items", async () => {
    const res = await request(app).get("/user/groceries");

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});

beforeAll(async () => {
  await sequelize.sync({ force: true }); // 👈 Sync models before tests
});

afterAll(async () => {
  await sequelize.close(); // 👈 Close DB after tests
});
