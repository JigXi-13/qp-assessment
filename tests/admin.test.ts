import request from "supertest";
import app from "../src/app";
import sequelize from "../src/config/database";

describe("Admin Routes", () => {
  //   it('should add a new grocery item', async () => {
  //     const res = await request(app).post('/admin/grocery').send({
  //       name: 'Test Banana',
  //       price: 15.5,
  //       quantity: 25,
  //     });

  //     expect(res.statusCode).toBe(201);
  //     expect(res.body.name).toBe('Test Banana');
  //   });

  it("should fetch all grocery items", async () => {
    const res = await request(app).get("/admin/grocery").set("x-role", "admin");

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
