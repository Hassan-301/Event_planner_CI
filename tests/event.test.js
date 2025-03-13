const request = require("supertest");
const app = require("../server");
const mongoose = require("mongoose");

afterAll(async () => {
    await mongoose.connection.close(); // Close DB connection after tests
});

describe("Event API", () => {
    it("should return 401 for unauthorized event creation", async () => {
        const res = await request(app)
            .post("/api/events")
            .send({ name: "Test Event", description: "Sample Description", date: "2025-03-14", category: "Meeting" });

        expect(res.statusCode).toEqual(401);
    });

    it("should return 401 for unauthorized event retrieval", async () => {
        const res = await request(app).get("/api/events");
        expect(res.statusCode).toEqual(401);
    });
});
